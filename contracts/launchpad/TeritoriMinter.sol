// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./TeritoriNft.sol";

contract TeritoriMinter is Ownable, Pausable {
    using SafeERC20 for IERC20;

    event TokenRequest(address user);

    struct WhitelistMintConfig {
        uint256 mintMax;
        uint256 mintPeriod;
        uint256 mintPrice;
    }
    struct MintConfig {
        uint256 maxSupply;
        address mintToken; // address(0) for ETH payment
        uint256 mintStartTime;
        WhitelistMintConfig[] whitelistMints;
        uint256 publicMintPrice;
        uint256 publicMintMax;
        string baseUrl;
    }

    address public minter;
    address public nft;
    MintConfig internal _config;
    mapping(address => mapping(uint256 => bool)) public userWhitelisted;
    mapping(address => uint256) public userMinted;

    mapping(uint256 => address) public tokenRequests;
    uint256 public tokenRequestsCount;
    uint256 public currentSupply;

    constructor(
        string memory _name,
        string memory _symbol,
        address _nft_impl,
        address _minter
    ) Ownable() Pausable() {
        nft = Clones.clone(_nft_impl);
        TeritoriNft(nft).initialize(_name, _symbol);
        minter = _minter;
    }

    function config() external view returns (MintConfig memory) {
        return _config;
    }

    function setConfig(MintConfig memory newConfig) external onlyOwner {
        _config.maxSupply = newConfig.maxSupply;
        _config.mintToken = newConfig.mintToken;
        _config.mintStartTime = newConfig.mintStartTime;
        _config.publicMintPrice = newConfig.publicMintPrice;
        _config.publicMintMax = newConfig.publicMintMax;
        _config.baseUrl = newConfig.baseUrl;

        // delete previous whitelist mint period
        uint256 previousLength = _config.whitelistMints.length;
        for (uint256 i = 0; i < previousLength; i++) {
            _config.whitelistMints.pop();
        }
        // add new whitelist mint period
        for (uint256 i = 0; i < newConfig.whitelistMints.length; i++) {
            _config.whitelistMints.push(newConfig.whitelistMints[i]);
        }
    }

    function pause() external onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() external onlyOwner whenPaused {
        _unpause();
    }

    function whitelist(
        address[] memory users,
        uint256 whitelistPhase,
        bool whitelisted
    ) external onlyOwner {
        for (uint256 i = 0; i < users.length; i++) {
            userWhitelisted[users[i]][whitelistPhase] = whitelisted;
        }
    }

    function requestMint(address user) external payable whenNotPaused {
        require(_config.mintStartTime <= block.timestamp, "MINT_NOT_STARTED");

        uint256 mintCount = userMinted[user];
        uint256 currentPhase = _config.mintStartTime;
        uint256 mintPrice = _config.publicMintPrice;
        for (uint256 i = 0; i < _config.whitelistMints.length; i++) {
            WhitelistMintConfig memory whitelistMintConfig = _config
                .whitelistMints[i];
            if (
                currentPhase + whitelistMintConfig.mintPeriod >= block.timestamp
            ) {
                mintPrice = whitelistMintConfig.mintPrice;
                require(userWhitelisted[user][i], "NOT_WHITELISTED");
                require(
                    mintCount < whitelistMintConfig.mintMax,
                    "EXCEED_WHITELIST_MINT_MAX"
                );
                break;
            }
            currentPhase += whitelistMintConfig.mintPeriod;
        }

        require(mintCount < _config.publicMintMax, "EXCEED_MINT_MAX");

        if (_config.mintToken == address(0)) {
            require(msg.value == mintPrice, "INVALID_AMOUNT");
        } else {
            IERC20(_config.mintToken).safeTransferFrom(
                msg.sender,
                address(this),
                mintPrice
            );
        }

        tokenRequests[tokenRequestsCount] = user;
        tokenRequestsCount++;

        emit TokenRequest(user);
    }

    function mint(
        uint256 tokenId,
        address royaltyReceiver,
        uint96 royaltyPercentage,
        string memory tokenUri
    ) external {
        require(msg.sender == minter, "UNAUTHORIZED");
        require(currentSupply > tokenRequestsCount, "NO_TOKEN_REQUEST");

        address user = tokenRequests[currentSupply];
        currentSupply++;
        TeritoriNft(nft).mint(
            user,
            tokenId,
            royaltyReceiver,
            royaltyPercentage,
            tokenUri
        );
    }

    function mintWithMetadata(
        uint256 tokenId,
        address royaltyReceiver,
        uint96 royaltyPercentage,
        string memory tokenUri,
        TeritoriNft.Metadata memory extension
    ) external {
        require(msg.sender == minter, "UNAUTHORIZED");
        require(currentSupply > tokenRequestsCount, "NO_TOKEN_REQUEST");

        address user = tokenRequests[currentSupply];
        currentSupply++;
        TeritoriNft(nft).mintWithMetadata(
            user,
            tokenId,
            royaltyReceiver,
            royaltyPercentage,
            tokenUri,
            extension
        );
    }

    function withdrawFund() external onlyOwner {
        if (_config.mintToken == address(0)) {
            payable(msg.sender).call{value: address(this).balance}("");
        } else {
            IERC20(_config.mintToken).safeTransfer(
                msg.sender,
                IERC20(_config.mintToken).balanceOf(address(this))
            );
        }
    }
}
