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
    mapping(uint256 => bool) public distributeForDay;

    constructor(address _mysteryBox, address _mysteryKey) Ownable() {
        mysteryBox = _mysteryBox;
        mysteryKey = _mysteryKey;
    }

    function distribute(
        uint256 day,
        address[] memory usersForMysteryBox,
        address[] memory usersForMysteryKey
    ) external onlyOwner {
        require(!distributeForDay[day], "already distributed for this day");
        distributeForDay[day] = true;
        for (uint256 i = 0; i < usersForMysteryBox.length; ++i) {
            mysteryBoxAirdrops[usersForMysteryBox[i]] += 1;
        }
        for (uint256 i = 0; i < usersForMysteryKey.length; ++i) {
            mysteryKeyAirdrops[usersForMysteryKey[i]] += 1;
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
