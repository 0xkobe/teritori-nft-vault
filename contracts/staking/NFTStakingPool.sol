// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTStakingPool is Ownable {
    address public immutable poolManager;
    address public collection;
    string public name;

    constructor(
        address _poolManager,
        address _collection,
        string memory _name
    ) Ownable() {
        poolManager = _poolManager;
        collection = _collection;
        name = _name;
    }

    function deposit(
        address _owner,
        address _collection,
        uint256 _tokenId
    ) external {}

    function withdraw(
        address _owner,
        uint256 _tokenId,
        address _to
    ) external {}

    function withdraw(address _owner, address _to) external {}

    function claim(address _owner) external {}
}
