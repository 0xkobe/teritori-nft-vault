// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import "../lib/UniSafeERC20.sol";

contract DailyDistributor is Ownable {
    using UniSafeERC20 for IERC20;

    event UpdateReporter(address indexed reporter);
    event DailyReward(uint256 day, bytes32 indexed merkleRoot);
    event Claim(
        uint256 day,
        address indexed user,
        address indexed token,
        uint256 amount
    );

    address public reporter;
    mapping(uint256 => bool) public isDayReported;
    mapping(uint256 => bytes32) public merkleRoots; // day => merkle root
    mapping(uint256 => mapping(address => mapping(address => uint256)))
        public userClaimedAmount; // day => user -> token -> claimed

    constructor() {
        reporter = msg.sender;
    }

    function updateReporter(address _reporter) external onlyOwner {
        reporter = _reporter;

        emit UpdateReporter(_reporter);
    }

    function distributeDailyReward(uint256 _day, bytes32 _merkleRoot) external {
        require(msg.sender == reporter, "invalid reporter");
        require(!isDayReported[_day], "already reported");

        isDayReported[_day] = true;
        merkleRoots[_day] = _merkleRoot;

        emit DailyReward(_day, _merkleRoot);
    }

    function claim(
        uint256 day,
        address token,
        uint256 allocation,
        bytes32[] calldata proofs
    ) public {
        require(isDayReported[day], "no distribution yet");

        bytes32 leaf = keccak256(abi.encode(msg.sender, token, allocation));

        require(
            MerkleProof.verify(proofs, merkleRoots[day], leaf),
            "invalid proof"
        );

        uint256 available = allocation -
            userClaimedAmount[day][msg.sender][token];
        require(available > 0, "already claimed");

        userClaimedAmount[day][msg.sender][token] = allocation;
        IERC20(token).uniSafeTransfer(msg.sender, available);

        emit Claim(day, msg.sender, token, allocation);
    }

    function batchClaim(
        uint256[] memory dayArray,
        address[] memory tokenArray,
        uint256[] memory allocationArray,
        bytes32[][] calldata proofsArray
    ) external {
        require(
            dayArray.length == tokenArray.length &&
                dayArray.length == allocationArray.length &&
                dayArray.length == proofsArray.length,
            "invalid array length"
        );

        for (uint256 i = 0; i < dayArray.length; ++i) {
            claim(
                dayArray[i],
                tokenArray[i],
                allocationArray[i],
                proofsArray[i]
            );
        }
    }

    function rescueFunds(address token, uint256 amount) external onlyOwner {
        IERC20(token).uniSafeTransfer(msg.sender, amount);
    }

    receive() external payable {}
}
