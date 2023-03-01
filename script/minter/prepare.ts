
import * as fs from "fs";
import path from "path"
import { File, NFTStorage } from "nft.storage"
import { nftStorageAPIKey } from "./data/secrets";
import mime from 'mime'
import { getMaxSupply, getURL, metadataDir, tokensFile } from "./lib";

// TODO: parallelize

const internalImageFileName = "nft.png"

async function prepareToken(i: number, nftstorage: NFTStorage, maxSupply: number) {
  let metadata = JSON.parse(fs.readFileSync(path.join(metadataDir, `${i}.json`)).toString())
  if (!metadata.image.toString().includes('ipfs')) {
    // const imagePath = path.join(metadataDir, metadata.image)
    const imagePath = path.join(metadataDir, `${i}.png`)
    const imageContent = fs.readFileSync(imagePath)
    const imageType = mime.getType(imagePath)
    const dirCid = await nftstorage.storeDirectory([new File([imageContent], internalImageFileName, { type: imageType })])
    const imageURL = `ipfs://${dirCid}/${internalImageFileName}`

    console.log(`${i}/${maxSupply} ${imageURL}`)

    metadata = {
      name: metadata.name,
      description: metadata.description,
      external_url: metadata.external_url,
      animation_url: metadata.animation_url,
      attributes: metadata.attributes,
      image: getURL(imageURL),
    };
  }

  // if (!metadata.tokenURI) {
  //   const content = JSON.stringify(metadata, null, 2)
  //   const type = "application/json"
  //   const dirCid = await nftstorage.storeBlob(new File([content], { type }))
  //   const tokenURI = `ipfs://${dirCid}`

  //   console.log(`${i}/${maxSupply} ${tokenURI}`)

  //   metadata = {
  //     ...metadata,
  //     tokenURI: getURL(tokenURI),
  //   };
  // }

  fs.writeFileSync(path.join(metadataDir, `${i}.json`), JSON.stringify(metadata, undefined, 2))
}

async function prepare() {
  // TODO: validate files and metadata

  const maxSupply = getMaxSupply()
  console.log("Max supply:", maxSupply)

  const nftstorage = new NFTStorage({ token: nftStorageAPIKey })

  const tokens: number[] = []
  const batch_count = 1;
  for (let i = 1; i <= maxSupply; i += batch_count) {
    try {
      await Promise.all(
        new Array(batch_count).fill(0).map((_, index) => prepareToken(i + index, nftstorage, maxSupply))
      )

      tokens.push(...new Array(batch_count).fill(0).map((_, index) => i + index))
      fs.writeFileSync(tokensFile, JSON.stringify(tokens, undefined, 2))

    } catch (err) {
      console.error(i, err)
      break;
    }
  }

  fs.writeFileSync(tokensFile, JSON.stringify(tokens, undefined, 2))

  const files = [];
  for (let i = 1; i <= maxSupply; i++) {
    const jsonPath = path.join(metadataDir, `${i}.json`)
    const jsonContent = fs.readFileSync(jsonPath)
    const type = "application/json"
    files.push(new File([jsonContent], `${i}`, { type }));
  }
  const dirCid = await nftstorage.storeDirectory(files);
  const baseURI = getURL(`ipfs://${dirCid}/`)
  console.log("base URL:", baseURI)
}

prepare();
