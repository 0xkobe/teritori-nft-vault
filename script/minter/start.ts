import { ethers } from "hardhat"
import { loadState } from "./lib";
import { TeritoriMinter } from "../../types";

async function start() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const { minterContract } = loadState()
  if (!minterContract) {
    console.error("Not instantiated")
    return
  }

  const minter = <TeritoriMinter>await ethers.getContractAt("TeritoriMinter", minterContract);
  const tx = await (await minter.startMint()).wait();
  console.log(`Mint started at ${tx.transactionHash}`);
}

start();
