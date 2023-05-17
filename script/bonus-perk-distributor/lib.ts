import fs from "fs"
import path from "path"

export const dataDir = path.join(__dirname, "data")
export const tokensFile = path.join(dataDir, "tokens.json")

const stateFile = path.join(dataDir, "state.json")

export interface State {
  bonusPerkMinter?: string
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
