
import { ethers } from "hardhat"

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
}

Deploy();
