// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTStakingPoolManager is Ownable {
    uint256 public collectionCount;
    mapping(uint256 => address) public collections;
    mapping(address => uint256) private collectionIndex; // starts from `1`

    mapping(address => address) public nftStakingPools; // collection => staking pool

    constructor() Ownable() {}

    function addCollection(address _collection, address _stakingPool)
        external
        onlyOwner
    {}

    function removeCollection(address _collection) external onlyOwner {}

    function deposit(address _collection, uint256 _tokenId) external {}

    function withdraw(address _collection, uint256 _tokenId) external {}

    function withdraw(address _collection) external {}

    function withdraw() external {}

    function claim(address _collection) external {}

    function claim() external {}
}
