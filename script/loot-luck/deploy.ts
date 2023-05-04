
import { ethers } from "hardhat"
import config from './config.json';

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const MysteryNft = await ethers.getContractFactory("MysteryNft");

  const mysteryBox = await MysteryNft.deploy("Mystory Box", "mBox");
  await mysteryBox.deployed();
  console.log("MysteryBox deployed at ", mysteryBox.address);

  const mysteryKey = await MysteryNft.deploy("Mystory Box", "mKey");
  await mysteryKey.deployed();
  console.log("MysteryKey deployed at ", mysteryKey.address);

  const MysteryMinter = await ethers.getContractFactory("MysteryMinter");
  const mysteryMinter = await MysteryMinter.deploy(mysteryBox.address, mysteryKey.address);
  await mysteryMinter.deployed();
  console.log("MysteryMinter deployed at ", mysteryMinter.address);

  const BonusPerkNft = await ethers.getContractFactory("BonusPerkNft");
  const bonusPerk = await BonusPerkNft.deploy("Bonus Perk", "bPerk");
  await bonusPerk.deployed();
  console.log("BonusPerk deployed at ", bonusPerk.address);

  const BonusPerkMinter = await ethers.getContractFactory("BonusPerkMinter");
  const bonusPerkMinter = await BonusPerkMinter.deploy(mysteryBox.address, mysteryKey.address, bonusPerk.address, {
    startTime: 0,
    priceAmount: config.bonusPerkMinter.breedPrice,
    currency: config.bonusPerkMinter.breedToken,
  });
  await bonusPerkMinter.deployed();
  console.log("BonusPerkMinter deployed at ", bonusPerkMinter.address);

  const BonusPerkBreeding = await ethers.getContractFactory("BonusPerkBreeding");
  const bonusPerkBreeding = await BonusPerkBreeding.deploy(config.riot, bonusPerk.address, config.metadataRegistry, {
    startTime: 0,
    priceAmount: config.bonusPerkBreeding.breedPrice,
    currency: config.bonusPerkBreeding.breedToken,
  });
  await bonusPerkBreeding.deployed();
  console.log("BonusPerkBreeding deployed at ", bonusPerkBreeding.address);
}

Deploy();
