
import { ethers } from "hardhat"

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const Distributor = await ethers.getContractFactory("Distributor");
  const distributor = await Distributor.deploy();
  await distributor.deployed();

  console.log("Distributor deployed at ", distributor.address);
}

Deploy();
