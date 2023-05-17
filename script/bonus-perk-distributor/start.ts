import { ethers } from "hardhat"
import { loadState } from "./lib";
import { BonusPerkMinter } from "../../types";

async function start() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const { bonusPerkMinter } = loadState()
  if (!bonusPerkMinter) {
    console.error("Not instantiated")
    return
  }

  const minter = <BonusPerkMinter>await ethers.getContractAt("BonusPerkMinter", bonusPerkMinter);
  const tx = await (await minter.startBreed()).wait();
  console.log(`Mint started at ${tx.transactionHash}`);
}

start();
