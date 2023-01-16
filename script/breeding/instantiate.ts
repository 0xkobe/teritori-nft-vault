
import * as fs from "fs";
import { nftImplementationAddress } from "./constants";
import { nftStorageAPIKey } from "./data/secrets";
import path from "path"
import { NFTStorage, File } from 'nft.storage'
import mime from "mime"
import { ethers } from "hardhat"
import { dataDir, getMaxSupply, getURL, loadState, saveState } from "./lib";
import { Breeding__factory } from '../../types'

async function Instantiate() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const state = loadState()
  if (state.breedingContract || state.nftContract) {
    console.error("Already instantiated")
    return
  }

  const metadataFile = path.join(dataDir, "collection.json")
  const collectionInfo: {
    name: string,
    parentContractAddr: string,
    childNftName: string,
    childNftSymbol: string,
    childNftDescription: string,
    childNftDiscord: string,
    childNftTwitter: string,
    childNftWebsite: string,
    childNftImage: string,
    childNftBanner: string,
    breedCountLimit: number,
    breedDuration: number,
    breedPrice: string,
    breedToken: string,
  } = JSON.parse(fs.readFileSync(metadataFile, { encoding: "utf-8" }))

  const nftstorage = new NFTStorage({ token: nftStorageAPIKey })

  let imageURL = collectionInfo.childNftImage;
  if (!collectionInfo.childNftImage.includes("ipfs")) {
    const imageFile = path.join(dataDir, collectionInfo.childNftImage)
    const imageContent = fs.readFileSync(imageFile)
    const imageType = mime.getType(imageFile)
    const imageFileName = path.basename(imageFile)
    const imageDirCid = await nftstorage.storeDirectory([new File([imageContent], imageFileName, { type: imageType })])
    imageURL = getURL(`ipfs://${imageDirCid}/${imageFileName}`)
  }

  let bannerURL = collectionInfo.childNftBanner;
  if (!collectionInfo.childNftBanner.includes("ipfs")) {
    const bannerFile = path.join(dataDir, collectionInfo.childNftBanner)
    const bannerContent = fs.readFileSync(bannerFile)
    const bannerType = mime.getType(bannerFile)
    const bannerFileName = path.basename(bannerFile)
    const bannerDirCid = await nftstorage.storeDirectory([new File([bannerContent], bannerFileName, { type: bannerType })])
    bannerURL = getURL(`ipfs://${bannerDirCid}/${bannerFileName}`)
  }

  const collectionMetadata = {
    name: collectionInfo.childNftName,
    image: imageURL,
    banner: bannerURL,
    description: collectionInfo.childNftDescription,
    discord: collectionInfo.childNftDiscord,
    twitter: collectionInfo.childNftTwitter,
    website: collectionInfo.childNftWebsite,
  }

  const maxSupply = getMaxSupply()
  console.log("Max supply:", maxSupply)

  const content = JSON.stringify(collectionMetadata, null, 2)
  const type = "application/json"
  const fileName = "collection.json"
  const dirCid = await nftstorage.storeDirectory([new File([content], fileName, { type })])
  const metadataURL = `ipfs://${dirCid}/${fileName}`

  console.log("Metadata URL:", metadataURL)

  const Breeding = <Breeding__factory>await ethers.getContractFactory('Breeding');
  const breeding = await Breeding.deploy(
    collectionInfo.parentContractAddr,
    collectionInfo.childNftName,
    collectionInfo.childNftSymbol,
    '',
    nftImplementationAddress,
    {
      startTime: 0,
      countLimit: collectionInfo.breedCountLimit,
      duration: collectionInfo.breedDuration,
      priceAmount: collectionInfo.breedPrice,
      currency: collectionInfo.breedToken,
    },
    {
      currentSupply: 0,
      maxSupply: maxSupply,
      baseUrl: metadataURL
    }
  );
  await breeding.deployed();

  console.log("Breeding contract address:", breeding.address);
  console.log("Nft contract address:", await breeding.childCollection());

  state.breedingContract = breeding.address;
  state.nftContract = await breeding.childCollection();

  saveState(state)
}

Instantiate();
