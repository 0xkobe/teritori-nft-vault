// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "./NFTMetadataRegistry.sol";

/// @dev squad staking v2, hp/xp mechanism
contract SquadStakingV4 is Ownable, Pausable, ERC721Holder {
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableSet for EnumerableSet.UintSet;

    event Stake(
        address indexed user,
        uint256 indexed index,
        uint256 startTime,
        uint256 endTime,
        uint256 luck
    );
    event Unstake(address indexed user, uint256 indexed index);

    struct NftInfo {
        address collection;
        uint256 tokenId;
    }
    struct SquadInfo {
        address owner;
        uint256 startTime;
        uint256 endTime;
        uint256 luck;
        bool withdrawn;
        NftInfo[] nfts;
    }
    struct SquadInfoWithIndex {
        uint256 index;
        address owner;
        uint256 startTime;
        uint256 endTime;
        NftInfo[] nfts;
    }

    uint256 public constant BASE_POINT = 1e18;
    bytes32 public constant STAMINA = keccak256(abi.encode("Stamina"));
    bytes32 public constant LUCK = keccak256(abi.encode("Luck"));
    bytes32 public constant PROTECTION = keccak256(abi.encode("Protection"));
    bytes32 public constant HP = keccak256(abi.encode("HP"));
    bytes32 public constant XP = keccak256(abi.encode("XP"));

    address public nftMetadataRegistry;
    uint256 public minSquadSize;
    uint256 public maxSquadSize;
    uint256 public maxSquadCount;
    uint256 public cooldownPeriod;
    mapping(uint256 => uint256) public bonusMultipliers;
    EnumerableSet.AddressSet private _supportedCollections;

    uint256 public totalSquads;
    mapping(uint256 => SquadInfo) public squads;
    mapping(address => EnumerableSet.UintSet) private userSquads;

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

    struct Config {
        address owner;
        uint256 minSquadSize;
        uint256 maxSquadSize;
        uint256 maxSquadCount;
        uint256 cooldownPeriod;
        uint256[] bonusMultipliers;
    }

    function getConfig() external view returns (Config memory config) {
        config.owner = owner();
        config.minSquadSize = minSquadSize;
        config.maxSquadSize = maxSquadSize;
        config.maxSquadCount = maxSquadCount;
        config.cooldownPeriod = cooldownPeriod;
        config.bonusMultipliers = new uint256[](maxSquadCount + 1);
        for (uint256 i = 0; i <= maxSquadCount; ++i) {
            config.bonusMultipliers[i] = bonusMultipliers[i];
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
    ) external view returns (SquadInfoWithIndex[] memory result) {
        uint256 length = userSquads[user].length();
        result = new SquadInfoWithIndex[](length);
        for (uint256 i = 0; i < length; ++i) {
            uint256 index = userSquads[user].at(i);
            result[i].index = index;
            result[i].owner = squads[index].owner;
            result[i].startTime = squads[index].startTime;
            result[i].endTime = squads[index].endTime;
            result[i].nfts = squads[index].nfts;
        }
    }

    function userSquadCount(address user) external view returns (uint256) {
        return userSquads[user].length();
    }

    function stake(NftInfo[] memory nfts) external whenNotPaused {
        require(
            nfts.length >= minSquadSize && nfts.length <= maxSquadSize,
            "invalid number of nfts"
        );

        uint256 luck;
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
            luck += NFTMetadataRegistry(nftMetadataRegistry).metadata(
                nfts[i].collection,
                LUCK,
                nfts[i].tokenId
            );
        }

        uint256 hp = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            nfts[0].collection,
            HP,
            nfts[0].tokenId
        );
        require(hp >= 50 * BASE_POINT, "Bad HP");

        uint256 duration = stakeDuration(
            nfts[0].collection,
            nfts[0].tokenId,
            nfts.length
        );
        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + duration;

        // store squad
        totalSquads++;
        squads[totalSquads].owner = msg.sender;
        squads[totalSquads].startTime = startTime;
        squads[totalSquads].endTime = endTime;
        squads[totalSquads].luck = luck;
        for (uint256 i = 0; i < nfts.length; ++i) {
            squads[totalSquads].nfts.push(nfts[i]);
        }

        // store user squad
        userSquads[msg.sender].add(totalSquads);

        emit Stake(msg.sender, totalSquads, startTime, endTime, luck);
    }

    function unstake(uint256 index) external whenNotPaused {
        require(userSquads[msg.sender].contains(index), "invalid index");

        SquadInfo memory info = squads[index];
        require(info.endTime <= block.timestamp, "during staking period");
        require(
            info.startTime + cooldownPeriod <= block.timestamp,
            "during cooldown period"
        );

        uint256 protection;
        for (uint256 i = 0; i < info.nfts.length; ++i) {
            IERC721(info.nfts[i].collection).safeTransferFrom(
                address(this),
                msg.sender,
                info.nfts[i].tokenId
            );
            protection += NFTMetadataRegistry(nftMetadataRegistry).metadata(
                info.nfts[i].collection,
                PROTECTION,
                info.nfts[i].tokenId
            );
        }
        uint256 duration = info.endTime - info.startTime;

        // remove user squad
        uint256[] memory userSquadIndexes = userSquads[msg.sender].values();
        for (uint256 i = 0; i < userSquadIndexes.length; ++i) {
            if (userSquadIndexes[i] == index) {
                userSquads[msg.sender].remove(i);
                break;
            }
        }

        // remove squad
        squads[index].withdrawn = true;

        uint256 hp = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            info.nfts[0].collection,
            HP,
            info.nfts[0].tokenId
        );
        uint256 xp = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            info.nfts[0].collection,
            XP,
            info.nfts[0].tokenId
        );
        xp += (hp * duration) / 3600; // xp = xp + (hp / 100) * (staking time * 100)
        hp = hp - hp / 5 + (protection * BASE_POINT * 6) / 100; // hp = hp - hp / 5 + protection * 0.06

        NFTMetadataRegistry(nftMetadataRegistry).registerNftMegadata(
            info.nfts[0].collection,
            HP,
            info.nfts[0].tokenId,
            hp
        );
        NFTMetadataRegistry(nftMetadataRegistry).registerNftMegadata(
            info.nfts[0].collection,
            XP,
            info.nfts[0].tokenId,
            xp
        );

        emit Unstake(msg.sender, index);
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
        return (stamina * 1 hours * bonusMultiplier) / 8 / BASE_POINT;
    }
}
