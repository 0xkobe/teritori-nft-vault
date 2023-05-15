
import { ethers } from "hardhat"
import config from './config.json';

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const BonusPerkBreeding = await ethers.getContractFactory("BonusPerkBreeding");
  const bonusPerkBreeding = await BonusPerkBreeding.deploy(config.riot, config.bonusPerk, config.metadataRegistry, {
    startTime: 0,
    priceAmount: config.breedPrice,
    currency: config.breedToken,
  });
  await bonusPerkBreeding.deployed();
  console.log("BonusPerkBreeding deployed at ", bonusPerkBreeding.address);
}

Deploy();
