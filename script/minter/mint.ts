import tokens from './data/tokens.json'
import collectionInfo from "./data/collection.json";
import fs from 'fs'
import path from "path"
import { metadataDir, dataDir, loadState } from "./lib";
import { TeritoriMinter } from '../../types';
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

async function tryMint(minter: TeritoriMinter) {
  console.log("Checking new mint request...", new Date());

  const current_supply = await minter.currentSupply();
  console.log("current_supply = ", current_supply.toString());
  const token_requests_count = await minter.tokenRequestsCount();
  console.log("token_requests_count = ", token_requests_count.toString());

  if (token_requests_count == current_supply) {
    return;
  }

  const batch_count = 20;
  for (let i = current_supply.toNumber(); i < token_requests_count.toNumber();) {
    const count = Math.min(batch_count, token_requests_count.toNumber() - i);
    i += count;

    const items = await getRandomItems(count)

    console.log("Will try mint", items.map(item => item.token_id).join(', '))

    try {
      console.log(items.map(item => ({
        tokenId: item.token_id,
        royaltyPercentage: collectionInfo.royaltyPercentage,
        royaltyReceiver: collectionInfo.royaltyPaymentAddress,
        tokenUri: "",
        extension: {
          name: item.name,
          description: item.description,
          image: item.image,
          external_url: item.external_url,
          attributes: item.attributes,
        }
      })))
      const tx = await (await minter.mintWithMetadata(
        items.map(item => ({
          tokenId: item.token_id,
          royaltyPercentage: collectionInfo.royaltyPercentage,
          royaltyReceiver: collectionInfo.royaltyPaymentAddress,
          tokenUri: "",
          extension: {
            name: item.name,
            description: item.description,
            image: item.image,
            external_url: item.external_url || "",
            attributes: item.attributes,
          }
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

async function start(minter: TeritoriMinter) {
  await tryMint(minter);

  setTimeout(() => start(minter), 10000);
}

async function main() {
  const state = loadState()
  if (!state.minterContract || !state.nftContract) {
    console.error("Not instantiated")
    return
  }

  const minter = <TeritoriMinter>await ethers.getContractAt('TeritoriMinter', state.minterContract);

  await start(minter);
}

main();
