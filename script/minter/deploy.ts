
import { ethers } from "hardhat";

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const TeritoriNft = await ethers.getContractFactory("TeritoriNft");
  const nftImpl = await TeritoriNft.deploy();
  await nftImpl.deployed();
  console.log("NFT Token Implementation Address: ", nftImpl.address);
}

Deploy();
