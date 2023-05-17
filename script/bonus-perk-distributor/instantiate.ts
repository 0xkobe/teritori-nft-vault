
import * as fs from "fs";
import path from "path"
import { ethers } from "hardhat"
import { dataDir, loadState, saveState } from "./lib";
import { BonusPerkMinter__factory } from '../../types'

async function Instantiate() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const state = loadState()
  if (state.bonusPerkMinter) {
    console.error("Already instantiated")
    return
  }

  const configFile = path.join(dataDir, "config.json")
  const config: {
    mysteryBoxAddress: string,
    mysteryKeyAddress: string,
    bonusPerkAddress: string,
    breedPrice: string,
    breedToken: string,
  } = JSON.parse(fs.readFileSync(configFile, { encoding: "utf-8" }))

  const BonusPerkMinter = <BonusPerkMinter__factory>await ethers.getContractFactory('BonusPerkMinter');
  const bonusPerkMinter = await BonusPerkMinter.deploy(
    config.mysteryBoxAddress,
    config.mysteryKeyAddress,
    config.bonusPerkAddress,
    {
      startTime: 0,
      priceAmount: config.breedPrice,
      currency: config.breedToken
    }
  );
  await bonusPerkMinter.deployed();

  console.log("BonusPerkMinter contract address:", bonusPerkMinter.address);

  state.bonusPerkMinter = bonusPerkMinter.address;

  saveState(state)
}

Instantiate();
