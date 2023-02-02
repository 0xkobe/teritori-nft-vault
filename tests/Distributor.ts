import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Distributor } from "../types";
import { MerkleTree } from 'merkletreejs';
import { keccak256 } from "ethers/lib/utils";
import { BigNumber } from "ethers";

type MerkleData = {
    to: string,
    token: string,
    amount: BigNumber,
}

const createMerkleTree = async (dataArray: MerkleData[]) => {
    // here I assume the data has `to`, `token`, `amount` fields

    const leaves = dataArray.map((data) =>
        ethers.utils.keccak256(
            ethers.utils.defaultAbiCoder.encode(
                ['address', 'address', 'uint256'],
                [data.to, data.token, data.amount]
            )
        )
    );

    return new MerkleTree(leaves, keccak256, {
        sortPairs: true
    });
};

const getMerkleTreeRoot = (merkleTree: MerkleTree) => merkleTree.getRoot();

const getMerkleTreeProof = (merkleTree: MerkleTree, data: MerkleData) => {
    // here I assume the data has `to`, `token`, `amount` fields
    const leaf = ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(
            ['address', 'address', 'uint256'],
            [data.to, data.token, data.amount]
        )
    );

    return merkleTree.getHexProof(leaf);
};

describe("Distributor Test", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let distributor: Distributor;

    beforeEach(async () => {
        [minter, user, royaltyReceiver] = await ethers.getSigners();

        const Distributor = await ethers.getContractFactory("Distributor");
        distributor = <Distributor>await Distributor.deploy();
        await distributor.deployed();
    })
});
