// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "../lib/UniSafeERC20.sol";
import "../registry/NFTMetadataRegistry.sol";
import "./BonusPerkNft.sol";

contract BonusPerkBreeding is Ownable, Pausable, ReentrancyGuard, ERC721Holder {
    using UniSafeERC20 for IERC20;

    event WithdrawFund(address token, uint256 amount);
    event Breed(address user, uint256 riotTokenId, uint256 bonusPerkTokenId);

    struct BreedConfig {
        uint256 startTime;
        uint256 priceAmount;
        address currency; // address(0) for ETH payment
    }

    bytes32 public constant STAMINA = keccak256(abi.encode("Stamina"));
    bytes32 public constant LUCK = keccak256(abi.encode("Luck"));
    bytes32 public constant PROTECTION = keccak256(abi.encode("Protection"));

    struct BreedInfo {
        address owner;
        uint256 riotTokenId;
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
        minter = msg.sender;
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
        uint256 riotTokenId,
        uint256 bonusPerkTokenId
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
            riotTokenId: riotTokenId,
            bonusPerkTokenId: bonusPerkTokenId
        });

        // check nft ownership
        require(
            BonusPerkNft(riot).ownerOf(riotTokenId) == msg.sender &&
                BonusPerkNft(bonusPerk).ownerOf(bonusPerkTokenId) == msg.sender,
            "NOT_OWNER"
        );

        // update riot metadata based on the bonus perk
        _handleBonusPerk(STAMINA, riotTokenId, bonusPerkTokenId);
        _handleBonusPerk(PROTECTION, riotTokenId, bonusPerkTokenId);
        _handleBonusPerk(LUCK, riotTokenId, bonusPerkTokenId);

        // burn bonus perk
        BonusPerkNft(bonusPerk).safeTransferFrom(
            msg.sender,
            address(this),
            bonusPerkTokenId
        );
        BonusPerkNft(bonusPerk).burn(bonusPerkTokenId);

        // save breed info
        breedList.push(info);
        _userBreedList[msg.sender].push(breedList.length - 1);

        emit Breed(msg.sender, riotTokenId, bonusPerkTokenId);
    }

    function _handleBonusPerk(
        bytes32 key,
        uint256 riotTokenId,
        uint256 bonusPerkTokenId
    ) internal {
        uint256 bonus = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            bonusPerk,
            key,
            bonusPerkTokenId
        );
        if (bonus > 0) {
            uint256 cur = NFTMetadataRegistry(nftMetadataRegistry).metadata(
                riot,
                key,
                riotTokenId
            );
            NFTMetadataRegistry(nftMetadataRegistry).registerNftMegadata(
                riot,
                key,
                riotTokenId,
                cur + bonus
            );
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
