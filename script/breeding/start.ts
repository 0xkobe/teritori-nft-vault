import { ethers } from "hardhat"
import { loadState } from "./lib";
import { Breeding } from "../../types";

async function start() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const { breedingContract } = loadState()
  if (!breedingContract) {
    console.error("Not instantiated")
    return
  }

  const breeding = <Breeding>await ethers.getContractAt("Breeding", breedingContract);
  const tx = await (await breeding.startBreed()).wait();
  console.log(`Mint started at ${tx.transactionHash}`);
}

start();
