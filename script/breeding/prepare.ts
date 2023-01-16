
import * as fs from "fs";
import path from "path"
import { File, NFTStorage } from "nft.storage"
import { nftStorageAPIKey } from "./data/secrets";
import mime from 'mime'
import { getMaxSupply, metadataDir, tokensFile } from "./lib";

// TODO: parallelize

const internalImageFileName = "nft.png"

async function prepareToken(i: number, nftstorage: NFTStorage, maxSupply: number) {
  const metadata = JSON.parse(fs.readFileSync(path.join(metadataDir, `${i}.json`)).toString())
  if (!metadata.image.toString().includes('ipfs')) {

    const imagePath = path.join(metadataDir, metadata.image)
    const imageContent = fs.readFileSync(imagePath)
    const imageType = mime.getType(imagePath)
    const dirCid = await nftstorage.storeDirectory([new File([imageContent], internalImageFileName, { type: imageType })])
    const imageURL = `ipfs://${dirCid}/${internalImageFileName}`

    console.log(`${i}/${maxSupply} ${imageURL}`)

    fs.writeFileSync(path.join(metadataDir, `${i}.json`), JSON.stringify({
      ...metadata,
      image: imageURL,
    }, undefined, 2))
  }
}

async function prepare() {
  // TODO: validate files and metadata

  const maxSupply = getMaxSupply()
  console.log("Max supply:", maxSupply)

  const nftstorage = new NFTStorage({ token: nftStorageAPIKey })

  const tokens = []
  const batch_count = 10;
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
}

prepare();
