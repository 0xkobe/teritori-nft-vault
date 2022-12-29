import fs from "fs"
import path from "path"

export const dataDir = path.join(__dirname, "data")
export const metadataDir = path.join(dataDir, "metadata")
export const tokensFile = path.join(dataDir, "tokens.json")

const stateFile = path.join(dataDir, "state.json")

export interface State {
  minterContract?: string
  nftContract?: string
}

export const loadState = (): State => {
  if (!fs.existsSync(stateFile)) {
    return {}
  }
  return JSON.parse(fs.readFileSync(stateFile, { encoding: "utf-8" }))
}

export const saveState = (state: State) => {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2))
}

export const getMaxSupply = () => {
  const files = fs.readdirSync(metadataDir).filter(f => f.endsWith(".json"))
  return files.length
}

export const getURL = (url: string) => {
  const res = 'https://' + url.replace('ipfs://', '').replace('/', '.ipfs.nftstorage.link/');
  if (!res.includes('ipfs.nftstorage.link')) {
    return res + '.ipfs.nftstorage.link'
  }
  return res;
}
