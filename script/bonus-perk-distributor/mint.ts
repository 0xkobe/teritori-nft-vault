import tokens from './data/tokens.json'
import fs from 'fs'
import path from "path"
import { dataDir, loadState } from "./lib";
import { BonusPerkMinter } from '../../types';
import { ethers } from 'hardhat';

const mintedFile = path.join(dataDir, "minted.json")

const loadMintedTokens = (): any[] => {
  if (!fs.existsSync(mintedFile)) {
    return []
  }
  return JSON.parse(fs.readFileSync(mintedFile, { encoding: "utf-8" }))
}

async function getRandomItems(count: number) {
  const result = []
  const mintedTokens = loadMintedTokens();
  let remainings = tokens.filter(item => mintedTokens.findIndex(token => token.toString() == item.toString()) == -1);
  while (result.length < count) {
    const index = Math.floor(Math.random() * remainings.length);
    const i = remainings[index];
    result.push(i.toString())
    remainings = remainings.filter((a) => a != i)
  }
  return result
}

async function addToMinted(item: any) {
  const mintedTokens = loadMintedTokens();
  mintedTokens.push(item)
  fs.writeFileSync(mintedFile, JSON.stringify(mintedTokens, undefined, 2))
}

async function tryMint(bonusPerkMinter: BonusPerkMinter) {
  console.log("Checking new mint request...", new Date());

  const currentSupply = await bonusPerkMinter.currentSupply();
  console.log("currentSupply = ", currentSupply.toString());
  const breedRequestsCount = await bonusPerkMinter.breedRequestsCount();
  console.log("breedRequestsCount = ", breedRequestsCount.toString());

  if (breedRequestsCount == currentSupply) {
    return;
  }

  const batch_count = 20;
  for (let i = currentSupply.toNumber(); i < breedRequestsCount.toNumber();) {
    const count = Math.min(batch_count, breedRequestsCount.toNumber() - i);
    i += count;

    const items = await getRandomItems(count)

    console.log("Will try mint", items.join(', '))

    try {
      const tx = await (await bonusPerkMinter.mint(
        items
      )).wait();

      for (let j = 0; j < items.length; j++) {
        await addToMinted(items[j]);
      }
      console.log("Minted token in", tx.transactionHash)
    } catch (e) {
      console.error("Tx delivery failed:", e);
      return;
    }
  }
}

async function start(bonusPerkMinter: BonusPerkMinter) {
  await tryMint(bonusPerkMinter);

  setTimeout(() => start(bonusPerkMinter), 10000);
}

async function main() {
  const state = loadState()
  if (!state.bonusPerkMinter) {
    console.error("Not instantiated")
    return
  }

  const bonusPerkMinter = <BonusPerkMinter>await ethers.getContractAt('BonusPerkMinter', state.bonusPerkMinter);

  await start(bonusPerkMinter);
}

main();
