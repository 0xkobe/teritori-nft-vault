// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract NFTMetadataRegistry is OwnableUpgradeable {
    mapping(bytes32 => mapping(address => mapping(uint256 => uint256)))
        public metadata;

    function initialize() public initializer {
        __Ownable_init();
    }

    function setNftMetadata(
        bytes32 metadata_key,
        address collection,
        uint256[] memory tokenIdArray,
        uint256[] memory stanimaArray
    ) external onlyOwner {
        require(tokenIdArray.length == stanimaArray.length, "invalid array");
        for (uint256 i = 0; i < tokenIdArray.length; ++i) {
            metadata[metadata_key][collection][tokenIdArray[i]] = stanimaArray[
                i
            ];
        }
    }
}
