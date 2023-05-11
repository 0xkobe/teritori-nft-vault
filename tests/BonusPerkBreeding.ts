import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BonusPerkBreeding, BonusPerkNft, MysteryNft, NFTMetadataRegistry, TeritoriMinter, TeritoriNft } from "../types";

describe("BonusPerkBreeding", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, nft: TeritoriNft;
    let registry: NFTMetadataRegistry;
    let bonusPerk: BonusPerkNft;
    let bonusPerkBreeding: BonusPerkBreeding;
    let staminaKey: string, protectionKey: string, hpKey: string, xpKey: string;

    beforeEach(async () => {
        [minter, user, royaltyReceiver] = await ethers.getSigners();

        const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
        teritoriNftImpl = <TeritoriNft>await TeritoriNft.deploy();
        await teritoriNftImpl.deployed();

        const TeritoriMinter = await ethers.getContractFactory("TeritoriMinter");
        teritoriMinter = <TeritoriMinter>await TeritoriMinter.deploy(
            "Parent Collection", "Parent", "parent-contract-uri", teritoriNftImpl.address, minter.address, ethers.utils.parseEther("0.005"), true, ""
        );
        await teritoriMinter.deployed();

        nft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await teritoriMinter.nft());

        // mint 2 nfts with royalty info
        const config = {
            maxSupply: 100,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 0,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 100,
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.connect(user).requestMint(user.address, 10, {
            value: ethers.utils.parseEther("1")
        });

        await teritoriMinter.mint([
            {
                tokenId: "1",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "2",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "3",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "4",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "5",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "6",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
            {
                tokenId: "7",
                royaltyReceiver: royaltyReceiver.address,
                royaltyPercentage: "1000",
                tokenUri: "",
            },
        ]);

        const NFTMetadataRegistry = await ethers.getContractFactory("NFTMetadataRegistry");
        registry = await NFTMetadataRegistry.deploy()
        await registry.deployed();
        await registry.initialize();

        staminaKey = await registry.queryMetadataKey("Stamina");
        protectionKey = await registry.queryMetadataKey("Protection");
        hpKey = await registry.queryMetadataKey("HP");
        xpKey = await registry.queryMetadataKey("XP");

        const BonusPerkNft = await ethers.getContractFactory("BonusPerkNft");
        bonusPerk = <BonusPerkNft>await BonusPerkNft.deploy("BonusPerk", "BonusPerk");
        await bonusPerk.deployed();

        const BonusPerkBreeding = await ethers.getContractFactory("BonusPerkBreeding");
        bonusPerkBreeding = <BonusPerkBreeding>await BonusPerkBreeding.deploy(
            nft.address,
            bonusPerk.address,
            registry.address,
            {
                startTime: 0,
                priceAmount: ethers.utils.parseEther("0.1"),
                currency: ethers.constants.AddressZero,
            }
        );
        await bonusPerkBreeding.deployed();

        await bonusPerk.setMinter(minter.address);

        for (let i = 0; i < 10; i++) {
            await bonusPerk.mint(user.address, i)
        }

        // set admin role for bonus perk breeding and staking contracts
        await registry.setAdmin([bonusPerkBreeding.address, minter.address], true);
    })

    it("pause/unpause", async () => {
        expect(await bonusPerkBreeding.paused()).to.equal(false);

        await expect(bonusPerkBreeding.unpause()).to.revertedWith("Pausable: not paused");
        await expect(bonusPerkBreeding.connect(user).pause()).to.revertedWith("Ownable: caller is not the owner");
        await bonusPerkBreeding.pause();

        expect(await bonusPerkBreeding.paused()).to.equal(true);

        await expect(bonusPerkBreeding.pause()).to.revertedWith("Pausable: paused");
        await expect(bonusPerkBreeding.connect(user).unpause()).to.revertedWith("Ownable: caller is not the owner");
        await bonusPerkBreeding.unpause();

        expect(await bonusPerkBreeding.paused()).to.equal(false);
    })

    it("setMinter", async () => {
        expect(await bonusPerkBreeding.minter()).to.equal(minter.address);

        await expect(bonusPerkBreeding.connect(user).setMinter(user.address)).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkBreeding.setMinter(user.address);

        expect(await bonusPerkBreeding.minter()).to.equal(user.address);
    })

    it("setBreedConfig", async () => {
        const config = {
            startTime: 0,
            priceAmount: ethers.utils.parseEther("0.1"),
            currency: ethers.constants.AddressZero,
        };

        await expect(bonusPerkBreeding.connect(user).setBreedConfig(config)).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkBreeding.setBreedConfig(config);
    })

    it("startBreed", async () => {
        await expect(bonusPerkBreeding.connect(user).startBreed()).to.revertedWith("Ownable: caller is not the owner")
        await bonusPerkBreeding.startBreed();

        expect((await bonusPerkBreeding.breedConfig()).startTime).to.equal((await ethers.provider.getBlock("latest")).timestamp);
    })

    it("breed", async () => {
        await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
            nft.address,
            protectionKey,
            ["1"],
            [10],
        );

        await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
            bonusPerk.address,
            protectionKey,
            ["1"],
            [1],
        );

        expect(await registry.metadata(nft.address, protectionKey, "1")).to.equal("10")

        await bonusPerkBreeding.startBreed();
        await nft.connect(user).approve(bonusPerkBreeding.address, "1");
        await bonusPerk.connect(user).approve(bonusPerkBreeding.address, "1");
        await bonusPerkBreeding.connect(user).breed("1", "1", {
            value: ethers.utils.parseEther("0.1")
        });

        expect(await registry.metadata(nft.address, protectionKey, "1")).to.equal("11")
    })
});
