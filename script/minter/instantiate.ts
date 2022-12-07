
import * as fs from "fs";
import { nftImplementationAddress } from "./constants";
import { nftStorageAPIKey } from "./data/secrets";
import path from "path"
import { NFTStorage, File } from 'nft.storage'
import mime from "mime"
import { ethers } from "hardhat"
import { dataDir, getMaxSupply, loadState, saveState } from "./lib";
import { TeritoriMinter__factory } from '../../types'

async function Instantiate() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const state = loadState()
  if (state.minterContract || state.nftContract) {
    console.error("Already instantiated")
    return
  }

  const metadataFile = path.join(dataDir, "collection.json")
  const collectionInfo = JSON.parse(fs.readFileSync(metadataFile, { encoding: "utf-8" }))

  // TODO: validate collection metadata

  const nftstorage = new NFTStorage({ token: nftStorageAPIKey })

  const imageFile = path.join(dataDir, collectionInfo.image)
  const imageContent = fs.readFileSync(imageFile)
  const imageType = mime.getType(imageFile)
  const imageFileName = path.basename(imageFile)
  const imageDirCid = await nftstorage.storeDirectory([new File([imageContent], imageFileName, { type: imageType })])
  const imageURL = `ipfs://${imageDirCid}/${imageFileName}`

  const bannerFile = path.join(dataDir, collectionInfo.banner)
  const bannerContent = fs.readFileSync(bannerFile)
  const bannerType = mime.getType(bannerFile)
  const bannerFileName = path.basename(bannerFile)
  const bannerDirCid = await nftstorage.storeDirectory([new File([bannerContent], bannerFileName, { type: bannerType })])
  const bannerURL = `ipfs://${bannerDirCid}/${bannerFileName}`

  const collectionMetadata = {
    name: collectionInfo.name,
    image: imageURL,
    banner: bannerURL,
    description: collectionInfo.description,
    discord: collectionInfo.discord,
    twitter: collectionInfo.twitter,
    website: collectionInfo.website,
  }

  const maxSupply = getMaxSupply()
  console.log("Max supply:", maxSupply)

  const content = JSON.stringify(collectionMetadata, null, 2)
  const type = "application/json"
  const fileName = "collection.json"
  const dirCid = await nftstorage.storeDirectory([new File([content], fileName, { type })])
  const metadataURL = `ipfs://${dirCid}/${fileName}`

  console.log("Metadata URL:", metadataURL)

  const TeritoriMinter = <TeritoriMinter__factory>await ethers.getContractFactory('TeritoriMinter');
  const minter = await TeritoriMinter.deploy(
    collectionInfo.name,
    collectionInfo.symbol,
    nftImplementationAddress,
    deployer.address
  );
  await minter.deployed();

  console.log("Minter contract address:", minter.address);
  console.log("Nft contract address:", await minter.nft());

  state.minterContract = minter.address
  state.nftContract = await minter.nft()
  saveState(state)

  await (await minter.setConfig(
    {
      maxSupply: maxSupply,
      mintToken: collectionInfo.mintToken,
      mintStartTime: collectionInfo.mintStartTime,
      whitelistCount: collectionInfo.whitelists.length,
      publicMintPrice: collectionInfo.publicMintPrice,
      publicMintMax: collectionInfo.publicMintMax || maxSupply,
      baseUrl: metadataURL
    }
  )).wait();
  console.log("Minter configuration set");

  await (await minter.setWhitelistConfig(
    collectionInfo.whitelists.map((_: any, index: any) => index),
    collectionInfo.whitelists.map((item: any) => item.config),
  )).wait();
  console.log("Minter whitelist phases set");

  for (let i = 0; i < collectionInfo.whitelists.length; i++) {
    await (await minter.setWhitelist(
      i, collectionInfo.whitelists[i].addresses, true
    )).wait();
    console.log(`Whitelist phase ${i} Addresses set`)
  }
}

Instantiate();
