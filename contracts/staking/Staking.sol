// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "../launchpad/TeritoriNft.sol";

contract Staking is Ownable, Pausable {
    using EnumerableSet for EnumerableSet.AddressSet;

    event Stake(
        address user,
        address collection,
        uint256 tokenId,
        uint256 startTime,
        uint256 endTime
    );
    event Unstake(address user, address collection, uint256 tokenId);

    struct StakeInfo {
        address owner;
        uint256 startTime;
        uint256 endTime;
        bool withdrawn;
    }

    uint256 public cooldownInDays;
    EnumerableSet.AddressSet internal _supportedCollections;

    uint256 public stakeListLength;
    mapping(uint256 => StakeInfo) public stakeList; // starts from index 1
    mapping(address => mapping(uint256 => uint256)) public nftStakeIndex;
    mapping(address => uint256[]) public userStakeList;

    constructor(uint256 _cooldownInDays) Ownable() Pausable() {
        cooldownInDays = _cooldownInDays;
    }

    function pause() external onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() external onlyOwner whenPaused {
        _unpause();
    }

    function setCooldownInDays(uint256 _cooldownInDays) external onlyOwner {
        cooldownInDays = _cooldownInDays;
    }

    function setSupportedCollection(address collection, bool supported)
        external
        onlyOwner
    {
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

    function supportedCollectionAt(uint256 index)
        external
        view
        returns (address)
    {
        return _supportedCollections.at(index);
    }

    function supportedCollections(uint256 index)
        external
        view
        returns (address[] memory collections)
    {
        uint256 length = _supportedCollections.length();
        collections = new address[](length);
        for (uint256 i = 0; i < length; i++) {
            collections[i] = _supportedCollections.at(index);
        }
    }

    function nftStakeInfo(address collection, uint256 tokenId)
        external
        view
        returns (StakeInfo memory)
    {
        return stakeList[nftStakeIndex[collection][tokenId]];
    }

    function getUserStakeList(address user)
        external
        view
        returns (uint256[] memory)
    {
        return userStakeList[user];
    }

    function stake(address collection, uint256 tokenId) external whenNotPaused {
        require(isSupportedCollection(collection), "not supported collection");
        uint256 lastStakeDay = 0;
        if (userStakeList[msg.sender].length > 0) {
            uint256 index = userStakeList[msg.sender][
                userStakeList[msg.sender].length - 1
            ];
            lastStakeDay = stakeList[index].startTime / 1 days;
        }
        require(
            lastStakeDay + cooldownInDays <= block.timestamp / 1 days,
            "wait until cooldown"
        );

        IERC721(collection).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        uint256 duration = stakeDuration(collection, tokenId);
        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + duration;
        stakeListLength++;
        stakeList[stakeListLength] = StakeInfo({
            owner: msg.sender,
            startTime: startTime,
            endTime: endTime,
            withdrawn: false
        });
        nftStakeIndex[collection][tokenId] = stakeListLength;
        userStakeList[msg.sender].push(stakeListLength);

        emit Stake(msg.sender, collection, tokenId, startTime, endTime);
    }

    function unstake(address collection, uint256 tokenId)
        external
        whenNotPaused
    {
        require(isSupportedCollection(collection), "not supported collection");

        uint256 index = nftStakeIndex[collection][tokenId];
        require(stakeList[index].owner == msg.sender, "unauthorized");
        require(stakeList[index].withdrawn, "already withdrawn");
        require(
            stakeList[index].endTime >= block.timestamp,
            "wait until stake end"
        );

        stakeList[index].withdrawn = true;
        delete nftStakeIndex[collection][tokenId];

        IERC721(collection).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        emit Unstake(msg.sender, collection, tokenId);
    }

    function stakeDuration(address collection, uint256 tokenId)
        public
        view
        returns (uint256)
    {
        uint256 stamina = 0;

        TeritoriNft.Metadata memory metadata = TeritoriNft(collection).nftInfo(
            tokenId
        );
        for (uint256 i = 0; i < metadata.attributes.length; i++) {
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

        return (stamina * 1 hours) / 8;
    }

    function stringToUint(string memory s)
        public
        pure
        returns (uint256 result, bool hasError)
    {
        bytes memory b = bytes(s);
        for (uint256 i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            } else {
                hasError = true;
                break;
            }
        }
    }
}
