// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import "../lib/UniSafeERC20.sol";

contract Distributor is Ownable {
    using UniSafeERC20 for IERC20;

    event UpdateReporter(address indexed reporter);
    event UpdateMerkleRoot(bytes32 indexed merkleRoot);
    event Claim(address indexed user, address indexed token, uint256 amount);

    address public reporter;
    bytes32 public merkleRoot;
    mapping(address => mapping(address => uint256)) public userClaimedAmount; // user -> token -> claimed

    constructor() {
        reporter = msg.sender;
    }

    function updateReporter(address _reporter) external onlyOwner {
        reporter = _reporter;

        emit UpdateReporter(_reporter);
    }

    function updateMerkleRoot(bytes32 _merkleRoot) external {
        require(msg.sender == reporter, "invalid reporter");

        merkleRoot = _merkleRoot;

        emit UpdateMerkleRoot(_merkleRoot);
    }

    function claim(
        address token,
        uint256 allocation,
        bytes32[] calldata proofs
    ) external {
        bytes32 leaf = keccak256(abi.encode(msg.sender, token, allocation));

        require(MerkleProof.verify(proofs, merkleRoot, leaf), "invalid proof");

        uint256 available = allocation - userClaimedAmount[msg.sender][token];
        require(available > 0, "already claimed");

        userClaimedAmount[msg.sender][token] = allocation;
        IERC20(token).uniSafeTransfer(msg.sender, available);

        emit Claim(msg.sender, token, allocation);
    }

    function rescueFunds(address token, uint256 amount) external onlyOwner {
        IERC20(token).uniSafeTransfer(msg.sender, amount);
    }

    receive() external payable {}
}
