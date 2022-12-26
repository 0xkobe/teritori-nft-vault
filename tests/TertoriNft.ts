import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { TeritoriMinter, TeritoriNft } from "../types";

describe("TeritoriMinter / TeritoriNft Test", () => {
    const name = "Test Collection";
    const symbol = "tNft";

    let minter: SignerWithAddress, user: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, teritoriNft: TeritoriNft;

    beforeEach(async () => {
        [minter, user] = await ethers.getSigners();

        const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
        teritoriNftImpl = <TeritoriNft>await TeritoriNft.deploy();
        await teritoriNftImpl.deployed();

        const TeritoriMinter = await ethers.getContractFactory("TeritoriMinter");
        teritoriMinter = <TeritoriMinter>await TeritoriMinter.deploy(
            name, symbol, teritoriNftImpl.address, minter.address, ethers.utils.parseEther("0.005")
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
            baseUrl: "",
        };
        await teritoriMinter.setConfig(config);
    })

    it("initialize", async () => {
        expect(await teritoriNft.name()).to.equal(name);
        expect(await teritoriNft.symbol()).to.equal(symbol);
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
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.setWhitelistConfig(
            [0, 1],
            [
                {
                    mintMax: 1,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.01")
                },
                {
                    mintMax: 2,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.05")
                }
            ]
        );
        await teritoriMinter.setWhitelist(0, [user.address], true);
        await teritoriMinter.setWhitelist(1, [user.address], true);
        await teritoriMinter.startMint();

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.01")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.05")
        })).to.reverted;
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.01")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.01")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.05")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.05")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
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
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.setWhitelistConfig(
            [0, 1],
            [
                {
                    mintMax: 1,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.01")
                },
                {
                    mintMax: 2,
                    mintPeriod: 100,
                    mintPrice: ethers.utils.parseEther("0.05")
                }
            ]
        );
        await teritoriMinter.setWhitelist(0, [user.address], true);
        await teritoriMinter.setWhitelist(1, [user.address], true);
        await teritoriMinter.startMint();

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.01")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.05")
        );
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;

        await network.provider.send("evm_increaseTime", [100]);
        await network.provider.send("evm_mine");

        expect((await teritoriMinter.userState(user.address)).mintPrice).to.equal(
            ethers.utils.parseEther("0.1")
        );
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        });
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        });
        await expect(teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        })).to.reverted;
    })

    it("mint", async () => {
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        });

        await expect(teritoriMinter.connect(user).mint([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
        }])).to.revertedWith("UNAUTHORIZED");

        await teritoriMinter.mint([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
        }]);

        expect(await teritoriNft.ownerOf("1")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[1]).to.equal(10);
    })

    it("mintWithMetadata", async () => {
        await teritoriMinter.connect(user).requestMint(user.address, {
            value: ethers.utils.parseEther("0.1")
        });

        await expect(teritoriMinter.connect(user).mintWithMetadata([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
            extension: {
                name: "name",
                description: "description",
                image: "image",
                external_url: "external_url",
                animation_url: "animation_url",
                attributes: [
                    {
                        trait_type: "trait_type",
                        value: "value"
                    }
                ]
            }
        }])).to.revertedWith("UNAUTHORIZED");

        await teritoriMinter.mintWithMetadata([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
            extension: {
                name: "name",
                description: "description",
                image: "image",
                external_url: "external_url",
                animation_url: "animation_url",
                attributes: [
                    {
                        trait_type: "trait_type",
                        value: "value"
                    }
                ]
            }
        }]);

        expect(await teritoriNft.ownerOf("1")).to.equal(user.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[0]).to.equal(minter.address);
        expect((await teritoriNft.royaltyInfo("1", 10000))[1]).to.equal(10);
        expect((await teritoriNft.nftInfo("1")).name).to.equal("name");
        expect((await teritoriNft.nftInfo("1")).description).to.equal("description");
        expect((await teritoriNft.nftInfo("1")).image).to.equal("image");
        expect((await teritoriNft.nftInfo("1")).external_url).to.equal("external_url");
        expect((await teritoriNft.nftInfo("1")).animation_url).to.equal("animation_url");
        expect((await teritoriNft.nftInfo("1")).attributes.length).to.equal(1);
        expect((await teritoriNft.nftInfo("1")).attributes[0].trait_type).to.equal("trait_type");
        expect((await teritoriNft.nftInfo("1")).attributes[0].value).to.equal("value");
    })
});
