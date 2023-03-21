// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "../launchpad/TeritoriNft.sol";

/// @dev use on-chain metadata
contract SquadStaking is Ownable, Pausable, ERC721Holder {
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

    uint256 public constant BONUS_MULTIPLIER_BASE_POINT = 1e18;

    uint256 public minSquadSize;
    uint256 public maxSquadSize;
    uint256 public cooldownPeriod;
    mapping(uint256 => uint256) public bonusMultipliers;
    EnumerableSet.AddressSet internal _supportedCollections;
    mapping(address => SquadInfo) public _userSquadInfo;

    constructor(
        uint256 _minSquadSize,
        uint256 _maxSquadSize,
        uint256 _cooldownPeriod,
        uint256[] memory _bonusMultipliers
    ) Ownable() Pausable() {
        minSquadSize = _minSquadSize;
        maxSquadSize = _maxSquadSize;
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
    ) external view returns (SquadInfo memory) {
        return _userSquadInfo[user];
    }

    function stake(NftInfo[] memory nfts) external whenNotPaused {
        require(_userSquadInfo[msg.sender].nfts.length == 0, "squad exists");
        require(
            _userSquadInfo[msg.sender].startTime + cooldownPeriod <=
                block.timestamp,
            "wait until cooldown"
        );
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
        _userSquadInfo[msg.sender].startTime = startTime;
        _userSquadInfo[msg.sender].endTime = endTime;
        for (uint256 i = 0; i < nfts.length; ++i) {
            _userSquadInfo[msg.sender].nfts.push(nfts[i]);
        }

        emit Stake(msg.sender, startTime, endTime);
    }

    function unstake() external whenNotPaused {
        require(
            _userSquadInfo[msg.sender].nfts.length != 0,
            "squad not exists"
        );
        require(
            _userSquadInfo[msg.sender].endTime <= block.timestamp,
            "wait until staking period"
        );

        SquadInfo memory info = _userSquadInfo[msg.sender];

        delete _userSquadInfo[msg.sender].nfts;
        for (uint256 i = 0; i < info.nfts.length; ++i) {
            IERC721(info.nfts[i].collection).safeTransferFrom(
                address(this),
                msg.sender,
                info.nfts[i].tokenId
            );
        }

        emit Unstake(msg.sender);
    }

    function stakeDuration(
        address collection,
        uint256 tokenId,
        uint256 size
    ) public view returns (uint256) {
        uint256 bonusMultiplier = bonusMultipliers[size];
        require(bonusMultiplier != 0, "invalid bonus multiplier");

        uint256 stamina = 0;

        TeritoriNft.Metadata memory metadata = TeritoriNft(collection).nftInfo(
            tokenId
        );
        for (uint256 i = 0; i < metadata.attributes.length; ++i) {
            TeritoriNft.Attribute memory attribute = metadata.attributes[i];
            if (
                keccak256(abi.encodePacked(attribute.trait_type)) ==
                keccak256(abi.encodePacked("Stamina"))
            ) {
                (uint256 value, bool hasError) = stringToUint(attribute.value);
                if (!hasError) {
                    stamina = value;
                }
            }
        }

        return
            (stamina * 1 hours * bonusMultiplier) /
            8 /
            BONUS_MULTIPLIER_BASE_POINT;
    }

    function stringToUint(
        string memory s
    ) private pure returns (uint256 result, bool hasError) {
        bytes memory b = bytes(s);
        for (uint256 i = 0; i < b.length; ++i) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            } else {
                hasError = true;
                break;
            }
        }
    }
}
