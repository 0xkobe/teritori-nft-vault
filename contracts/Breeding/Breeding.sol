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
        uint256 currentSupply;
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

    BreedInfo[] public breedList;
    mapping(uint256 => uint256) public nftBreededCount;
    mapping(address => uint256[]) private _userBreedList;

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
        TeritoriNft(childCollection).initialize(
            _child_name,
            _child_symbol,
            _child_URI
        );

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
    {
        require(
            breedConfig.startTime != 0 &&
                breedConfig.startTime <= block.timestamp,
            "BREED_NOT_STARTED"
        );
        require(
            breedList.length < childCollectionConfig.maxSupply,
            "BREED_ENDED"
        );

        // pay breeding fee
        IERC20(breedConfig.currency).uniSafeTransferFrom(
            msg.sender,
            breedConfig.priceAmount
        );

        // check count limit
        require(
            nftBreededCount[tokenId1] < breedConfig.countLimit &&
                nftBreededCount[tokenId2] < breedConfig.countLimit,
            "BREED_COUNT_LIMIT"
        );
        nftBreededCount[tokenId1]++;
        nftBreededCount[tokenId2]++;

        BreedInfo memory info = BreedInfo({
            owner: msg.sender,
            parentTokenId1: tokenId1,
            parentTokenId2: tokenId2,
            childTokenId: 0,
            startTime: block.timestamp,
            endTime: block.timestamp + breedConfig.duration,
            withdrawn: false
        });

        // check duration
        if (breedConfig.duration == 0) {
            // check nft ownership
            require(
                TeritoriNft(parentCollection).ownerOf(tokenId1) == msg.sender &&
                    TeritoriNft(parentCollection).ownerOf(tokenId2) ==
                    msg.sender,
                "NOT_OWNER"
            );
            info.withdrawn = true;
        } else {
            // lock nfts
            TeritoriNft(parentCollection).safeTransferFrom(
                msg.sender,
                address(this),
                tokenId1
            );
            TeritoriNft(parentCollection).safeTransferFrom(
                msg.sender,
                address(this),
                tokenId2
            );
        }

        // save breed info
        breedList.push(info);
        userBreedList[msg.sender].push(breedList.length - 1);
    }

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

    function userBreedList(address user)
        external
        view
        returns (uint256[] memory)
    {
        return _userBreedList[user];
    }
}
