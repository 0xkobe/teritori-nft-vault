// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "../launchpad/TeritoriNft.sol";
import "../lib/UniSafeERC20.sol";

contract Breeding is Ownable, Pausable, ReentrancyGuard {
    using UniSafeERC20 for IERC20;

    event WithdrawFund(address token, uint256 amount);

    struct ChildCollectionConfig {
        uint256 maxSupply;
        string baseUrl;
    }

    struct BreedConfig {
        uint256 startTime;
        uint256 countLimit;
        uint256 duration;
        uint256 priceAmount;
        address currency; // address(0) for ETH payment
    }

    struct BreedInfo {
        address owner;
        uint256 parentTokenId1;
        uint256 parentTokenId2;
        uint256 childTokenId;
        uint256 startTime;
        uint256 endTime;
        bool withdrawn;
    }

    address public minter;
    address public parentCollection;
    address public childCollection;
    BreedConfig public breedConfig;
    ChildCollectionConfig public childCollectionConfig;

    constructor(
        address _parentCollection,
        string memory _child_name,
        string memory _child_symbol,
        string memory _child_URI,
        address _nft_impl,
        BreedConfig memory _breedConfig,
        ChildCollectionConfig memory _childCollectionConfig
    ) Ownable() Pausable() ReentrancyGuard() {
        parentCollection = _parentCollection;
        childCollection = Clones.clone(_nft_impl);
        TeritoriNft(childCollection).initialize(_child_name, _child_symbol, _child_URI);

        breedConfig = _breedConfig;
        childCollectionConfig = _childCollectionConfig;
    }

    function pause() external onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() external onlyOwner whenPaused {
        _unpause();
    }

    function setMinter(address newMinter) external onlyOwner {
        minter = newMinter;
    }

    function setBreedConfig(BreedConfig memory newBreedConfig)
        external
        onlyOwner
    {
        breedConfig = newBreedConfig;
    }

    function setChildCollectionConfig(
        ChildCollectionConfig memory newChildCollectionConfig
    ) external onlyOwner {
        childCollectionConfig = newChildCollectionConfig;
    }

    function startBreed() external onlyOwner {
        breedConfig.startTime = block.timestamp;
    }

    function withdrawFund() external onlyOwner {
        uint256 withdrawBalance = 0;
        if (breedConfig.currency == UniSafeERC20.NATIVE_TOKEN) {
            withdrawBalance = address(this).balance;
        } else {
            withdrawBalance = IERC20(breedConfig.currency).balanceOf(
                address(this)
            );
        }

        require(withdrawBalance > 0, "NO_AVAILABLE_FUND");
        IERC20(breedConfig.currency).uniSafeTransfer(
            msg.sender,
            withdrawBalance
        );
        emit WithdrawFund(breedConfig.currency, withdrawBalance);
    }

    function breed(uint256 tokenId1, uint256 tokenId2)
        external
        payable
        whenNotPaused
        nonReentrant
    {}

    struct MintData {
        uint256 tokenId;
        address royaltyReceiver;
        uint96 royaltyPercentage;
        string tokenUri;
    }

    function mint(MintData[] memory mintData) external nonReentrant {
        require(msg.sender == minter, "UNAUTHORIZED");
    }

    struct MintDataWithMetadata {
        uint256 tokenId;
        address royaltyReceiver;
        uint96 royaltyPercentage;
        string tokenUri;
        TeritoriNft.Metadata extension;
    }

    function mintWithMetadata(MintDataWithMetadata[] memory mintData)
        external
        nonReentrant
    {
        require(msg.sender == minter, "UNAUTHORIZED");
    }
}
