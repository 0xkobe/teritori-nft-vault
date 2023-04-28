// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "../lib/UniSafeERC20.sol";
import "./MysteryNft.sol";
import "./BonusPerkNft.sol";

contract BonusPerkBreeding is Ownable, Pausable, ReentrancyGuard, ERC721Holder {
    using UniSafeERC20 for IERC20;

    event WithdrawFund(address token, uint256 amount);
    event Breed(
        address user,
        uint256 mysteryBoxTokenId,
        uint256 mysteryKeyTokenId
    );
    event Mint(address user, uint256 bonusPerkTokenId);

    struct BreedConfig {
        uint256 startTime;
        uint256 priceAmount;
        address currency; // address(0) for ETH payment
    }

    struct BreedInfo {
        address owner;
        uint256 mysteryBoxTokenId;
        uint256 mysteryKeyTokenId;
        uint256 bonusPerkTokenId;
    }

    address public minter;
    address public riot;
    address public bonusPerk;
    address public nftMetadataRegistry;
    BreedConfig public breedConfig;

    BreedInfo[] public breedList;
    mapping(address => uint256[]) private _userBreedList;

    constructor(
        address _riot,
        address _bonusPerk,
        address _nftMetadataRegistry,
        BreedConfig memory _breedConfig
    ) Ownable() Pausable() ReentrancyGuard() {
        riot = _riot;
        bonusPerk = _bonusPerk;
        nftMetadataRegistry = _nftMetadataRegistry;
        breedConfig = _breedConfig;
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

    function setBreedConfig(
        BreedConfig memory newBreedConfig
    ) external onlyOwner {
        breedConfig = newBreedConfig;
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

    function breed(
        uint256 mysteryBoxTokenId,
        uint256 mysteryKeyTokenId
    ) external payable whenNotPaused nonReentrant {
        require(
            breedConfig.startTime != 0 &&
                breedConfig.startTime <= block.timestamp,
            "BREED_NOT_STARTED"
        );

        // pay breeding fee
        IERC20(breedConfig.currency).uniSafeTransferFrom(
            msg.sender,
            breedConfig.priceAmount
        );

        BreedInfo memory info = BreedInfo({
            owner: msg.sender,
            mysteryBoxTokenId: mysteryBoxTokenId,
            mysteryKeyTokenId: mysteryKeyTokenId,
            bonusPerkTokenId: 0
        });

        // check nft ownership
        require(
            MysteryNft(mysteryBox).ownerOf(mysteryBoxTokenId) == msg.sender &&
                MysteryNft(mysteryKey).ownerOf(mysteryKeyTokenId) == msg.sender,
            "NOT_OWNER"
        );
        MysteryNft(mysteryBox).burn(mysteryBoxTokenId);
        MysteryNft(mysteryKey).burn(mysteryKeyTokenId);

        // save breed info
        breedList.push(info);
        _userBreedList[msg.sender].push(breedList.length - 1);

        emit Breed(msg.sender, mysteryBoxTokenId, mysteryKeyTokenId);
    }

    function mint(uint256[] memory tokenIds) external nonReentrant {
        require(msg.sender == minter, "UNAUTHORIZED");

        uint256 currentSupply = BonusPerkNft(bonusPerk).totalSupply();
        require(
            currentSupply + tokenIds.length <= breedList.length,
            "ALL_BREED_PROCESSED"
        );

        for (uint256 i = 0; i < tokenIds.length; ++i) {
            breedList[currentSupply].bonusPerkTokenId = tokenIds[i];
            BonusPerkNft(bonusPerk).mint(
                breedList[currentSupply].owner,
                tokenIds[i]
            );
            emit Mint(breedList[currentSupply].owner, tokenIds[i]);

            currentSupply++;
        }
    }

    function userBreedList(
        address user
    ) external view returns (uint256[] memory) {
        return _userBreedList[user];
    }

    function breedRequestsCount() external view returns (uint256) {
        return breedList.length;
    }
}
