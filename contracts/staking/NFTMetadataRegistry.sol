// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract NFTMetadataRegistry is OwnableUpgradeable {
    mapping(address => mapping(uint256 => uint256)) public stamina;

    function initialize() public initializer {
        __Ownable_init();
    }

    function setNftStamina(
        address collection,
        uint256[] memory tokenIdArray,
        uint256[] memory stanimaArray
    ) external onlyOwner {
        require(tokenIdArray.length == stanimaArray.length, "invalid array");
        for (uint256 i = 0; i < tokenIdArray.length; ++i) {
            stamina[collection][tokenIdArray[i]] = stanimaArray[i];
        }
    }
}
