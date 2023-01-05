import { ethers } from "hardhat"
import { loadState } from "./lib";
import { IERC20, TeritoriMinter } from "../../types";

async function start() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const { minterContract } = loadState()
  if (!minterContract) {
    console.error("Not instantiated")
    return
  }

  const minter = <TeritoriMinter>await ethers.getContractAt("TeritoriMinter", minterContract);
  const config = await minter.config();
  const state = await minter.userState(deployer.address);
  if (config.mintToken == "0x0000000000000000000000000000000000000000") {
    await (await minter.requestMint(deployer.address, 1, {
      value: state.mintPrice
    })).wait();
  } else {
    const token = <IERC20>await ethers.getContractAt("IERC20", config.mintToken);
    await (await token.approve(minter.address, state.mintPrice)).wait();
    await (await minter.requestMint(deployer.address, 1)).wait();
  }
  console.log("Mint requested");
}

start();
