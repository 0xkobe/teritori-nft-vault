const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const TestERC721 = await ethers.getContractFactory("TestERC721");
  const testERC721 = await TestERC721.deploy(
    "Test Punk",
    "tPunk",
    "https://api.polygonpunks.io/metadata/"
  );
  await testERC721.deployed();

  console.log("TestERC721 contract deployed at ", testERC721.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
