import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { HPHealing, NFTMetadataRegistry, SquadStakingV4, TeritoriMinter, TeritoriNft } from "../types";

describe("HPHealing Test", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, nft: TeritoriNft;
    let registry: NFTMetadataRegistry, staking: SquadStakingV4, hpHealing: HPHealing;
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
        await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
            nft.address,
            staminaKey,
            ["1", "2", "3", "4", "5", "6", "7"],
            [50, 40, 20, 10, 5, 30, 50],
        );
        await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
            nft.address,
            protectionKey,
            ["1", "2", "3", "4", "5", "6", "7"],
            [10, 10, 20, 20, 30, 30, 40],
        );
        await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
            nft.address,
            hpKey,
            ["1", "2", "3", "4", "5", "6", "7"],
            [ethers.utils.parseEther("100"), ethers.utils.parseEther("100"), ethers.utils.parseEther("100"), ethers.utils.parseEther("100"), ethers.utils.parseEther("100"), ethers.utils.parseEther("100"), ethers.utils.parseEther("100")],
        );

        const HPHealing = await ethers.getContractFactory("HPHealing");
        hpHealing = await HPHealing.deploy(registry.address);
        await hpHealing.deployed();
        await hpHealing.setHealingOption(
            ethers.constants.AddressZero,
            ethers.utils.parseEther("0.01")
        );
        await hpHealing.setSupportedCollection(nft.address, true);

        const SquadStakingV4 = await ethers.getContractFactory("SquadStakingV4");
        staking = <SquadStakingV4>await SquadStakingV4.deploy(
            registry.address,
            2,
            5,
            2,
            86400,
            [
                0, 0, ethers.utils.parseEther('1'), ethers.utils.parseEther('1.2'), ethers.utils.parseEther('1.5'), ethers.utils.parseEther('2')
            ],
        );
        await staking.deployed();
        await staking.setSupportedCollection(nft.address, true);

        // set admin role for hpHealing and staking contracts
        await registry.setAdmin([staking.address, hpHealing.address], true);
    })

    it('initialize', async () => {
        expect(await hpHealing.nftMetadataRegistry()).to.equal(registry.address);
    })

    it("can stake again after healing hp", async () => {
        await nft.connect(user).setApprovalForAll(staking.address, true);

        for (let i = 1; i <= 6; i++) {
            // first stake
            await staking.connect(user).stake([
                {
                    collection: nft.address,
                    tokenId: "1"
                },
                {
                    collection: nft.address,
                    tokenId: "2"
                },
                {
                    collection: nft.address,
                    tokenId: "3"
                },
                {
                    collection: nft.address,
                    tokenId: "4"
                },
                {
                    collection: nft.address,
                    tokenId: "5"
                },
            ]);
            await network.provider.send("evm_increaseTime", [90000]);
            await staking.connect(user).unstake(i);
        }

        // check if it's below 50%
        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("46136512000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("5391468000000000000000");

        // try stake again
        await expect(staking.connect(user).stake([
            {
                collection: nft.address,
                tokenId: "1"
            },
            {
                collection: nft.address,
                tokenId: "2"
            },
            {
                collection: nft.address,
                tokenId: "3"
            },
            {
                collection: nft.address,
                tokenId: "4"
            },
            {
                collection: nft.address,
                tokenId: "5"
            },
        ])).to.revertedWith('Bad HP');

        // heal from hp healing
        expect(await hpHealing.queryHealingPrice(nft.address, "1")).to.equal("538634880000000000")

        await nft.connect(user).setApprovalForAll(hpHealing.address, true);
        await hpHealing.connect(user).heal(nft.address, "1", { value: "538634880000000000" });

        // can't withdraw before duration
        await expect(hpHealing.connect(minter).withdraw(nft.address, "1")).to.revertedWith('unauthorized');
        await expect(hpHealing.connect(user).withdraw(nft.address, "1")).to.revertedWith('in healing');

        await network.provider.send("evm_increaseTime", [90000]);
        await hpHealing.connect(user).withdraw(nft.address, "1");

        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("100000000000000000000");

        // can't heal with 100% hp
        await expect(hpHealing.connect(user).heal(nft.address, "1", { value: "538634880000000000" })).to.revertedWith('full hp');

        // try stake again
        await staking.connect(user).stake([
            {
                collection: nft.address,
                tokenId: "1"
            },
            {
                collection: nft.address,
                tokenId: "2"
            },
            {
                collection: nft.address,
                tokenId: "3"
            },
            {
                collection: nft.address,
                tokenId: "4"
            },
            {
                collection: nft.address,
                tokenId: "5"
            },
        ]);
    })
});
