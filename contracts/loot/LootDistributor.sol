// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import "./MysteryNft.sol";
import "../lib/UniSafeERC20.sol";

/// @dev Distribute Mystery Boxes / Mystery Keys
contract LootDistributor is Ownable {
    address public mysteryBox;
    address public mysteryKey;

    mapping(address => uint256) public mysteryBoxAirdrops;
    mapping(address => uint256) public mysteryKeyAirdrops;

    constructor(address _mysteryBox, address _mysteryKey) Ownable() {
        mysteryBox = _mysteryBox;
        mysteryKey = _mysteryKey;
    }

    function distribute(
        address[] memory userForMysteryBox,
        address[] memory userForMysterykey
    ) external onlyOwner {
        for (uint256 i = 0; i < userForMysteryBox.length; ++i) {
            mysteryBoxAirdrops[userForMysteryBox[i]] += 1;
        }
        for (uint256 i = 0; i < userForMysterykey.length; ++i) {
            mysteryKeyAirdrops[userForMysterykey[i]] += 1;
        }
    }

    function claimMysteryBox() external {
        mysteryBoxAirdrops[msg.sender]--;
        MysteryNft(mysteryBox).mint(msg.sender);
    }

    function claimMysteryKey() external {
        mysteryKeyAirdrops[msg.sender]--;
        MysteryNft(mysteryKey).mint(msg.sender);
    }
}
