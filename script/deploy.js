const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const NFTVault = await ethers.getContractFactory("NFTVault");
  const nftVault = await NFTVault.deploy(100, 10000); // set fee as 1%
  await nftVault.deployed();

  console.log("NFT vault contract deployed at ", nftVault.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
