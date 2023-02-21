/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    inputs: [],
    name: "cooldownPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserStakeList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
    ],
    name: "isSupportedCollection",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nftStakeIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "nftStakeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct Staking.StakeInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
    ],
    name: "setCooldownPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "bool",
        name: "supported",
        type: "bool",
      },
    ],
    name: "setSupportedCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "stakeDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakeList",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeListLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "stringToUint",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasError",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "supportedCollectionAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedCollectionLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "supportedCollections",
    outputs: [
      {
        internalType: "address[]",
        name: "collections",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userStakeList",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611caf380380611caf83398101604081905261002f9161009d565b6100383361004d565b6000805460ff60a01b191690556001556100b5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ae578081fd5b5051919050565b611beb806100c46000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80635c975abb116100e35780638da5cb5b1161008c578063c2a672e011610066578063c2a672e01461046b578063d6fa55061461047e578063f2fde38b1461049157600080fd5b80638da5cb5b146104345780639a95231114610445578063adc9772e1461045857600080fd5b806380ea3de1116100bd57806380ea3de1146103f95780638178c4df1461040c5780638456cb591461042c57600080fd5b80635c975abb1461030b5780636ffbc9fe1461031d578063715018a6146103f157600080fd5b80631bd951551161014557806331a547581161011f57806331a547581461028c5780633f4ba83a146102955780634c86259e1461029d57600080fd5b80631bd95155146102165780631e1a3d351461023e578063251f2e8a1461026957600080fd5b806307f461d01161017657806307f461d0146101b65780630bed494c146101d65780630e1fb0c1146101eb57600080fd5b8063014b5c101461019257806304646a49146101ad575b600080fd5b61019a6104a4565b6040519081526020015b60405180910390f35b61019a60015481565b6101c96101c4366004611769565b6104b5565b6040516101a491906119f3565b6101e96101e4366004611783565b610521565b005b61019a6101f93660046117bd565b600660209081526000928352604080842090915290825290205481565b6102296102243660046117e6565b6105a1565b604080519283529015156020830152016101a4565b61025161024c366004611972565b610688565b6040516001600160a01b0390911681526020016101a4565b61027c610277366004611769565b61069b565b60405190151581526020016101a4565b61019a60045481565b6101e96106a8565b6102df6102ab366004611972565b60056020526000908152604090208054600182015460028301546003909301546001600160a01b0390921692909160ff1684565b604080516001600160a01b039095168552602085019390935291830152151560608201526080016101a4565b600054600160a01b900460ff1661027c565b6103b361032b3660046117bd565b60408051608080820183526000808352602080840182905283850182905260609384018290526001600160a01b0396871682526006815284822095825294855283812054815260058552839020835191820184528054909516815260018501549381019390935260028401549183019190915260039092015460ff1615159181019190915290565b6040516101a4919081516001600160a01b03168152602080830151908201526040808301519082015260609182015115159181019190915260800190565b6101e9610765565b6101e9610407366004611972565b6107c9565b61041f61041a366004611972565b610828565b6040516101a491906119a6565b6101e96108f0565b6000546001600160a01b0316610251565b61019a6104533660046117bd565b61099f565b6101e96104663660046117bd565b610b46565b6101e96104793660046117bd565b610e5a565b61019a61048c3660046117bd565b611129565b6101e961049f366004611769565b61115a565b60006104b0600261123c565b905090565b6001600160a01b03811660009081526007602090815260409182902080548351818402810184019094528084526060939283018282801561051557602002820191906000526020600020905b815481526020019060010190808311610501575b50505050509050919050565b6000546001600160a01b031633146105805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b801561059657610591600283611246565b505050565b610591600283611262565b60008082815b81518110156106815760308282815181106105d257634e487b7160e01b600052603260045260246000fd5b016020015160f81c108015906106105750603982828151811061060557634e487b7160e01b600052603260045260246000fd5b016020015160f81c11155b1561066857603082828151811061063757634e487b7160e01b600052603260045260246000fd5b0160200151610649919060f81c611b1b565b60ff1661065785600a611ae5565b6106619190611aad565b9350610671565b60019250610681565b61067a81611b6e565b90506105a7565b5050915091565b6000610695600283611277565b92915050565b6000610695600283611283565b6000546001600160a01b031633146107025760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600054600160a01b900460ff1661075b5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610577565b6107636112a5565b565b6000546001600160a01b031633146107bf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b610763600061134b565b6000546001600160a01b031633146108235760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600155565b60606000610836600261123c565b90508067ffffffffffffffff81111561085f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610888578160200160208202803683370190505b50915060005b818110156108e9576108a1600285611277565b8382815181106108c157634e487b7160e01b600052603260045260246000fd5b6001600160a01b03909216602092830291909101909101526108e281611b6e565b905061088e565b5050919050565b6000546001600160a01b0316331461094a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600054600160a01b900460ff16156109975760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b6107636113a8565b6040517f1f8bc79000000000000000000000000000000000000000000000000000000000815260048101829052600090819081906001600160a01b03861690631f8bc7909060240160006040518083038186803b1580156109ff57600080fd5b505afa158015610a13573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3b919081019061185a565b905060005b8160a0015151811015610b245760008260a001518281518110610a7357634e487b7160e01b600052603260045260246000fd5b60200260200101519050604051602001610ab0907f5374616d696e6100000000000000000000000000000000000000000000000000815260070190565b60408051601f1981840301815290829052805160209182012083519092610ad7920161198a565b604051602081830303815290604052805190602001201415610b1357600080610b0383602001516105a1565b9150915080610b10578195505b50505b50610b1d81611b6e565b9050610a40565b506008610b3383610e10611ae5565b610b3d9190611ac5565b95945050505050565b600054600160a01b900460ff1615610b935760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b610b9c8261069b565b610be85760405162461bcd60e51b815260206004820152601860248201527f6e6f7420737570706f7274656420636f6c6c656374696f6e00000000000000006044820152606401610577565b3360009081526007602052604081205415610c58573360009081526007602052604081208054610c1a90600190611b04565b81548110610c3857634e487b7160e01b600052603260045260246000fd5b600091825260208083209091015482526005905260409020600101549150505b4260015482610c679190611aad565b1115610cb55760405162461bcd60e51b815260206004820152601360248201527f7761697420756e74696c20636f6f6c646f776e000000000000000000000000006044820152606401610577565b604051632142170760e11b8152336004820152306024820152604481018390526001600160a01b038416906342842e0e90606401600060405180830381600087803b158015610d0357600080fd5b505af1158015610d17573d6000803e3d6000fd5b505050506000610d27848461099f565b9050426000610d368383611aad565b600480549192506000610d4883611b6e565b9091555050604080516080808201835233808352602080840187815284860187815260006060808801828152600480548452600587528a842099518a5473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03918216178b5595516001808c0191909155945160028b015590516003909901805460ff1916991515999099179098559654928e16808252600685528882208e8352855288822084905585825260078552888220805493840181558252908490209091019190915585519283529082015292830188905290820184905281018290527f4b22ccaaeb4846ec98072623a51a9070bf1f01c75ac1f8119035f373df852a0c9060a00160405180910390a1505050505050565b600054600160a01b900460ff1615610ea75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b610eb08261069b565b610efc5760405162461bcd60e51b815260206004820152601860248201527f6e6f7420737570706f7274656420636f6c6c656374696f6e00000000000000006044820152606401610577565b6001600160a01b0380831660009081526006602090815260408083208584528252808320548084526005909252909120549091163314610f7e5760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a656400000000000000000000000000000000000000006044820152606401610577565b60008181526005602052604090206003015460ff16610fdf5760405162461bcd60e51b815260206004820152601160248201527f616c72656164792077697468647261776e0000000000000000000000000000006044820152606401610577565b6000818152600560205260409020600201544211156110405760405162461bcd60e51b815260206004820152601460248201527f7761697420756e74696c207374616b6520656e640000000000000000000000006044820152606401610577565b6000818152600560209081526040808320600301805460ff191660011790556001600160a01b03861680845260068352818420868552909252808320929092559051632142170760e11b8152306004820152336024820152604481018490526342842e0e90606401600060405180830381600087803b1580156110c257600080fd5b505af11580156110d6573d6000803e3d6000fd5b5050604080513381526001600160a01b03871660208201529081018590527f390b1276974b9463e5d66ab10df69b6f3d7b930eb066a0e66df327edd2cc811c9250606001905060405180910390a1505050565b6007602052816000526040600020818154811061114557600080fd5b90600052602060002001600091509150505481565b6000546001600160a01b031633146111b45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b6001600160a01b0381166112305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610577565b6112398161134b565b50565b6000610695825490565b600061125b836001600160a01b038416611430565b9392505050565b600061125b836001600160a01b03841661147f565b600061125b838361159c565b6001600160a01b0381166000908152600183016020526040812054151561125b565b600054600160a01b900460ff166112fe5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610577565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff16156113f55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861132e3390565b600081815260018301602052604081205461147757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610695565b506000610695565b600081815260018301602052604081205480156115925760006114a3600183611b04565b85549091506000906114b790600190611b04565b90508181146115385760008660000182815481106114e557634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061151657634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061155757634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610695565b6000915050610695565b60008260000182815481106115c157634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b80356001600160a01b03811681146115eb57600080fd5b919050565b600082601f830112611600578081fd5b8151602067ffffffffffffffff8083111561161d5761161d611b9f565b8260051b61162c838201611a54565b8481528381019087850183890186018a1015611646578788fd5b8793505b8684101561168357805185811115611660578889fd5b61166e8b88838d01016116e0565b8452506001939093019291850191850161164a565b5098975050505050505050565b600082601f8301126116a0578081fd5b81516116b36116ae82611a85565b611a54565b8181528460208386010111156116c7578283fd5b6116d8826020830160208701611b3e565b949350505050565b6000604082840312156116f1578081fd5b6040516040810167ffffffffffffffff828210818311171561171557611715611b9f565b81604052829350845191508082111561172d57600080fd5b61173986838701611690565b8352602085015191508082111561174f57600080fd5b5061175c85828601611690565b6020830152505092915050565b60006020828403121561177a578081fd5b61125b826115d4565b60008060408385031215611795578081fd5b61179e836115d4565b9150602083013580151581146117b2578182fd5b809150509250929050565b600080604083850312156117cf578182fd5b6117d8836115d4565b946020939093013593505050565b6000602082840312156117f7578081fd5b813567ffffffffffffffff81111561180d578182fd5b8201601f8101841361181d578182fd5b803561182b6116ae82611a85565b81815285602083850101111561183f578384fd5b81602084016020830137908101602001929092525092915050565b60006020828403121561186b578081fd5b815167ffffffffffffffff80821115611882578283fd5b9083019060c08286031215611895578283fd5b61189d611a2b565b8251828111156118ab578485fd5b6118b787828601611690565b8252506020830151828111156118cb578485fd5b6118d787828601611690565b6020830152506040830151828111156118ee578485fd5b6118fa87828601611690565b604083015250606083015182811115611911578485fd5b61191d87828601611690565b606083015250608083015182811115611934578485fd5b61194087828601611690565b60808301525060a083015182811115611957578485fd5b611963878286016115f0565b60a08301525095945050505050565b600060208284031215611983578081fd5b5035919050565b6000825161199c818460208701611b3e565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156119e75783516001600160a01b0316835292840192918401916001016119c2565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156119e757835183529284019291840191600101611a0f565b60405160c0810167ffffffffffffffff81118282101715611a4e57611a4e611b9f565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a7d57611a7d611b9f565b604052919050565b600067ffffffffffffffff821115611a9f57611a9f611b9f565b50601f01601f191660200190565b60008219821115611ac057611ac0611b89565b500190565b600082611ae057634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611aff57611aff611b89565b500290565b600082821015611b1657611b16611b89565b500390565b600060ff821660ff841680821015611b3557611b35611b89565b90039392505050565b60005b83811015611b59578181015183820152602001611b41565b83811115611b68576000848401525b50505050565b6000600019821415611b8257611b82611b89565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c88539dedcfeabe04297549a4ec86ad38947178b1e8dc27e406fc02b105e64b664736f6c63430008040033";

export class Staking__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _cooldownPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(_cooldownPeriod, overrides || {}) as Promise<Staking>;
  }
  getDeployTransaction(
    _cooldownPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cooldownPeriod, overrides || {});
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
