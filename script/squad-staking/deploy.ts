
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

  console.log("Metadat Registry deployed at ", registry.address);

  const SquadStakingV2 = await ethers.getContractFactory("SquadStakingV2");
  const staking = await SquadStakingV2.deploy(
    registry.address,
    config.minSquadSize,
    config.maxSquadSize,
    config.cooldownPeriod,
    config.bonusMultiplier
  );
  await staking.deployed();

  console.log("Squad staking deployed at ", staking.address);
}

Deploy();
