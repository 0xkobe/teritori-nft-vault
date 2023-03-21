
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

  const SquadStakingV3 = await ethers.getContractFactory("SquadStakingV3");
  const staking = await SquadStakingV3.deploy(
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
