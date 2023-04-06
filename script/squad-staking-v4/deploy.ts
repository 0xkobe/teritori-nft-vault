
import { ethers, upgrades } from "hardhat"
import config from './config.json';

async function Deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const NFTMetadataRegistry = await ethers.getContractFactory("NFTMetadataRegistry");
  const registry = await upgrades.deployProxy(
    NFTMetadataRegistry,
    []
  );
  await registry.deployed();

  console.log("Metadata Registry deployed at ", registry.address);

  const HPHealing = await ethers.getContractFactory("HPHealing");
  const hpHealing = await HPHealing.deploy(
    registry.address
  );
  await hpHealing.deployed();

  console.log("HP Healing deployed at ", hpHealing.address);

  const SquadStakingV4 = await ethers.getContractFactory("SquadStakingV4");
  const staking = await SquadStakingV4.deploy(
    registry.address,
    config.minSquadSize,
    config.maxSquadSize,
    config.squadCountLimit,
    config.cooldownPeriod,
    config.bonusMultiplier
  );
  await staking.deployed();

  console.log("Squad staking deployed at ", staking.address);
}

Deploy();
