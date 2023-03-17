// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract NFTMetadataRegistry is OwnableUpgradeable {
    mapping(address => mapping(bytes32 => mapping(uint256 => uint256)))
        public metadata;
    mapping(address => bool) public isAdmin;

    function initialize() public initializer {
        __Ownable_init();
    }

    function setAdmin(
        address[] memory _admins,
        bool _isAdmin
    ) external onlyOwner {
        for (uint256 i = 0; i < _admins.length; ++i) {
            isAdmin[_admins[i]] = _isAdmin;
        }
    }

    function registerNftMegadata(
        address collection,
        bytes32 metadata_key,
        uint256[] memory tokenIdArray,
        uint256[] memory stanimaArray
    ) external {
        require(msg.sender == owner() || isAdmin[msg.sender], "unauthorized");
        require(tokenIdArray.length == stanimaArray.length, "invalid array");
        for (uint256 i = 0; i < tokenIdArray.length; ++i) {
            metadata[collection][metadata_key][tokenIdArray[i]] = stanimaArray[
                i
            ];
        }
    }

    function queryMetadataKey(string memory key) public pure returns (bytes32) {
        return keccak256(abi.encode(key));
    }

    function queryNftMetadata(
        address collection,
        string memory key,
        uint256 tokenId
    ) external view returns (uint256) {
        return metadata[collection][queryMetadataKey(key)][tokenId];
    }
}
