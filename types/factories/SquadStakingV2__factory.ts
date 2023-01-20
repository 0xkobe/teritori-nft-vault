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
import type {
  SquadStakingV2,
  SquadStakingV2Interface,
} from "../SquadStakingV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftMetadataRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minSquadSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSquadSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_bonusMultipliers",
        type: "uint256[]",
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
    ],
    name: "Unstake",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER_BASE_POINT",
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
        name: "",
        type: "address",
      },
    ],
    name: "_userSquadInfo",
    outputs: [
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
    name: "bonusMultipliers",
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
    inputs: [],
    name: "maxSquadSize",
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
    inputs: [],
    name: "minSquadSize",
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
    inputs: [],
    name: "nftMetadataRegistry",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256[]",
        name: "_size",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_bonusMultipliers",
        type: "uint256[]",
      },
    ],
    name: "setBonusMultiplier",
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
        internalType: "uint256",
        name: "_minSquadSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSquadSize",
        type: "uint256",
      },
    ],
    name: "setSquadSize",
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
        components: [
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
        internalType: "struct SquadStakingV2.NftInfo[]",
        name: "nfts",
        type: "tuple[]",
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
      {
        internalType: "uint256",
        name: "size",
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
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "userSquadInfo",
    outputs: [
      {
        components: [
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
            components: [
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
            internalType: "struct SquadStakingV2.NftInfo[]",
            name: "nfts",
            type: "tuple[]",
          },
        ],
        internalType: "struct SquadStakingV2.SquadInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f4738038062001f4783398101604081905262000034916200012f565b6200003f33620000df565b6000805460ff60a01b19168155600180546001600160a01b0319166001600160a01b0388161790556002859055600384905560048390555b8151811015620000d357818181518110620000a257634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000838152600590925260409091205580620000ca816200023b565b91505062000077565b50505050505062000279565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600060a0868803121562000147578081fd5b85516001600160a01b03811681146200015e578182fd5b602087810151604089015160608a015160808b015194995091975095509350906001600160401b038082111562000193578384fd5b818901915089601f830112620001a7578384fd5b815181811115620001bc57620001bc62000263565b8060051b604051601f19603f83011681018181108582111715620001e457620001e462000263565b604052828152858101935084860182860187018e101562000203578788fd5b8795505b838610156200022757805185526001959095019493860193860162000207565b508096505050505050509295509295909350565b60006000198214156200025c57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b611cbe80620002896000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806362b2c8fe116100ee5780638994929e11610097578063a16e360711610071578063a16e3607146103ce578063ae7521a4146103e1578063ca777933146103f4578063f2fde38b1461041457600080fd5b80638994929e146103785780638da5cb5b1461038157806395f60ec61461039257600080fd5b806380ea3de1116100c857806380ea3de11461033d5780638178c4df146103505780638456cb591461037057600080fd5b806362b2c8fe14610313578063715018a614610322578063801c52361461032a57600080fd5b80631f1a31d61161015b5780632def6620116101355780632def6620146102e85780633f4ba83a146102f05780634b8544f2146102f85780635c975abb1461030157600080fd5b80631f1a31d61461029f578063251f2e8a146102b25780632c87572b146102d557600080fd5b80630bf242d81161018c5780630bf242d8146101ec578063150b7a021461020c5780631e1a3d351461027457600080fd5b8063014b5c10146101b357806304646a49146101ce5780630bed494c146101d7575b600080fd5b6101bb610427565b6040519081526020015b60405180910390f35b6101bb60045481565b6101ea6101e53660046118c2565b610438565b005b6101bb6101fa366004611a4a565b60056020526000908152604090205481565b61024361021a36600461180a565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101c5565b610287610282366004611a4a565b6104b8565b6040516001600160a01b0390911681526020016101c5565b6101ea6102ad3660046119e9565b6104cb565b6102c56102c03660046117f0565b6105fb565b60405190151581526020016101c5565b600154610287906001600160a01b031681565b6101ea610608565b6101ea610916565b6101bb60025481565b600054600160a01b900460ff166102c5565b6101bb670de0b6b3a764000081565b6101ea6109d3565b6101ea61033836600461192e565b610a37565b6101ea61034b366004611a4a565b610e3c565b61036361035e366004611a4a565b610e9b565b6040516101c59190611a9b565b6101ea610f65565b6101bb60035481565b6000546001600160a01b0316610287565b6103b96103a03660046117f0565b6008602052600090815260409020805460019091015482565b604080519283526020830191909152016101c5565b6101bb6103dc3660046118fc565b611014565b6101ea6103ef366004611a7a565b611150565b6104076104023660046117f0565b6111b5565b6040516101c59190611ae8565b6101ea6104223660046117f0565b611298565b6000610433600661137a565b905090565b6000546001600160a01b031633146104975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b80156104ad576104a8600683611384565b505050565b6104a86006836113a0565b60006104c56006836113b5565b92915050565b6000546001600160a01b031633146105255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b80518251146105765760405162461bcd60e51b815260206004820152600f60248201527f6c656e677468206d69736d617463680000000000000000000000000000000000604482015260640161048e565b60005b81518110156104a8578181815181106105a257634e487b7160e01b600052603260045260246000fd5b6020026020010151600560008584815181106105ce57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000208190555080806105f390611c41565b915050610579565b60006104c56006836113c1565b600054600160a01b900460ff16156106555760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161048e565b336000908152600860205260409020600201546106b45760405162461bcd60e51b815260206004820152601060248201527f7371756164206e6f742065786973747300000000000000000000000000000000604482015260640161048e565b336000908152600860205260409020600101544210156107165760405162461bcd60e51b815260206004820152601960248201527f7761697420756e74696c207374616b696e6720706572696f6400000000000000604482015260640161048e565b336000908152600860209081526040808320815160608101835281548152600182015481850152600282018054845181870281018701865281815292959394860193879084015b828210156107a5576000848152602090819020604080518082019091526002850290910180546001600160a01b0316825260019081015482840152908352909201910161075d565b505050915250503360009081526008602052604081209192506107cb9160020190611712565b60005b8160400151518110156108df57816040015181815181106107ff57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b03166342842e0e30338560400151858151811061083f57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401600060405180830381600087803b1580156108b457600080fd5b505af11580156108c8573d6000803e3d6000fd5b5050505080806108d790611c41565b9150506107ce565b506040513381527fe5d648ba8f514a64a4104bf6922acc6e04ecab6464b46d696cf123c27079ddd79060200160405180910390a150565b6000546001600160a01b031633146109705760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b600054600160a01b900460ff166109c95760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161048e565b6109d16113e3565b565b6000546001600160a01b03163314610a2d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b6109d16000611489565b600054600160a01b900460ff1615610a845760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161048e565b3360009081526008602052604090206002015415610ae45760405162461bcd60e51b815260206004820152600c60248201527f7371756164206578697374730000000000000000000000000000000000000000604482015260640161048e565b600454336000908152600860205260409020544291610b0291611bd3565b1115610b505760405162461bcd60e51b815260206004820152601360248201527f7761697420756e74696c20636f6f6c646f776e00000000000000000000000000604482015260640161048e565b600254815110158015610b665750600354815111155b610bb25760405162461bcd60e51b815260206004820152601660248201527f696e76616c6964206e756d626572206f66206e66747300000000000000000000604482015260640161048e565b60005b8151811015610cba57818181518110610bde57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b03166342842e0e3330858581518110610c1a57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401600060405180830381600087803b158015610c8f57600080fd5b505af1158015610ca3573d6000803e3d6000fd5b505050508080610cb290611c41565b915050610bb5565b506000610d2182600081518110610ce157634e487b7160e01b600052603260045260246000fd5b60200260200101516000015183600081518110610d0e57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518451611014565b9050426000610d308383611bd3565b3360009081526008602052604081208481556001018290559091505b8451811015610df4573360009081526008602052604090208551600290910190869083908110610d8c57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518254600180820185556000948552938390208251600290920201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390921691909117815591015191015580610dec81611c41565b915050610d4c565b5060408051338152602081018490529081018290527f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060600160405180910390a150505050565b6000546001600160a01b03163314610e965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b600455565b60606000610ea9600661137a565b90508067ffffffffffffffff811115610ed257634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610efb578160200160208202803683370190505b50915060005b81811015610f5e57610f146006856113b5565b838281518110610f3457634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015280610f5681611c41565b915050610f01565b5050919050565b6000546001600160a01b03163314610fbf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b600054600160a01b900460ff161561100c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161048e565b6109d16114e6565b600081815260056020526040812054806110705760405162461bcd60e51b815260206004820152601860248201527f696e76616c696420626f6e7573206d756c7469706c6965720000000000000000604482015260640161048e565b6001546040517f38dfcfe10000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301526024820187905260009216906338dfcfe19060440160206040518083038186803b1580156110d657600080fd5b505afa1580156110ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110e9190611a62565b9050670de0b6b3a764000060088361112884610e10611c0b565b6111329190611c0b565b61113c9190611beb565b6111469190611beb565b9695505050505050565b6000546001600160a01b031633146111aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b600291909155600355565b6111d960405180606001604052806000815260200160008152602001606081525090565b60086000836001600160a01b03166001600160a01b03168152602001908152602001600020604051806060016040529081600082015481526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020016000905b8282101561128a576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611242565b505050915250909392505050565b6000546001600160a01b031633146112f25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b6001600160a01b03811661136e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161048e565b61137781611489565b50565b60006104c5825490565b6000611399836001600160a01b03841661156e565b9392505050565b6000611399836001600160a01b0384166115bd565b600061139983836116da565b6001600160a01b03811660009081526001830160205260408120541515611399565b600054600160a01b900460ff1661143c5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161048e565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff16156115335760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161048e565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861146c3390565b60008181526001830160205260408120546115b5575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104c5565b5060006104c5565b600081815260018301602052604081205480156116d05760006115e1600183611c2a565b85549091506000906115f590600190611c2a565b905081811461167657600086600001828154811061162357634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061165457634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061169557634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104c5565b60009150506104c5565b60008260000182815481106116ff57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b508054600082556002029060005260206000209081019061137791905b8082111561176157805473ffffffffffffffffffffffffffffffffffffffff191681556000600182015560020161172f565b5090565b80356001600160a01b038116811461177c57600080fd5b919050565b600082601f830112611791578081fd5b813560206117a66117a183611baf565b611b7e565b80838252828201915082860187848660051b89010111156117c5578586fd5b855b858110156117e3578135845292840192908401906001016117c7565b5090979650505050505050565b600060208284031215611801578081fd5b61139982611765565b6000806000806080858703121561181f578283fd5b61182885611765565b93506020611837818701611765565b935060408601359250606086013567ffffffffffffffff8082111561185a578384fd5b818801915088601f83011261186d578384fd5b81358181111561187f5761187f611c72565b611891601f8201601f19168501611b7e565b915080825289848285010111156118a6578485fd5b8084840185840137810190920192909252939692955090935050565b600080604083850312156118d4578182fd5b6118dd83611765565b9150602083013580151581146118f1578182fd5b809150509250929050565b600080600060608486031215611910578283fd5b61191984611765565b95602085013595506040909401359392505050565b60006020808385031215611940578182fd5b823567ffffffffffffffff811115611956578283fd5b8301601f81018513611966578283fd5b80356119746117a182611baf565b80828252848201915084840188868560061b8701011115611993578687fd5b8694505b838510156119dd57604080828b0312156119af578788fd5b6119b7611b55565b6119c083611765565b815282880135888201528452600195909501949286019201611997565b50979650505050505050565b600080604083850312156119fb578182fd5b823567ffffffffffffffff80821115611a12578384fd5b611a1e86838701611781565b93506020850135915080821115611a33578283fd5b50611a4085828601611781565b9150509250929050565b600060208284031215611a5b578081fd5b5035919050565b600060208284031215611a73578081fd5b5051919050565b60008060408385031215611a8c578182fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b81811015611adc5783516001600160a01b031683529284019291840191600101611ab7565b50909695505050505050565b602080825282518282015282810151604080840191909152808401516060808501528051608085018190526000939291830191849160a08701905b808410156119dd57845180516001600160a01b0316835286015186830152938501936001939093019290820190611b23565b6040805190810167ffffffffffffffff81118282101715611b7857611b78611c72565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ba757611ba7611c72565b604052919050565b600067ffffffffffffffff821115611bc957611bc9611c72565b5060051b60200190565b60008219821115611be657611be6611c5c565b500190565b600082611c0657634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611c2557611c25611c5c565b500290565b600082821015611c3c57611c3c611c5c565b500390565b6000600019821415611c5557611c55611c5c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201ab14cd4655038363bf3a1c3648e06680ec35794f3c0ae20ee8d1b97a3f8e01b64736f6c63430008040033";

export class SquadStakingV2__factory extends ContractFactory {
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
    _nftMetadataRegistry: string,
    _minSquadSize: BigNumberish,
    _maxSquadSize: BigNumberish,
    _cooldownPeriod: BigNumberish,
    _bonusMultipliers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SquadStakingV2> {
    return super.deploy(
      _nftMetadataRegistry,
      _minSquadSize,
      _maxSquadSize,
      _cooldownPeriod,
      _bonusMultipliers,
      overrides || {}
    ) as Promise<SquadStakingV2>;
  }
  getDeployTransaction(
    _nftMetadataRegistry: string,
    _minSquadSize: BigNumberish,
    _maxSquadSize: BigNumberish,
    _cooldownPeriod: BigNumberish,
    _bonusMultipliers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftMetadataRegistry,
      _minSquadSize,
      _maxSquadSize,
      _cooldownPeriod,
      _bonusMultipliers,
      overrides || {}
    );
  }
  attach(address: string): SquadStakingV2 {
    return super.attach(address) as SquadStakingV2;
  }
  connect(signer: Signer): SquadStakingV2__factory {
    return super.connect(signer) as SquadStakingV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SquadStakingV2Interface {
    return new utils.Interface(_abi) as SquadStakingV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SquadStakingV2 {
    return new Contract(address, _abi, signerOrProvider) as SquadStakingV2;
  }
}
