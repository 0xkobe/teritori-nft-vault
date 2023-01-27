import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { NFTVault, Ownable, TeritoriMinter, TeritoriNft } from "../types";

describe("NFTVault Test", () => {
    const name = "Test Collection";
    const symbol = "tNft";

    let owner: SignerWithAddress, user: SignerWithAddress, buyer: SignerWithAddress, royaltyReceiver: SignerWithAddress;
    let teritoriNftImpl: TeritoriNft;
    let teritoriMinter: TeritoriMinter, teritoriNft: TeritoriNft;
    let nftVault: NFTVault;

    beforeEach(async () => {
        [owner, user, buyer, royaltyReceiver] = await ethers.getSigners();

        const NFTVault = await ethers.getContractFactory("NFTVault");
        nftVault = <NFTVault>await NFTVault.deploy(1000, 10000);
        await nftVault.deployed();

        const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
        teritoriNftImpl = <TeritoriNft>await TeritoriNft.deploy();
        await teritoriNftImpl.deployed();

        const TeritoriMinter = await ethers.getContractFactory("TeritoriMinter");
        teritoriMinter = <TeritoriMinter>await TeritoriMinter.deploy(
            name, symbol, "", teritoriNftImpl.address, owner.address, ethers.utils.parseEther("0.05"), true, ""
        );
        await teritoriMinter.deployed();

        teritoriNft = <TeritoriNft>await ethers.getContractAt("TeritoriNft", await teritoriMinter.nft());

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
    })

    it("setSupportedNft", async () => {
        await expect(nftVault.connect(user).setSupportedNft(teritoriNft.address, true)).to.revertedWith('Ownable: caller is not the owner');

        await nftVault.setSupportedNft(teritoriNft.address, true);
        expect(await nftVault.isSupportedNft(teritoriNft.address)).to.equal(true);
    })

    it("setSupportedToken", async () => {
        await expect(nftVault.connect(user).setSupportedToken(ethers.constants.AddressZero, true)).to.revertedWith('Ownable: caller is not the owner');

        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        expect(await nftVault.isSupportedToken(ethers.constants.AddressZero)).to.equal(true);
    })

    it("setFeeNumerator", async () => {
        expect(await nftVault.feeNumerator()).to.equal(1000);

        await expect(nftVault.connect(user).setFeeNumerator(100, 10000)).to.revertedWith('Ownable: caller is not the owner');
        await nftVault.setFeeNumerator(100, 10000);

        expect(await nftVault.feeNumerator()).to.equal(100);
    })

    it("listNFT", async () => {
        await nftVault.setSupportedNft(teritoriNft.address, true);
        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        await teritoriNft.connect(user).setApprovalForAll(nftVault.address, true);
        await nftVault.connect(user).listNFT(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("1"),
        });

        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(ethers.utils.parseEther("1"));
    })

    it("updateSaleOption", async () => {
        await nftVault.setSupportedNft(teritoriNft.address, true);
        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        await teritoriNft.connect(user).setApprovalForAll(nftVault.address, true);
        await nftVault.connect(user).listNFT(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("1"),
        });

        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(ethers.utils.parseEther("1"));

        await nftVault.connect(user).updateSaleOption(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("2"),
        });

        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(ethers.utils.parseEther("2"));
    })

    it("withdrawNFT", async () => {
        await nftVault.setSupportedNft(teritoriNft.address, true);
        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        await teritoriNft.connect(user).setApprovalForAll(nftVault.address, true);
        await nftVault.connect(user).listNFT(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("1"),
        });

        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(ethers.utils.parseEther("1"));

        await nftVault.connect(user).withdrawNFT(teritoriNft.address, "1");

        expect(await teritoriNft.ownerOf("1")).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(0);
    })

    it("buyNFT", async () => {
        await nftVault.setSupportedNft(teritoriNft.address, true);
        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        await teritoriNft.connect(user).setApprovalForAll(nftVault.address, true);
        await nftVault.connect(user).listNFT(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("1"),
        });

        expect((await nftVault.nftSales(teritoriNft.address, "1")).owner).to.equal(user.address);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.token).to.equal(ethers.constants.AddressZero);
        expect((await nftVault.nftSales(teritoriNft.address, "1")).saleOption.amount).to.equal(ethers.utils.parseEther("1"));

        const userBalance = await user.getBalance();
        const royaltyReceiverBalance = await royaltyReceiver.getBalance();
        await nftVault.connect(buyer).buyNFT(teritoriNft.address, "1", {
            value: ethers.utils.parseEther("1")
        });

        expect(await teritoriNft.ownerOf("1")).to.equal(buyer.address);
        expect(await user.getBalance()).to.equal(
            userBalance.add(
                ethers.utils.parseEther("1").mul(80).div(100)
            )
        );
        expect(await royaltyReceiver.getBalance()).to.equal(
            royaltyReceiverBalance.add(
                ethers.utils.parseEther("1").mul(10).div(100)
            )
        );
        expect(await ethers.provider.getBalance(nftVault.address)).to.equal(
            ethers.utils.parseEther("1").mul(10).div(100)
        );
    })

    it("withdraw / withdrawAll", async () => {

        await nftVault.setSupportedNft(teritoriNft.address, true);
        await nftVault.setSupportedToken(ethers.constants.AddressZero, true);
        await teritoriNft.connect(user).setApprovalForAll(nftVault.address, true);
        await nftVault.connect(user).listNFT(teritoriNft.address, "1", {
            token: ethers.constants.AddressZero,
            amount: ethers.utils.parseEther("1"),
        });
        await nftVault.connect(buyer).buyNFT(teritoriNft.address, "1", {
            value: ethers.utils.parseEther("1")
        });

        const ownerBalance = await owner.getBalance();

        const tx = await (await nftVault.withdrawAll([ethers.constants.AddressZero])).wait();

        expect(await ethers.provider.getBalance(nftVault.address)).to.equal(0);
        expect(await owner.getBalance()).to.equal(
            ownerBalance.add(
                ethers.utils.parseEther("1").mul(10).div(100)
            ).sub(
                tx.gasUsed.mul(tx.effectiveGasPrice)
            )
        );
    })
});
