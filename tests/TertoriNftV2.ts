import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { TeritoriMinterV2, TeritoriNft } from "../types";

describe("TeritoriMinter / TeritoriNft V2 Test", () => {
    const name = "Test Collection";
    const symbol = "tNft";

    let minter: SignerWithAddress, user: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinterV2, teritoriNft: TeritoriNft;

    beforeEach(async () => {
        [minter, user] = await ethers.getSigners();

        const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
        teritoriNftImpl = <TeritoriNft>await TeritoriNft.deploy();
        await teritoriNftImpl.deployed();

        const TeritoriMinterV2 = await ethers.getContractFactory("TeritoriMinterV2");
        teritoriMinter = <TeritoriMinterV2>await TeritoriMinterV2.deploy(
            name, symbol, "contract-uri", teritoriNftImpl.address, minter.address, ethers.utils.parseEther("0.005"), true, ""
        );
        await teritoriMinter.deployed();

        teritoriNft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await teritoriMinter.nft());

        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 1,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 2,
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
        };
        await teritoriMinter.setConfig(config);
    })

    it("initialize", async () => {
        expect(await teritoriNft.name()).to.equal(name);
        expect(await teritoriNft.symbol()).to.equal(symbol);
        expect(await teritoriNft.contractURI()).to.equal("contract-uri");
        expect(await teritoriNft.minter()).to.equal(teritoriMinter.address);
    })

    it("pause/unpause", async () => {

        expect(await teritoriMinter.paused()).to.equal(false);

        await expect(teritoriMinter.unpause()).to.revertedWith("Pausable: not paused");
        await expect(teritoriMinter.connect(user).pause()).to.revertedWith("Ownable: caller is not the owner");
        await teritoriMinter.pause();

        expect(await teritoriMinter.paused()).to.equal(true);

        await expect(teritoriMinter.pause()).to.revertedWith("Pausable: paused");
        await expect(teritoriMinter.connect(user).unpause()).to.revertedWith("Ownable: caller is not the owner");
        await teritoriMinter.unpause();

        expect(await teritoriMinter.paused()).to.equal(false);
    })

    it("setConfig", async () => {
        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 0,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 2,
            baseUrl: "",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
        };
        await expect(teritoriMinter.connect(user).setConfig(config)).to.revertedWith("Ownable: caller is not the owner")
        await teritoriMinter.setConfig(config);
    })

    it("startMint", async () => {
        await expect(teritoriMinter.connect(user).startMint()).to.revertedWith("Ownable: caller is not the owner")
        await teritoriMinter.startMint();

        expect((await teritoriMinter.config()).mintStartTime).to.equal((await ethers.provider.getBlock("latest")).timestamp);
    })

    it("mint in whitelist phase", async () => {
        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 2,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 2,
            baseUrl: "",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.setWhitelistConfig(
            [0, 1],
            [
                {
                    mintMax: 1,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.01"),
                    delayPeriod: 0
                },
                {
                    mintMax: 2,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.05"),
                    delayPeriod: 0
                }
            ]
        );
        await teritoriMinter.setWhitelist(0, [user.address], true);
        await teritoriMinter.setWhitelist(1, [user.address], true);
        await teritoriMinter.startMint();

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.01")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.05")
        })).to.reverted;
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.01")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.01")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.05")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.05")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.05")
        })).to.reverted;
    })

    it("mint in public phase", async () => {
        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 2,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 2,
            baseUrl: "",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.setWhitelistConfig(
            [0, 1],
            [
                {
                    mintMax: 1,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.01"),
                    delayPeriod: 0
                },
                {
                    mintMax: 2,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.05"),
                    delayPeriod: 0
                }
            ]
        );
        await teritoriMinter.setWhitelist(0, [user.address], true);
        await teritoriMinter.setWhitelist(1, [user.address], true);
        await teritoriMinter.startMint();

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.01")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.05")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.1")
        );
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;

        expect(await teritoriNft.ownerOf("0")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[1]).to.equal(10);

        expect(await teritoriNft.ownerOf("1")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[1]).to.equal(10);

        await teritoriMinter.setBaseURI("baseURI/")
        expect(await teritoriNft.tokenURI("0")).to.equal('baseURI/0');
        expect(await teritoriNft.tokenURI("1")).to.equal('baseURI/1');
    })

    it("mint", async () => {
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });

        expect(await teritoriNft.ownerOf("0")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[1]).to.equal(10);
    })

    it("reveal", async () => {
        await teritoriMinter.setBaseURI("baseURI/")
        await teritoriMinter.updateReveal(false, "revealURI");

        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });

        expect(await teritoriNft.ownerOf("0")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[1]).to.equal(10);

        expect(await teritoriNft.tokenURI("0")).to.equal('revealURI');
        await teritoriMinter.updateReveal(true, "revealURI");
        expect(await teritoriNft.tokenURI("0")).to.equal('baseURI/0');
    })

    it("setTokenUri", async () => {
        await teritoriMinter.updateReveal(false, "revealURI");

        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });

        expect(await teritoriNft.ownerOf("0")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("0", 10000))[1]).to.equal(10);

        expect(await teritoriNft.tokenURI("0")).to.equal('revealURI');
        await teritoriMinter.updateReveal(true, "revealURI");
        expect(await teritoriNft.tokenURI("0")).to.equal('');

        await teritoriMinter.setBaseURI("baseURI/")
        expect(await teritoriNft.tokenURI("0")).to.equal('baseURI/0');

        await teritoriMinter.updateReveal(false, "revealURI");
        expect(await teritoriNft.tokenURI("0")).to.equal('revealURI');
    })
});
