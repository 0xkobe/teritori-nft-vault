
import { ethers } from "hardhat"

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const DailyDistributor = await ethers.getContractFactory("DailyDistributor");
  const distributor = await DailyDistributor.deploy();
  await distributor.deployed();

  console.log("DailyDistributor deployed at ", distributor.address);
}

Deploy();
