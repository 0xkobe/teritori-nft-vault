import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BonusPerkMinter, BonusPerkNft, MysteryNft } from "../types";

describe("BonusPerkMinter", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let mysteryBox: MysteryNft;
    let mysteryKey: MysteryNft;
    let bonusPerk: BonusPerkNft;
    let bonusPerkMinter: BonusPerkMinter;

    beforeEach(async () => {
        [minter, user, royaltyReceiver] = await ethers.getSigners();

        const MysteryNft = await ethers.getContractFactory("MysteryNft");
        mysteryBox = <MysteryNft>await MysteryNft.deploy("MysteryBox", "MysteryBox");
        await mysteryBox.deployed();

        mysteryKey = <MysteryNft>await MysteryNft.deploy("MysteryKey", "MysteryKey");
        await mysteryKey.deployed();

        const BonusPerkNft = await ethers.getContractFactory("BonusPerkNft");
        bonusPerk = <BonusPerkNft>await BonusPerkNft.deploy("BonusPerk", "BonusPerk");
        await bonusPerk.deployed();

        const BonusPerkMinter = await ethers.getContractFactory("BonusPerkMinter");
        bonusPerkMinter = <BonusPerkMinter>await BonusPerkMinter.deploy(
            mysteryBox.address,
            mysteryKey.address,
            bonusPerk.address,
            {
                startTime: 0,
                priceAmount: ethers.utils.parseEther("0.1"),
                currency: ethers.constants.AddressZero,
            }
        );
        await bonusPerkMinter.deployed();

        await mysteryBox.setMinter(minter.address);
        await mysteryKey.setMinter(minter.address);
        await bonusPerk.setMinter(bonusPerkMinter.address);

        for (let i = 0; i < 10; i++) {
            await mysteryBox.mint(user.address);
            await mysteryKey.mint(user.address);
        }
    })

    it("pause/unpause", async () => {
        expect(await bonusPerkMinter.paused()).to.equal(false);

        await expect(bonusPerkMinter.unpause()).to.revertedWith("Pausable: not paused");
        await expect(bonusPerkMinter.connect(user).pause()).to.revertedWith("Ownable: caller is not the owner");
        await bonusPerkMinter.pause();

        expect(await bonusPerkMinter.paused()).to.equal(true);

        await expect(bonusPerkMinter.pause()).to.revertedWith("Pausable: paused");
        await expect(bonusPerkMinter.connect(user).unpause()).to.revertedWith("Ownable: caller is not the owner");
        await bonusPerkMinter.unpause();

        expect(await bonusPerkMinter.paused()).to.equal(false);
    })

    it("setMinter", async () => {
        expect(await bonusPerkMinter.minter()).to.equal(minter.address);

        await expect(bonusPerkMinter.connect(user).setMinter(user.address)).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkMinter.setMinter(user.address);

        expect(await bonusPerkMinter.minter()).to.equal(user.address);
    })

    it("setBreedConfig", async () => {
        const config = {
            startTime: 0,
            priceAmount: ethers.utils.parseEther("0.1"),
            currency: ethers.constants.AddressZero,
        };

        await expect(bonusPerkMinter.connect(user).setBreedConfig(config)).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkMinter.setBreedConfig(config);
    })

    it("startBreed", async () => {
        await expect(bonusPerkMinter.connect(user).startBreed()).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkMinter.startBreed();

        expect((await bonusPerkMinter.breedConfig()).startTime).to.equal((await ethers.provider.getBlock("latest")).timestamp);
    })

    it("mint", async () => {
        await bonusPerkMinter.startBreed();
        await mysteryBox.connect(user).approve(bonusPerkMinter.address, "1");
        await mysteryKey.connect(user).approve(bonusPerkMinter.address, "2");
        await bonusPerkMinter.connect(user).breed("1", "2", {
            value: ethers.utils.parseEther("0.1")
        });

        await expect(bonusPerkMinter.connect(user).mint(["1"])).to.revertedWith("UNAUTHORIZED");

        await bonusPerkMinter.mint(["1"]);

        expect(await bonusPerk.ownerOf("1")).to.equal(user.address);
    })
});
