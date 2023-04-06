import * as fs from "fs";
import path from "path"
import { ethers } from "hardhat"

async function start() {
  const metadataRegistryAddress = '0x02462A94dD9b999500B5cB5F9A01D7c0d04453c8';
  const collectionAddress = '0xad8D10B10b6e2944E137801B71B1ab09a1Bf4A18';
  const maxSupply = 5;
  let staminaData: {
    tokenId: string,
    stamina: number | string
  }[] = JSON.parse(fs.readFileSync(path.join(__dirname, `stamina.json`)).toString())

  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const registry = await ethers.getContractAt('NFTMetadataRegistry', metadataRegistryAddress);

  const staminaKey = await registry.queryMetadataKey("Stamina");
  const batch_count = 2;
  for (let i = 0; i < maxSupply; i += batch_count) {
    const staminas = staminaData.slice(i, i + batch_count);
    console.log(staminas)

    const tx = await (await registry["registerNftMegadata(address,bytes32,uint256[],uint256[])"](
      collectionAddress,
      staminaKey,
      staminas.map(item => item.tokenId.toString()),
      staminas.map(item => item.stamina.toString()),
    )).wait();
    console.log("Stamina set in", tx.transactionHash)
  }
}

start();
