// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "./NFTMetadataRegistry.sol";

/// @dev use metadata registry + multi squad staking
contract SquadStakingV3 is Ownable, Pausable, ERC721Holder {
    using EnumerableSet for EnumerableSet.AddressSet;

    event Stake(address user, uint256 startTime, uint256 endTime);
    event Unstake(address user);

    struct NftInfo {
        address collection;
        uint256 tokenId;
    }
    struct SquadInfo {
        uint256 startTime;
        uint256 endTime;
        NftInfo[] nfts;
    }
    struct SquadInfoWithIndex {
        uint256 index;
        uint256 startTime;
        uint256 endTime;
        NftInfo[] nfts;
    }

    uint256 public constant BONUS_MULTIPLIER_BASE_POINT = 1e18;
    bytes32 public constant STAMINA = keccak256(abi.encode("Stamina"));

    address public nftMetadataRegistry;
    uint256 public minSquadSize;
    uint256 public maxSquadSize;
    uint256 public maxSquadCount;
    uint256 public cooldownPeriod;
    mapping(uint256 => uint256) public bonusMultipliers;
    EnumerableSet.AddressSet private _supportedCollections;
    mapping(address => mapping(uint256 => SquadInfo)) private userSquads;
    mapping(address => uint256) private userLastWithdrawnIndex;
    mapping(address => uint256) private userLastDepositIndex;

    constructor(
        address _nftMetadataRegistry,
        uint256 _minSquadSize,
        uint256 _maxSquadSize,
        uint256 _maxSquadCount,
        uint256 _cooldownPeriod,
        uint256[] memory _bonusMultipliers
    ) Ownable() Pausable() {
        nftMetadataRegistry = _nftMetadataRegistry;
        minSquadSize = _minSquadSize;
        maxSquadSize = _maxSquadSize;
        maxSquadCount = _maxSquadCount;
        cooldownPeriod = _cooldownPeriod;
        for (uint256 i = 0; i < _bonusMultipliers.length; ++i) {
            bonusMultipliers[i] = _bonusMultipliers[i];
        }
    }

    function pause() external onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() external onlyOwner whenPaused {
        _unpause();
    }

    function setSquadSize(
        uint256 _minSquadSize,
        uint256 _maxSquadSize
    ) external onlyOwner {
        minSquadSize = _minSquadSize;
        maxSquadSize = _maxSquadSize;
    }

    function setMaxSquadCount(uint256 _maxSquadCount) external onlyOwner {
        maxSquadCount = _maxSquadCount;
    }

    function setCooldownPeriod(uint256 _cooldownPeriod) external onlyOwner {
        cooldownPeriod = _cooldownPeriod;
    }

    function setBonusMultiplier(
        uint256[] memory _size,
        uint256[] memory _bonusMultipliers
    ) external onlyOwner {
        require(_size.length == _bonusMultipliers.length, "length mismatch");
        for (uint256 i = 0; i < _bonusMultipliers.length; ++i) {
            bonusMultipliers[_size[i]] = _bonusMultipliers[i];
        }
    }

    function setSupportedCollection(
        address collection,
        bool supported
    ) external onlyOwner {
        if (supported) {
            _supportedCollections.add(collection);
        } else {
            _supportedCollections.remove(collection);
        }
    }

    function isSupportedCollection(address nft) public view returns (bool) {
        return _supportedCollections.contains(nft);
    }

    function supportedCollectionLength() external view returns (uint256) {
        return _supportedCollections.length();
    }

    function supportedCollectionAt(
        uint256 index
    ) external view returns (address) {
        return _supportedCollections.at(index);
    }

    function supportedCollections(
        uint256 index
    ) external view returns (address[] memory collections) {
        uint256 length = _supportedCollections.length();
        collections = new address[](length);
        for (uint256 i = 0; i < length; ++i) {
            collections[i] = _supportedCollections.at(index);
        }
    }

    function userSquadInfo(
        address user
    ) external view returns (SquadInfoWithIndex[] memory squads) {
        uint256 count = userLastDepositIndex[user] -
            userLastWithdrawnIndex[user];
        squads = new SquadInfoWithIndex[](count);
        for (uint256 i = 0; i < count; ++i) {
            uint256 index = i + userLastWithdrawnIndex[user] + 1;
            squads[i].index = index;
            squads[i].startTime = userSquads[user][index].startTime;
            squads[i].endTime = userSquads[user][index].endTime;
            squads[i].nfts = userSquads[user][index].nfts;
        }
    }

    function userSquadCount(address user) external view returns (uint256) {
        return userLastDepositIndex[user] - userLastWithdrawnIndex[user];
    }

    function stake(NftInfo[] memory nfts) external whenNotPaused {
        require(
            nfts.length >= minSquadSize && nfts.length <= maxSquadSize,
            "invalid number of nfts"
        );

        for (uint256 i = 0; i < nfts.length; ++i) {
            require(
                isSupportedCollection(nfts[i].collection),
                "not supported collection"
            );
            IERC721(nfts[i].collection).safeTransferFrom(
                msg.sender,
                address(this),
                nfts[i].tokenId
            );
        }

        uint256 duration = stakeDuration(
            nfts[0].collection,
            nfts[0].tokenId,
            nfts.length
        );
        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + duration;

        uint256 depositIndex = userLastDepositIndex[msg.sender] + 1;
        userSquads[msg.sender][depositIndex].startTime = startTime;
        userSquads[msg.sender][depositIndex].endTime = endTime;
        for (uint256 i = 0; i < nfts.length; ++i) {
            userSquads[msg.sender][depositIndex].nfts.push(nfts[i]);
        }
        userLastDepositIndex[msg.sender] = depositIndex;

        emit Stake(msg.sender, startTime, endTime);
    }

    function unstake(uint256 index) external whenNotPaused {
        SquadInfo memory info = userSquads[msg.sender][index];
        require(info.nfts.length > 0, "invalid index");
        require(info.endTime <= block.timestamp, "during staking period");
        require(
            info.startTime + cooldownPeriod <= block.timestamp,
            "during cooldown period"
        );

        for (uint256 i = 0; i < info.nfts.length; ++i) {
            IERC721(info.nfts[i].collection).safeTransferFrom(
                address(this),
                msg.sender,
                info.nfts[i].tokenId
            );
        }

        uint256 withdrawIndex = userLastWithdrawnIndex[msg.sender] + 1;
        userSquads[msg.sender][index] = userSquads[msg.sender][withdrawIndex];
        delete userSquads[msg.sender][withdrawIndex];
        userLastWithdrawnIndex[msg.sender] = withdrawIndex;

        emit Unstake(msg.sender);
    }

    function stakeDuration(
        address collection,
        uint256 tokenId,
        uint256 size
    ) public view returns (uint256) {
        uint256 bonusMultiplier = bonusMultipliers[size];
        require(bonusMultiplier != 0, "invalid bonus multiplier");

        uint256 stamina = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            collection,
            STAMINA,
            tokenId
        );
        return
            (stamina * 1 hours * bonusMultiplier) /
            8 /
            BONUS_MULTIPLIER_BASE_POINT;
    }
}
