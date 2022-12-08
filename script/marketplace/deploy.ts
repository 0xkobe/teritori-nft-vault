
import { ethers } from "hardhat"

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const NFTVault = await ethers.getContractFactory("NFTVault");
  const nftVault = await NFTVault.deploy(200, 10000); // set fee as 2%
  await nftVault.deployed();

  console.log("NFT vault contract deployed at ", nftVault.address);
}

Deploy();
