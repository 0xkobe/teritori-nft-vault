import tokens from './data/tokens.json'
import collectionInfo from "./data/collection.json";
import fs from 'fs'
import path from "path"
import { metadataDir, dataDir, loadState } from "./lib";
import { Breeding } from '../../types';
import { ethers } from 'hardhat';

const mintedFile = path.join(dataDir, "minted.json")

const loadMintedTokens = (): any[] => {
  if (!fs.existsSync(mintedFile)) {
    return []
  }
  return JSON.parse(fs.readFileSync(mintedFile, { encoding: "utf-8" }))
}

async function getRandomItems(count: number) {
  const result: any[] = []
  const mintedTokens = loadMintedTokens();
  let remainings = tokens.filter(item => mintedTokens.findIndex(token => token.toString() == item.toString()) == -1);
  while (result.length < count) {
    const index = Math.floor(Math.random() * remainings.length);
    const i = remainings[index];
    const tokenMetadata = JSON.parse(fs.readFileSync(path.join(metadataDir, `${i}.json`), { encoding: "utf-8" }))
    result.push({
      token_id: i.toString(),
      ...tokenMetadata
    })
    remainings = remainings.filter((a) => a != i)
  }
  return result
}

async function addToMinted(item: any) {
  const mintedTokens = loadMintedTokens();
  mintedTokens.push(item)
  fs.writeFileSync(mintedFile, JSON.stringify(mintedTokens, undefined, 2))
}

async function tryMint(breeding: Breeding) {
  console.log("Checking new mint request...", new Date());

  const currentSupply = (await breeding.childCollectionConfig()).currentSupply;
  console.log("currentSupply = ", currentSupply.toString());
  const breedRequestsCount = await breeding.breedRequestsCount();
  console.log("breedRequestsCount = ", breedRequestsCount.toString());

  if (breedRequestsCount == currentSupply) {
    return;
  }

  const batch_count = 20;
  for (let i = currentSupply.toNumber(); i < breedRequestsCount.toNumber();) {
    const count = Math.min(batch_count, breedRequestsCount.toNumber() - i);
    i += count;

    const items = await getRandomItems(count)

    console.log("Will try mint", items.map(item => item.token_id).join(', '))

    try {
      console.log(items.map(item => ({
        tokenId: item.token_id,
        royaltyPercentage: collectionInfo.royaltyPercentage,
        royaltyReceiver: collectionInfo.royaltyPaymentAddress,
        tokenUri: item.tokenURI || "",
        // extension: {
        //   name: item.name,
        //   description: item.description,
        //   image: item.image,
        //   external_url: item.external_url,
        //   attributes: item.attributes,
        // }
      })))
      const tx = await (await breeding.mint(
        items.map(item => ({
          tokenId: item.token_id,
          royaltyPercentage: collectionInfo.royaltyPercentage,
          royaltyReceiver: collectionInfo.royaltyPaymentAddress,
          tokenUri: item.tokenURI || "",
        }))
      )).wait();

      for (let j = 0; j < items.length; j++) {
        await addToMinted(items[j].token_id);
      }
      console.log("Minted token in", tx.transactionHash)
    } catch (e) {
      console.error("Tx delivery failed:", e);
      return;
    }
  }
}

async function start(breeding: Breeding) {
  await tryMint(breeding);

  setTimeout(() => start(breeding), 10000);
}

async function main() {
  const state = loadState()
  if (!state.breedingContract || !state.nftContract) {
    console.error("Not instantiated")
    return
  }

  const breeding = <Breeding>await ethers.getContractAt('Breeding', state.breedingContract);

  await start(breeding);
}

main();
