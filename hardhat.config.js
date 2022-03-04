require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3"); //For openzeppelin
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("hardhat-abi-exporter");
require("solidity-coverage");
require("@typechain/hardhat");

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    showTimeSpent: true,
    currency: "USD",
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      // url: "https://ftmrpc.ultimatenodes.io/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 250,
    },
    "fantom-testnet": {
      url: "https://rpc.testnet.fantom.network",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 4002,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 200000,
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};
