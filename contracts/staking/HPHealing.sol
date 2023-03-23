// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import "./NFTMetadataRegistry.sol";
import "../lib/UniSafeERC20.sol";

/// @dev hp healing contract
contract HPHealing is Ownable, ERC721Holder {
    using UniSafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.AddressSet;

    event StartHealing(
        address user,
        address collection,
        uint256 tokenId,
        uint256 price,
        uint256 endTimestamp
    );
    event EndHealing(address user, address collection, uint256 tokenId);

    struct Healing {
        address owner;
        uint256 endTimestamp;
    }

    uint256 public constant BASE_POINT = 1e18;
    bytes32 public constant HP = keccak256(abi.encode("HP"));

    address public nftMetadataRegistry;
    address public healingToken;
    uint256 public healingPriceUnit;
    EnumerableSet.AddressSet private _supportedCollections;
    mapping(address => mapping(uint256 => Healing)) public healings; // collection => tokenID => Healing(user, endTimestamp)

    constructor(address _nftMetadataRegistry) Ownable() {
        nftMetadataRegistry = _nftMetadataRegistry;
    }

    function setHealingOption(
        address _token,
        uint256 _priceUnit
    ) external onlyOwner {
        healingToken = _token;
        healingPriceUnit = _priceUnit;
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

    function queryHealingPrice(
        address collection,
        uint256 tokenId
    ) public view returns (uint256) {
        require(isSupportedCollection(collection), "invalid collection");

        uint256 hp = NFTMetadataRegistry(nftMetadataRegistry).metadata(
            collection,
            HP,
            tokenId
        );
        return (healingPriceUnit * (100 * BASE_POINT - hp)) / BASE_POINT;
    }

    function heal(address collection, uint256 tokenId) external payable {
        uint256 price = queryHealingPrice(collection, tokenId);

        IERC721(collection).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId
        );
        IERC20(healingToken).uniSafeTransferFrom(msg.sender, price);

        uint256 endTimestamp = block.timestamp +
            (price * 3600) /
            healingPriceUnit /
            10; // healing time = (100 - HP) / 10
        healings[collection][tokenId] = Healing({
            owner: msg.sender,
            endTimestamp: endTimestamp
        });

        emit StartHealing(msg.sender, collection, tokenId, price, endTimestamp);
    }

    function withdraw(address collection, uint256 tokenId) external {
        Healing memory healing = healings[collection][tokenId];
        require(healing.owner == msg.sender, "unauthorized");
        require(healing.endTimestamp <= block.timestamp, "in healing");

        delete healings[collection][tokenId];

        IERC721(collection).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        emit EndHealing(msg.sender, collection, tokenId);
    }

    function withdrawFunds(uint256 amount) external onlyOwner {
        IERC20(healingToken).uniSafeTransfer(msg.sender, amount);
    }
}
