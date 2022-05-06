// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract NFTStakingPool is Ownable {
    using SafeERC20 for IERC20;
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
        _updatePool();

        rewardPools[rewardPoolCount].rewardToken = _rewardToken;
        rewardPools[rewardPoolCount].rewardPerSec = _rewardPerSec;
        rewardPoolCount++;
    }

    function setRewardPerSec(uint256 _index, uint256 _rewardPerSec)
        external
        onlyOwner
    {
        require(_index < rewardPoolCount, "invalid index");

        _updatePool();

        rewardPools[_index].rewardPerSec = _rewardPerSec;
    }

    function deposit(address _owner, uint256 _tokenId) external {
        _updatePool();
        _withdrawReward(_owner);

        IERC721(collection).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId
        );

        totalSupply += 1;
        userNftSet[_owner].add(_tokenId);

        _updateUserRewardDebt(_owner);
    }

    function withdraw(
        address _owner,
        uint256 _tokenId,
        address _to
    ) external {
        require(
            msg.sender == _owner || msg.sender == poolManager,
            "Unauthorized"
        );

        _updatePool();
        _withdrawReward(_owner);

        IERC721(collection).safeTransferFrom(address(this), _to, _tokenId);

        totalSupply -= 1;
        userNftSet[_owner].remove(_tokenId);

        _updateUserRewardDebt(_owner);
    }

    function withdrawAll(address _owner, address _to) external {
        require(
            msg.sender == _owner || msg.sender == poolManager,
            "Unauthorized"
        );

        _updatePool();
        _withdrawReward(_owner);

        EnumerableSet.UintSet storage nftSet = userNftSet[_owner];
        uint256 length = nftSet.length();
        for (uint256 i = 0; i < length; i++) {
            uint256 tokenId = nftSet.at(i);

            IERC721(collection).safeTransferFrom(address(this), _to, tokenId);
            userNftSet[_owner].remove(tokenId);
        }
        totalSupply -= length;

        _updateUserRewardDebt(_owner);
    }

    function _updatePool() internal {
        uint256 _rewardPoolsCount = rewardPoolCount;
        for (uint256 i = 0; i < _rewardPoolsCount; ++i) {
            RewardPool storage pool = rewardPools[i];

            if (totalSupply == 0) {
                pool.accRewardPerShare = block.timestamp;
            } else {
                uint256 newRewards = (block.timestamp - lastRewardTimestamp) *
                    pool.rewardPerSec;
                pool.accRewardPerShare += (newRewards * (1e36)) / totalSupply;
            }
        }

        lastRewardTimestamp = block.number;
    }

    function _withdrawReward(address _user) internal {
        uint256 _rewardPoolsCount = rewardPoolCount;
        for (uint256 i = 0; i < _rewardPoolsCount; ++i) {
            uint256 pending = ((balanceOf(_user) *
                rewardPools[i].accRewardPerShare) / 1e36) -
                userRewardDebt[i][_user];

            if (pending > 0) {
                userPendingRewards[i][_user] += pending;
            }
        }
    }

    function _updateUserRewardDebt(address _user) internal {
        uint256 _rewardPoolsCount = rewardPoolCount;
        for (uint256 i = 0; i < _rewardPoolsCount; ++i) {
            userRewardDebt[i][_user] =
                (balanceOf(_user) * rewardPools[i].accRewardPerShare) /
                1e36;
        }
    }
}
