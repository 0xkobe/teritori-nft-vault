import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { Breeding, TeritoriMinter, TeritoriNft } from "../types";

describe("Breeding Test", () => {
    let minter: SignerWithAddress, user: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, parentNft: TeritoriNft;
    let breeding: Breeding, childNft: TeritoriNft;

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

        parentNft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await teritoriMinter.nft());

        // mint 2 nfts with royalty info
        const config = {
            maxSupply: 2,
            mintToken: ethers.constants.AddressZero,
            mintStartTime: (await ethers.provider.getBlock("latest")).timestamp,
            whitelistCount: 0,
            publicMintPrice: ethers.utils.parseEther("0.1"),
            publicMintMax: 2,
        };
        await teritoriMinter.setConfig(config);
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });
        await teritoriMinter.connect(user).requestMint(user.address, 1, {
            value: ethers.utils.parseEther("0.1")
        });

        await teritoriMinter.mint([{
            tokenId: "1",
            royaltyReceiver: royaltyReceiver.address,
            royaltyPercentage: "1000",
            tokenUri: "",
        }]);
        await teritoriMinter.mint([{
            tokenId: "2",
            royaltyReceiver: royaltyReceiver.address,
            royaltyPercentage: "1000",
            tokenUri: "",
        }]);

        const Breeding = await ethers.getContractFactory("Breeding");
        breeding = <Breeding>await Breeding.deploy(
            parentNft.address,
            "Child Collection",
            "Child",
            "child-contract-uri",
            teritoriNftImpl.address,
            {
                startTime: 0,
                countLimit: 5,
                duration: 0,
                priceAmount: ethers.utils.parseEther("0.1"),
                currency: ethers.constants.AddressZero,
            },
            {
                currentSupply: 0,
                maxSupply: 2,
                baseUrl: ''
            },
        );
        await breeding.deployed();
        childNft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await breeding.childCollection());
    })

    it('initialize', async () => {
        expect(await childNft.name()).to.equal('Child Collection');
        expect(await childNft.symbol()).to.equal('Child');
        expect(await childNft.contractURI()).to.equal("child-contract-uri");
        expect(await childNft.minter()).to.equal(breeding.address);
    })

    it("pause/unpause", async () => {
        expect(await breeding.paused()).to.equal(false);

        await expect(breeding.unpause()).to.revertedWith("Pausable: not paused");
        await expect(breeding.connect(user).pause()).to.revertedWith("Ownable: caller is not the owner");
        await breeding.pause();

        expect(await breeding.paused()).to.equal(true);

        await expect(breeding.pause()).to.revertedWith("Pausable: paused");
        await expect(breeding.connect(user).unpause()).to.revertedWith("Ownable: caller is not the owner");
        await breeding.unpause();

        expect(await breeding.paused()).to.equal(false);
    })

    it("setMinter", async () => {
        expect(await breeding.minter()).to.equal(minter.address);

        await expect(breeding.connect(user).setMinter(user.address)).to.revertedWith("Ownable: caller is not the owner")
        await breeding.setMinter(user.address);

        expect(await breeding.minter()).to.equal(user.address);
    })

    it("setBreedConfig", async () => {
        const config = {
            startTime: 0,
            countLimit: 5,
            duration: 0,
            priceAmount: ethers.utils.parseEther("0.1"),
            currency: ethers.constants.AddressZero,
        };

        await expect(breeding.connect(user).setBreedConfig(config)).to.revertedWith("Ownable: caller is not the owner")
        await breeding.setBreedConfig(config);
    })

    it("setChildCollectionConfig", async () => {
        const config = {
            currentSupply: 0,
            maxSupply: 2,
            baseUrl: ''
        };

        await expect(breeding.connect(user).setChildCollectionConfig(config)).to.revertedWith("Ownable: caller is not the owner")
        await breeding.setChildCollectionConfig(config);
    })

    it("startBreed", async () => {
        await expect(breeding.connect(user).startBreed()).to.revertedWith("Ownable: caller is not the owner")
        await breeding.startBreed();

        expect((await breeding.breedConfig()).startTime).to.equal((await ethers.provider.getBlock("latest")).timestamp);
    })

    it("mint", async () => {
        await breeding.startBreed();
        await parentNft.connect(user).approve(breeding.address, "1");
        await parentNft.connect(user).approve(breeding.address, "2");
        await breeding.connect(user).breed("1", "2", {
            value: ethers.utils.parseEther("0.1")
        });

        await expect(breeding.connect(user).mint([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
        }])).to.revertedWith("UNAUTHORIZED");

        await breeding.mint([{
            tokenId: "1",
            royaltyReceiver: minter.address,
            royaltyPercentage: "10",
            tokenUri: "",
        }]);

        expect(await childNft.ownerOf("1")).to.equal(user.address);
        expect((await childNft.royaltyInfo("1", 10000))[0]).to.equal(minter.address);
        expect((await childNft.royaltyInfo("1", 10000))[1]).to.equal(10);
    })

    it("mintWithMetadata", async () => {
        await breeding.startBreed();
        await parentNft.connect(user).approve(breeding.address, "1");
        await parentNft.connect(user).approve(breeding.address, "2");
        await breeding.connect(user).breed("1", "2", {
            value: ethers.utils.parseEther("0.1")
        });

        await expect(breeding.connect(user).mintWithMetadata([{
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

        await breeding.mintWithMetadata([{
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

        expect(await childNft.ownerOf("1")).to.equal(user.address);
        expect((await childNft.royaltyInfo("1", 10000))[0]).to.equal(minter.address);
        expect((await childNft.royaltyInfo("1", 10000))[1]).to.equal(10);
        expect((await childNft.nftInfo("1")).name).to.equal("name");
        expect((await childNft.nftInfo("1")).description).to.equal("description");
        expect((await childNft.nftInfo("1")).image).to.equal("image");
        expect((await childNft.nftInfo("1")).external_url).to.equal("external_url");
        expect((await childNft.nftInfo("1")).animation_url).to.equal("animation_url");
        expect((await childNft.nftInfo("1")).attributes.length).to.equal(1);
        expect((await childNft.nftInfo("1")).attributes[0].trait_type).to.equal("trait_type");
        expect((await childNft.nftInfo("1")).attributes[0].value).to.equal("value");
    })
});
