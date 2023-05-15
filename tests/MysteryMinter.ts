import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MysteryMinter, MysteryNft } from "../types";

describe("MysteryMinter Test", () => {
    let user1: SignerWithAddress
    let user2: SignerWithAddress
    let user3: SignerWithAddress
    let user4: SignerWithAddress
    let mysteryBox: MysteryNft;
    let mysteryKey: MysteryNft;
    let distributor: MysteryMinter;

    beforeEach(async () => {
        [user1, user2, user3, user4] = await ethers.getSigners();

        const MysteryNft = await ethers.getContractFactory("MysteryNft");
        mysteryBox = <MysteryNft>await MysteryNft.deploy("MysteryBox", "MysteryBox");
        await mysteryBox.deployed();

        mysteryKey = <MysteryNft>await MysteryNft.deploy("MysteryKey", "MysteryKey");
        await mysteryKey.deployed();

        const MysteryMinter = await ethers.getContractFactory("MysteryMinter");
        distributor = <MysteryMinter>await MysteryMinter.deploy(mysteryBox.address, mysteryKey.address);


        await mysteryBox.setMinter(distributor.address);
        await mysteryKey.setMinter(distributor.address);
    })

    it("distribute", async () => {
        expect(await distributor.distributeForDay(0)).to.equal(false);

        await distributor.distribute(0, [
            user1.address,
            user2.address
        ], [
            user3.address,
            user4.address
        ]);

        expect(await distributor.distributeForDay(0)).to.equal(true);
        expect(await distributor.mysteryBoxAirdrops(user1.address)).to.equal(1);
        expect(await distributor.mysteryBoxAirdrops(user2.address)).to.equal(1);
        expect(await distributor.mysteryKeyAirdrops(user3.address)).to.equal(1);
        expect(await distributor.mysteryKeyAirdrops(user4.address)).to.equal(1);

        await expect(distributor.distribute(0, [
            user1.address,
            user2.address
        ], [
            user3.address,
            user4.address
        ])).to.revertedWith('already distributed for this day');
    })

    it("claim", async () => {
        await distributor.distribute(0, [
            user1.address,
            user2.address
        ], [
            user3.address,
            user4.address
        ]);

        await distributor.connect(user1).claimMysteryBox();
        expect(await mysteryBox.ownerOf(1)).to.equal(user1.address);
        await distributor.connect(user2).claimMysteryBox();
        expect(await mysteryBox.ownerOf(2)).to.equal(user2.address);
        await distributor.connect(user3).claimMysteryKey();
        expect(await mysteryKey.ownerOf(1)).to.equal(user3.address);
        await distributor.connect(user4).claimMysteryKey();
        expect(await mysteryKey.ownerOf(2)).to.equal(user4.address);

        await expect(distributor.connect(user1).claimMysteryBox()).to.reverted;
        await expect(distributor.connect(user2).claimMysteryBox()).to.reverted;
        await expect(distributor.connect(user3).claimMysteryBox()).to.reverted;
        await expect(distributor.connect(user4).claimMysteryBox()).to.reverted;
    })

    it("tokenURI", async () => {
        await distributor.distribute(0, [
            user1.address,
            user2.address
        ], [
            user3.address,
            user4.address
        ]);

        await distributor.connect(user1).claimMysteryBox();
        await distributor.connect(user2).claimMysteryBox();
        await distributor.connect(user3).claimMysteryKey();
        await distributor.connect(user4).claimMysteryKey();

        await mysteryBox.setBaseURI("ipfs://box/");
        await mysteryKey.setBaseURI("ipfs://key/");

        expect(await mysteryBox.tokenURI(1)).to.equal("ipfs://box/1");
        expect(await mysteryBox.tokenURI(2)).to.equal("ipfs://box/2");
        expect(await mysteryKey.tokenURI(1)).to.equal("ipfs://key/1");
        expect(await mysteryKey.tokenURI(2)).to.equal("ipfs://key/2");
    })
});
