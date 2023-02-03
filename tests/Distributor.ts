import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Distributor, IERC20 } from "../types";
import { MerkleTree } from 'merkletreejs';
import { keccak256 } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import { expect } from "chai";

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

const getMerkleTreeRoot = (merkleTree: MerkleTree) => merkleTree.getHexRoot();

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
    let owner: SignerWithAddress, users: SignerWithAddress[];
    let distributor: Distributor;
    let token: IERC20;

    const mockAllocationAmount = (token: string) => {
        const data = [];
        let totalAmount = BigNumber.from('0');
        for (let i = 0; i < users.length; i++) {
            const amount = ethers.utils.parseEther((Math.random() + 0.1).toFixed(18));
            data.push(
                {
                    to: users[i].address,
                    token,
                    amount
                }
            )
            totalAmount = totalAmount.add(amount);
        }

        return {
            data,
            totalAmount
        }
    }

    beforeEach(async () => {
        const signers = await ethers.getSigners();
        owner = signers[0];
        users = [];
        for (let i = 1; i < 20; i++) {
            users.push(signers[i]);
        }

        const Distributor = await ethers.getContractFactory("Distributor");
        distributor = <Distributor>await Distributor.deploy();
        await distributor.deployed();

        const TestERC20 = await ethers.getContractFactory("TestERC20");
        token = <IERC20>await TestERC20.deploy();
        await token.deployed();
    })

    it('update reporter', async () => {
        await expect(distributor.connect(users[0]).updateReporter(users[0].address)).to.revertedWith('Ownable: caller is not the owner');

        await distributor.updateReporter(users[0].address);
        expect(await distributor.reporter()).to.equal(users[0].address);
    })

    it("update merkle root", async () => {
        const mockData = mockAllocationAmount(ethers.constants.AddressZero);
        const merkleTree = await createMerkleTree(mockData.data);

        await expect(distributor.connect(users[0]).updateMerkleRoot(getMerkleTreeRoot(merkleTree))).to.revertedWith('invalid reporter');

        await distributor.updateMerkleRoot(getMerkleTreeRoot(merkleTree));
        expect(await distributor.merkleRoot()).to.equal(getMerkleTreeRoot(merkleTree));
    })

    it('eth distribute', async () => {
        const mockData = mockAllocationAmount(ethers.constants.AddressZero);
        const merkleTree = await createMerkleTree(mockData.data);
        await distributor.updateMerkleRoot(getMerkleTreeRoot(merkleTree));

        await owner.sendTransaction({
            from: owner.address,
            to: distributor.address,
            value: mockData.totalAmount
        });

        for (let i = 0; i < users.length; i++) {
            if (i > 0) {
                await expect(distributor.connect(users[i]).claim(ethers.constants.AddressZero, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i - 1]))).to.revertedWith('invalid proof');
            }

            const balanceBefore = await users[i].getBalance()

            const tx = await (await distributor.connect(users[i]).claim(ethers.constants.AddressZero, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]))).wait();
            const gasCost = tx.gasUsed.mul(tx.effectiveGasPrice);

            const balanceAfter = await users[i].getBalance()
            expect(mockData.data[i].amount.sub(
                balanceAfter.sub(balanceBefore)
            )).to.equal(gasCost);

            await expect(distributor.connect(users[i]).claim(ethers.constants.AddressZero, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]))).to.revertedWith('already claimed');
        }
    })

    it('token distribute', async () => {
        const mockData = mockAllocationAmount(token.address);
        const merkleTree = await createMerkleTree(mockData.data);
        await distributor.updateMerkleRoot(getMerkleTreeRoot(merkleTree));

        await token.transfer(distributor.address, mockData.totalAmount);

        for (let i = 0; i < users.length; i++) {
            if (i > 0) {
                await expect(distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i - 1]))).to.revertedWith('invalid proof');
            }

            const balanceBefore = await token.balanceOf(users[i].address);

            await distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]));

            const balanceAfter = await token.balanceOf(users[i].address);
            expect(
                balanceAfter.sub(balanceBefore)
            ).to.equal(mockData.data[i].amount);

            await expect(distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]))).to.revertedWith('already claimed');
        }
    })

    it('eth/token both distribute', async () => {
        const tokenDistributeData = mockAllocationAmount(token.address);
        const ethDistributeData = mockAllocationAmount(ethers.constants.AddressZero);
        const data = [...tokenDistributeData.data, ...ethDistributeData.data];
        const merkleTree = await createMerkleTree(data);
        await distributor.updateMerkleRoot(getMerkleTreeRoot(merkleTree));

        await owner.sendTransaction({
            from: owner.address,
            to: distributor.address,
            value: ethDistributeData.totalAmount
        });
        await token.transfer(distributor.address, tokenDistributeData.totalAmount);

        for (let i = 0; i < users.length; i++) {
            if (i > 0) {
                await expect(distributor.connect(users[i]).claim(token.address, tokenDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, tokenDistributeData.data[i - 1]))).to.revertedWith('invalid proof');
                await expect(distributor.connect(users[i]).claim(ethers.constants.AddressZero, ethDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, ethDistributeData.data[i - 1]))).to.revertedWith('invalid proof');
            }

            const tokenBalanceBefore = await token.balanceOf(users[i].address);
            const ethBalanceBefore = await users[i].getBalance()


            let tx = await (await distributor.connect(users[i]).claim(token.address, tokenDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, tokenDistributeData.data[i]))).wait();
            let gasCost = tx.gasUsed.mul(tx.effectiveGasPrice);
            tx = await (await distributor.connect(users[i]).claim(ethers.constants.AddressZero, ethDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, ethDistributeData.data[i]))).wait();
            gasCost = gasCost.add(tx.gasUsed.mul(tx.effectiveGasPrice));

            const tokenBalanceAfter = await token.balanceOf(users[i].address);
            const ethBalanceAfter = await users[i].getBalance()

            expect(
                tokenBalanceAfter.sub(tokenBalanceBefore)
            ).to.equal(tokenDistributeData.data[i].amount);
            expect(ethDistributeData.data[i].amount.sub(
                ethBalanceAfter.sub(ethBalanceBefore)
            )).to.equal(gasCost);

            await expect(distributor.connect(users[i]).claim(token.address, tokenDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, tokenDistributeData.data[i]))).to.revertedWith('already claimed');
            await expect(distributor.connect(users[i]).claim(ethers.constants.AddressZero, ethDistributeData.data[i].amount, getMerkleTreeProof(merkleTree, ethDistributeData.data[i]))).to.revertedWith('already claimed');
        }
    })

    it('distribute twice', async () => {
        const mockData = mockAllocationAmount(token.address);
        const merkleTree = await createMerkleTree(mockData.data);
        await distributor.updateMerkleRoot(getMerkleTreeRoot(merkleTree));

        await token.transfer(distributor.address, mockData.totalAmount);

        for (let i = 0; i < users.length; i++) {
            if (i > 0) {
                await expect(distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i - 1]))).to.revertedWith('invalid proof');
            }

            const balanceBefore = await token.balanceOf(users[i].address);

            await distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]));

            const balanceAfter = await token.balanceOf(users[i].address);
            expect(
                balanceAfter.sub(balanceBefore)
            ).to.equal(mockData.data[i].amount);

            await expect(distributor.connect(users[i]).claim(token.address, mockData.data[i].amount, getMerkleTreeProof(merkleTree, mockData.data[i]))).to.revertedWith('already claimed');
        }

        // should be sum of all allocations
        const newMockData = mockAllocationAmount(token.address);
        const data = newMockData.data.map(({ to, token, amount }, index) => ({
            to, token, amount: amount.add(mockData.data[index].amount)
        }))
        const totalAmount = newMockData.totalAmount.add(mockData.totalAmount);
        const newMerkleTree = await createMerkleTree(data);
        await distributor.updateMerkleRoot(getMerkleTreeRoot(newMerkleTree));

        await token.transfer(distributor.address, totalAmount);

        for (let i = 0; i < users.length; i++) {
            if (i > 0) {
                await expect(distributor.connect(users[i]).claim(token.address, data[i].amount, getMerkleTreeProof(newMerkleTree, data[i - 1]))).to.revertedWith('invalid proof');
            }

            const balanceBefore = await token.balanceOf(users[i].address);

            await distributor.connect(users[i]).claim(token.address, data[i].amount, getMerkleTreeProof(newMerkleTree, data[i]));

            const balanceAfter = await token.balanceOf(users[i].address);
            expect(
                balanceAfter.sub(balanceBefore)
            ).to.equal(newMockData.data[i].amount);

            await expect(distributor.connect(users[i]).claim(token.address, data[i].amount, getMerkleTreeProof(newMerkleTree, data[i]))).to.revertedWith('already claimed');
        }
    })
});
