import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { NFTMetadataRegistry, SquadStakingV2, TeritoriMinter, TeritoriNft } from "../types";

describe("SquadStakingV2 Test", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, nft: TeritoriNft;
    let registry: NFTMetadataRegistry, staking: SquadStakingV2;

    beforeEach(async () => {
        [minter, user, royaltyReceiver] = await ethers.getSigners();

        const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
        teritoriNftImpl = <TeritoriNft>await TeritoriNft.deploy();
        await teritoriNftImpl.deployed();

        const TeritoriMinter = await ethers.getContractFactory("TeritoriMinter");
        teritoriMinter = <TeritoriMinter>await TeritoriMinter.deploy(
            "Parent Collection", "Parent", "parent-contract-uri", teritoriNftImpl.address, minter.address, ethers.utils.parseEther("0.005")
        );
        await teritoriMinter.deployed();

        nft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await teritoriMinter.nft());

        // mint 2 nfts with royalty info
        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 0,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 5,
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.connect(user).requestMint(user.address, 5, {
            value: ethers.utils.parseEther("0.5")
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
        ]);

        const NFTMetadataRegistry = await ethers.getContractFactory("NFTMetadataRegistry");
        registry = await NFTMetadataRegistry.deploy()
        await registry.deployed();
        await registry.initialize();

        await registry.setNftStamina(
            nft.address,
            ["1", "2", "3", "4", "5"],
            [50, 40, 20, 10, 5],
        );

        const SquadStakingV2 = await ethers.getContractFactory("SquadStakingV2");
        staking = <SquadStakingV2>await SquadStakingV2.deploy(
            registry.address,
            2,
            5,
            86400,
            [
                0, 0, ethers.utils.parseEther('1'), ethers.utils.parseEther('1.2'), ethers.utils.parseEther('1.5'), ethers.utils.parseEther('2')
            ],
        );
        await staking.deployed();
    })

    it('initialize', async () => {
        expect(await staking.nftMetadataRegistry()).to.equal(registry.address);
        expect(await staking.minSquadSize()).to.equal(2);
        expect(await staking.maxSquadSize()).to.equal(5);
        expect(await staking.cooldownPeriod()).to.equal(86400);
        expect(await staking.bonusMultipliers(2)).to.equal("1000000000000000000");
        expect(await staking.bonusMultipliers(3)).to.equal("1200000000000000000");
        expect(await staking.bonusMultipliers(4)).to.equal("1500000000000000000");
        expect(await staking.bonusMultipliers(5)).to.equal("2000000000000000000");
    })

    it('stake', async () => {
        await expect(staking.stake([])).to.revertedWith('invalid number of nfts');
        await expect(staking.stake([
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
            {
                collection: nft.address,
                tokenId: "6"
            },
        ])).to.revertedWith('invalid number of nfts');

        await nft.connect(user).setApprovalForAll(staking.address, true);
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

        const info = await staking.userSquadInfo(user.address);
        expect(info.endTime.sub(info.startTime)).to.equal(45000);

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
        ])).to.revertedWith('squad exists');
    })

    it('unstake', async () => {
        await expect(staking.unstake()).to.revertedWith('squad not exists');

        await nft.connect(user).setApprovalForAll(staking.address, true);
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

        await expect(staking.connect(user).unstake()).to.revertedWith('wait until staking period')

        await network.provider.send("evm_increaseTime", [45000]);

        await staking.connect(user).unstake();

        expect(await nft.ownerOf("1")).to.equal(user.address);
    })
});
