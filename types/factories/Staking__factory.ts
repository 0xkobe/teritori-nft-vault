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
        name: "_cooldownInDays",
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
    name: "cooldownInDays",
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
        name: "_cooldownInDays",
        type: "uint256",
      },
    ],
    name: "setCooldownInDays",
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
  "0x608060405234801561001057600080fd5b50604051611cd6380380611cd683398101604081905261002f9161009d565b6100383361004d565b6000805460ff60a01b191690556001556100b5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ae578081fd5b5051919050565b611c12806100c46000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80634ed4c168116100e35780638da5cb5b1161008c578063c2a672e011610066578063c2a672e01461046b578063d6fa55061461047e578063f2fde38b1461049157600080fd5b80638da5cb5b146104345780639a95231114610445578063adc9772e1461045857600080fd5b8063715018a6116100bd578063715018a6146104045780638178c4df1461040c5780638456cb591461042c57600080fd5b80634ed4c1681461030b5780635c975abb1461031e5780636ffbc9fe1461033057600080fd5b80631e1a3d351161014557806331a547581161011f57806331a547581461028c5780633f4ba83a146102955780634c86259e1461029d57600080fd5b80631e1a3d3514610235578063249cbac314610260578063251f2e8a1461026957600080fd5b80630bed494c116101765780630bed494c146101cd5780630e1fb0c1146101e25780631bd951551461020d57600080fd5b8063014b5c101461019257806307f461d0146101ad575b600080fd5b61019a6104a4565b6040519081526020015b60405180910390f35b6101c06101bb366004611790565b6104b5565b6040516101a49190611a1a565b6101e06101db3660046117aa565b610521565b005b61019a6101f03660046117e4565b600660209081526000928352604080842090915290825290205481565b61022061021b36600461180d565b6105a1565b604080519283529015156020830152016101a4565b610248610243366004611999565b61068a565b6040516001600160a01b0390911681526020016101a4565b61019a60015481565b61027c610277366004611790565b61069d565b60405190151581526020016101a4565b61019a60045481565b6101e06106aa565b6102df6102ab366004611999565b60056020526000908152604090208054600182015460028301546003909301546001600160a01b0390921692909160ff1684565b604080516001600160a01b039095168552602085019390935291830152151560608201526080016101a4565b6101e0610319366004611999565b610767565b600054600160a01b900460ff1661027c565b6103c661033e3660046117e4565b60408051608080820183526000808352602080840182905283850182905260609384018290526001600160a01b0396871682526006815284822095825294855283812054815260058552839020835191820184528054909516815260018501549381019390935260028401549183019190915260039092015460ff1615159181019190915290565b6040516101a4919081516001600160a01b03168152602080830151908201526040808301519082015260609182015115159181019190915260800190565b6101e06107c6565b61041f61041a366004611999565b61082a565b6040516101a491906119cd565b6101e06108f4565b6000546001600160a01b0316610248565b61019a6104533660046117e4565b6109a3565b6101e06104663660046117e4565b610b4c565b6101e06104793660046117e4565b610e81565b61019a61048c3660046117e4565b611150565b6101e061049f366004611790565b611181565b60006104b06002611263565b905090565b6001600160a01b03811660009081526007602090815260409182902080548351818402810184019094528084526060939283018282801561051557602002820191906000526020600020905b815481526020019060010190808311610501575b50505050509050919050565b6000546001600160a01b031633146105805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b80156105965761059160028361126d565b505050565b610591600283611289565b60008082815b81518110156106835760308282815181106105d257634e487b7160e01b600052603260045260246000fd5b016020015160f81c108015906106105750603982828151811061060557634e487b7160e01b600052603260045260246000fd5b016020015160f81c11155b1561066857603082828151811061063757634e487b7160e01b600052603260045260246000fd5b0160200151610649919060f81c611b42565b60ff1661065785600a611b0c565b6106619190611ad4565b9350610671565b60019250610683565b8061067b81611b95565b9150506105a7565b5050915091565b600061069760028361129e565b92915050565b60006106976002836112aa565b6000546001600160a01b031633146107045760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600054600160a01b900460ff1661075d5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610577565b6107656112cc565b565b6000546001600160a01b031633146107c15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600155565b6000546001600160a01b031633146108205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b6107656000611372565b606060006108386002611263565b90508067ffffffffffffffff81111561086157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561088a578160200160208202803683370190505b50915060005b818110156108ed576108a360028561129e565b8382815181106108c357634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152806108e581611b95565b915050610890565b5050919050565b6000546001600160a01b0316331461094e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b600054600160a01b900460ff161561099b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b6107656113cf565b6040517f1f8bc79000000000000000000000000000000000000000000000000000000000815260048101829052600090819081906001600160a01b03861690631f8bc7909060240160006040518083038186803b158015610a0357600080fd5b505afa158015610a17573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3f9190810190611881565b905060005b8160a0015151811015610b2a5760008260a001518281518110610a7757634e487b7160e01b600052603260045260246000fd5b60200260200101519050604051602001610ab4907f5374616d696e6100000000000000000000000000000000000000000000000000815260070190565b60408051601f1981840301815290829052805160209182012083519092610adb92016119b1565b604051602081830303815290604052805190602001201415610b1757600080610b0783602001516105a1565b9150915080610b14578195505b50505b5080610b2281611b95565b915050610a44565b506008610b3983610e10611b0c565b610b439190611aec565b95945050505050565b600054600160a01b900460ff1615610b995760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b610ba28261069d565b610bee5760405162461bcd60e51b815260206004820152601860248201527f6e6f7420737570706f7274656420636f6c6c656374696f6e00000000000000006044820152606401610577565b3360009081526007602052604081205415610c74573360009081526007602052604081208054610c2090600190611b2b565b81548110610c3e57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050620151806005600083815260200190815260200160002060010154610c709190611aec565b9150505b610c816201518042611aec565b600154610c8e9083611ad4565b1115610cdc5760405162461bcd60e51b815260206004820152601360248201527f7761697420756e74696c20636f6f6c646f776e000000000000000000000000006044820152606401610577565b604051632142170760e11b8152336004820152306024820152604481018390526001600160a01b038416906342842e0e90606401600060405180830381600087803b158015610d2a57600080fd5b505af1158015610d3e573d6000803e3d6000fd5b505050506000610d4e84846109a3565b9050426000610d5d8383611ad4565b600480549192506000610d6f83611b95565b9091555050604080516080808201835233808352602080840187815284860187815260006060808801828152600480548452600587528a842099518a5473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03918216178b5595516001808c0191909155945160028b015590516003909901805460ff1916991515999099179098559654928e16808252600685528882208e8352855288822084905585825260078552888220805493840181558252908490209091019190915585519283529082015292830188905290820184905281018290527f4b22ccaaeb4846ec98072623a51a9070bf1f01c75ac1f8119035f373df852a0c9060a00160405180910390a1505050505050565b600054600160a01b900460ff1615610ece5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b610ed78261069d565b610f235760405162461bcd60e51b815260206004820152601860248201527f6e6f7420737570706f7274656420636f6c6c656374696f6e00000000000000006044820152606401610577565b6001600160a01b0380831660009081526006602090815260408083208584528252808320548084526005909252909120549091163314610fa55760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a656400000000000000000000000000000000000000006044820152606401610577565b60008181526005602052604090206003015460ff166110065760405162461bcd60e51b815260206004820152601160248201527f616c72656164792077697468647261776e0000000000000000000000000000006044820152606401610577565b6000818152600560205260409020600201544211156110675760405162461bcd60e51b815260206004820152601460248201527f7761697420756e74696c207374616b6520656e640000000000000000000000006044820152606401610577565b6000818152600560209081526040808320600301805460ff191660011790556001600160a01b03861680845260068352818420868552909252808320929092559051632142170760e11b8152306004820152336024820152604481018490526342842e0e90606401600060405180830381600087803b1580156110e957600080fd5b505af11580156110fd573d6000803e3d6000fd5b5050604080513381526001600160a01b03871660208201529081018590527f390b1276974b9463e5d66ab10df69b6f3d7b930eb066a0e66df327edd2cc811c9250606001905060405180910390a1505050565b6007602052816000526040600020818154811061116c57600080fd5b90600052602060002001600091509150505481565b6000546001600160a01b031633146111db5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610577565b6001600160a01b0381166112575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610577565b61126081611372565b50565b6000610697825490565b6000611282836001600160a01b038416611457565b9392505050565b6000611282836001600160a01b0384166114a6565b600061128283836115c3565b6001600160a01b03811660009081526001830160205260408120541515611282565b600054600160a01b900460ff166113255760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610577565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff161561141c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113553390565b600081815260018301602052604081205461149e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610697565b506000610697565b600081815260018301602052604081205480156115b95760006114ca600183611b2b565b85549091506000906114de90600190611b2b565b905081811461155f57600086600001828154811061150c57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061153d57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061157e57634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610697565b6000915050610697565b60008260000182815481106115e857634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b80356001600160a01b038116811461161257600080fd5b919050565b600082601f830112611627578081fd5b8151602067ffffffffffffffff8083111561164457611644611bc6565b8260051b611653838201611a7b565b8481528381019087850183890186018a101561166d578788fd5b8793505b868410156116aa57805185811115611687578889fd5b6116958b88838d0101611707565b84525060019390930192918501918501611671565b5098975050505050505050565b600082601f8301126116c7578081fd5b81516116da6116d582611aac565b611a7b565b8181528460208386010111156116ee578283fd5b6116ff826020830160208701611b65565b949350505050565b600060408284031215611718578081fd5b6040516040810167ffffffffffffffff828210818311171561173c5761173c611bc6565b81604052829350845191508082111561175457600080fd5b611760868387016116b7565b8352602085015191508082111561177657600080fd5b50611783858286016116b7565b6020830152505092915050565b6000602082840312156117a1578081fd5b611282826115fb565b600080604083850312156117bc578081fd5b6117c5836115fb565b9150602083013580151581146117d9578182fd5b809150509250929050565b600080604083850312156117f6578182fd5b6117ff836115fb565b946020939093013593505050565b60006020828403121561181e578081fd5b813567ffffffffffffffff811115611834578182fd5b8201601f81018413611844578182fd5b80356118526116d582611aac565b818152856020838501011115611866578384fd5b81602084016020830137908101602001929092525092915050565b600060208284031215611892578081fd5b815167ffffffffffffffff808211156118a9578283fd5b9083019060c082860312156118bc578283fd5b6118c4611a52565b8251828111156118d2578485fd5b6118de878286016116b7565b8252506020830151828111156118f2578485fd5b6118fe878286016116b7565b602083015250604083015182811115611915578485fd5b611921878286016116b7565b604083015250606083015182811115611938578485fd5b611944878286016116b7565b60608301525060808301518281111561195b578485fd5b611967878286016116b7565b60808301525060a08301518281111561197e578485fd5b61198a87828601611617565b60a08301525095945050505050565b6000602082840312156119aa578081fd5b5035919050565b600082516119c3818460208701611b65565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611a0e5783516001600160a01b0316835292840192918401916001016119e9565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611a0e57835183529284019291840191600101611a36565b60405160c0810167ffffffffffffffff81118282101715611a7557611a75611bc6565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611aa457611aa4611bc6565b604052919050565b600067ffffffffffffffff821115611ac657611ac6611bc6565b50601f01601f191660200190565b60008219821115611ae757611ae7611bb0565b500190565b600082611b0757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611b2657611b26611bb0565b500290565b600082821015611b3d57611b3d611bb0565b500390565b600060ff821660ff841680821015611b5c57611b5c611bb0565b90039392505050565b60005b83811015611b80578181015183820152602001611b68565b83811115611b8f576000848401525b50505050565b6000600019821415611ba957611ba9611bb0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220569607771fc2e21247df45a61f8cc3c262f8075fc975b88dbf5f38116ace1cc664736f6c63430008040033";

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
    _cooldownInDays: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(_cooldownInDays, overrides || {}) as Promise<Staking>;
  }
  getDeployTransaction(
    _cooldownInDays: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cooldownInDays, overrides || {});
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
