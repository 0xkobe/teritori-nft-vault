import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { NFTMetadataRegistry, SquadStakingV4, TeritoriMinter, TeritoriNft } from "../types";

describe("SquadStakingV4 Test", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, nft: TeritoriNft;
    let registry: NFTMetadataRegistry, staking: SquadStakingV4;
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
        await registry.setAdmin([staking.address], true);
    })

    it('initialize', async () => {
        expect(await staking.nftMetadataRegistry()).to.equal(registry.address);
        expect(await staking.minSquadSize()).to.equal(2);
        expect(await staking.maxSquadSize()).to.equal(5);
        expect(await staking.maxSquadCount()).to.equal(2);
        expect(await staking.cooldownPeriod()).to.equal(86400);
        expect(await staking.bonusMultipliers(2)).to.equal("1000000000000000000");
        expect(await staking.bonusMultipliers(3)).to.equal("1200000000000000000");
        expect(await staking.bonusMultipliers(4)).to.equal("1500000000000000000");
        expect(await staking.bonusMultipliers(5)).to.equal("2000000000000000000");
    })

    it("pause/unpause", async () => {
        expect(await staking.paused()).to.equal(false);

        await expect(staking.unpause()).to.revertedWith("Pausable: not paused");
        await expect(staking.connect(user).pause()).to.revertedWith("Ownable: caller is not the owner");
        await staking.pause();

        expect(await staking.paused()).to.equal(true);

        await expect(staking.pause()).to.revertedWith("Pausable: paused");
        await expect(staking.connect(user).unpause()).to.revertedWith("Ownable: caller is not the owner");
        await staking.unpause();

        expect(await staking.paused()).to.equal(false);
    })

    it("setSquadSize", async () => {
        expect(await staking.minSquadSize()).to.equal(2);
        expect(await staking.maxSquadSize()).to.equal(5);

        await expect(staking.connect(user).setSquadSize(3, 6)).to.revertedWith("Ownable: caller is not the owner")
        await staking.setSquadSize(3, 6);

        expect(await staking.minSquadSize()).to.equal(3);
        expect(await staking.maxSquadSize()).to.equal(6);
    })

    it("setCooldownPeriod", async () => {
        expect(await staking.cooldownPeriod()).to.equal(86400);

        await expect(staking.connect(user).setCooldownPeriod(43200)).to.revertedWith("Ownable: caller is not the owner")
        await staking.setCooldownPeriod(43200);

        expect(await staking.cooldownPeriod()).to.equal(43200);
    })

    it("setBonusMultiplier", async () => {
        expect(await staking.bonusMultipliers(2)).to.equal(ethers.utils.parseEther('1'));
        expect(await staking.bonusMultipliers(3)).to.equal(ethers.utils.parseEther('1.2'));
        expect(await staking.bonusMultipliers(4)).to.equal(ethers.utils.parseEther('1.5'));
        expect(await staking.bonusMultipliers(5)).to.equal(ethers.utils.parseEther('2'));

        await expect(staking.connect(user).setBonusMultiplier(
            [2, 3, 4, 5],
            [ethers.utils.parseEther('1.2'), ethers.utils.parseEther('1.3'), ethers.utils.parseEther('1.4'), ethers.utils.parseEther('1.5')]
        )).to.revertedWith("Ownable: caller is not the owner")
        await staking.setBonusMultiplier(
            [2, 3, 4, 5],
            [ethers.utils.parseEther('1.2'), ethers.utils.parseEther('1.3'), ethers.utils.parseEther('1.4'), ethers.utils.parseEther('1.5')]
        );

        expect(await staking.bonusMultipliers(2)).to.equal(ethers.utils.parseEther('1.2'));
        expect(await staking.bonusMultipliers(3)).to.equal(ethers.utils.parseEther('1.3'));
        expect(await staking.bonusMultipliers(4)).to.equal(ethers.utils.parseEther('1.4'));
        expect(await staking.bonusMultipliers(5)).to.equal(ethers.utils.parseEther('1.5'));
    })

    it("setSupportedCollection", async () => {
        await expect(staking.connect(user).setSupportedCollection(nft.address, true)).to.revertedWith('Ownable: caller is not the owner');

        await staking.setSupportedCollection(nft.address, true);
        expect(await staking.isSupportedCollection(nft.address)).to.equal(true);

        expect(await staking.supportedCollectionLength()).to.equal(1);
        expect(await staking.supportedCollectionAt(0)).to.equal(nft.address);
    })
    it('dual stake', async () => {
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

        let info = await staking.userSquadInfo(user.address);
        expect(info[0].endTime.sub(info[0].startTime)).to.equal(45000);

        await staking.connect(user).stake([
            {
                collection: nft.address,
                tokenId: "6"
            },
            {
                collection: nft.address,
                tokenId: "7"
            },
        ]);

        info = await staking.userSquadInfo(user.address);
        expect(info[1].endTime.sub(info[1].startTime)).to.equal(13500);
    })

    it('unstake', async () => {
        await expect(staking.unstake(1)).to.revertedWith('invalid index');

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

        await expect(staking.connect(user).unstake(1)).to.revertedWith('during staking period')

        await network.provider.send("evm_increaseTime", [45000]);

        await expect(staking.connect(user).unstake(1)).to.revertedWith('during cooldown period')

        await network.provider.send("evm_increaseTime", [45000]);

        await staking.connect(user).unstake(1);

        expect(await nft.ownerOf("1")).to.equal(user.address);
    })

    it.only('check xp/hp value after unstake', async () => {
        await nft.connect(user).setApprovalForAll(staking.address, true);

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
        await staking.connect(user).unstake(1);

        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("80600000000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("1250000000000000000000");

        // second stake
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
        await staking.connect(user).unstake(2);

        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("65080000000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("2257500000000000000000");

        // third stake
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
        await staking.connect(user).unstake(3);

        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("52664000000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("3071000000000000000000");

        // fourth stake
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
        await staking.connect(user).unstake(4);

        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("42731200000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("3729300000000000000000");
    })

    it.only("can't stake if hp is below 50%", async () => {
        await nft.connect(user).setApprovalForAll(staking.address, true);

        for (let i = 1; i <= 4; i++) {
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
        expect(await registry.metadata(nft.address, hpKey, "1")).to.equal("42731200000000000000");
        expect(await registry.metadata(nft.address, xpKey, "1")).to.equal("3729300000000000000000");

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
    })
});
