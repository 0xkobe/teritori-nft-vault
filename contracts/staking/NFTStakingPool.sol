// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NFTStakingPool is Ownable {
    using EnumerableSet for EnumerableSet.UintSet;

    address public immutable poolManager;
    address public collection;
    string public name;

    // user nfts info
    mapping(address => EnumerableSet.UintSet) private userNftSet;
    uint256 public totalSupply;

    // reward pool info
    struct RewardPool {
        address rewardToken;
        uint256 rewardPerSec;
        uint256 accRewardPerShare; // Accumulated Rewards per share, times 1e36. See below.
    }
    uint256 public rewardPoolCount;
    mapping(uint256 => RewardPool) public rewardPools;
    mapping(uint256 => mapping(address => uint256)) private userRewardDebt;
    mapping(uint256 => mapping(address => uint256)) private userPendingRewards;
    uint256 public lastRewardTimestamp;

    constructor(
        address _poolManager,
        address _collection,
        string memory _name
    ) Ownable() {
        poolManager = _poolManager;
        collection = _collection;
        name = _name;
    }

    function balanceOf(address _user) public view returns (uint256) {
        return userNftSet[_user].length();
    }

    function addRewardToken(address _rewardToken, uint256 _rewardPerSec)
        external
        onlyOwner
    {
        rewardPools[rewardPoolCount].rewardToken = _rewardToken;
        rewardPools[rewardPoolCount].rewardPerSec = _rewardPerSec;
        rewardPoolCount++;
    }

    function setRewardPerSec(uint256 _index, uint256 _rewardPerSec)
        external
        onlyOwner
    {
        require(_index < rewardPoolCount, "invalid index");

        rewardPools[_index].rewardPerSec = _rewardPerSec;
    }

    function deposit(address _owner, uint256 _tokenId) external {}

    function withdraw(
        address _owner,
        uint256 _tokenId,
        address _to
    ) external {}

    function withdraw(address _owner, address _to) external {}

    function claim(address _owner) external {}
}
