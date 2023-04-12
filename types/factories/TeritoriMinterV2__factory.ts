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
  TeritoriMinterV2,
  TeritoriMinterV2Interface,
} from "../TeritoriMinterV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_contractURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_nft_impl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minterFee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_revealed",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_revealURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "MintRequest",
    type: "event",
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
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFund",
    type: "event",
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "mintToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mintStartTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "whitelistCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "publicMintPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "publicMintMax",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "royaltyReceiver",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "royaltyPercentage",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentSupply",
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
    name: "minter",
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
    name: "minterFee",
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
    name: "nft",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "requestMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "requestMintByAdmin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "mintToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mintStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "whitelistCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "publicMintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "publicMintMax",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "royaltyReceiver",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "royaltyPercentage",
            type: "uint96",
          },
        ],
        internalType: "struct TeritoriMinterV2.Config",
        name: "newConfig",
        type: "tuple",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newMinter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinterFee",
        type: "uint256",
      },
    ],
    name: "setMinterFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "whitelistPhase",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "whitelistPhases",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "mintMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delayPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct TeritoriMinterV2.WhitelistConfig[]",
        name: "newWhitelistMintConfigs",
        type: "tuple[]",
      },
    ],
    name: "setWhitelistConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startMint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "tokenRequests",
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
    name: "tokenRequestsCount",
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
        internalType: "bool",
        name: "_revealed",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_revealURI",
        type: "string",
      },
    ],
    name: "updateReveal",
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
    ],
    name: "userMinted",
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
    name: "userState",
    outputs: [
      {
        internalType: "uint256",
        name: "currentPhase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "userCanMint",
        type: "bool",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userWhitelisted",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "whitelistSize",
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
    name: "whitelists",
    outputs: [
      {
        internalType: "uint256",
        name: "mintMax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delayPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f2438038062002f248339810160408190526200003491620002d0565b6200003f3362000116565b6000805460ff60a01b1916905560018055620000678562000166602090811b62001c8717901c565b600380546001600160a01b0319166001600160a01b0392909216918217905560405163155fc20f60e21b815263557f083c90620000b1908b908b908b9088908890600401620003f4565b600060405180830381600087803b158015620000cc57600080fd5b505af1158015620000e1573d6000803e3d6000fd5b5050600280546001600160a01b0319166001600160a01b03979097169690961790955550505060125550620004a69350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116620002135760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640160405180910390fd5b919050565b80516001600160a01b03811681146200021357600080fd5b805180151581146200021357600080fd5b600082601f83011262000252578081fd5b81516001600160401b03808211156200026f576200026f62000490565b604051601f8301601f19908116603f011681019082821181831017156200029a576200029a62000490565b81604052838152866020858801011115620002b3578485fd5b620002c68460208301602089016200045d565b9695505050505050565b600080600080600080600080610100898b031215620002ed578384fd5b88516001600160401b038082111562000304578586fd5b620003128c838d0162000241565b995060208b015191508082111562000328578586fd5b620003368c838d0162000241565b985060408b01519150808211156200034c578586fd5b6200035a8c838d0162000241565b97506200036a60608c0162000218565b96506200037a60808c0162000218565b955060a08b015194506200039160c08c0162000230565b935060e08b0151915080821115620003a7578283fd5b50620003b68b828c0162000241565b9150509295985092959890939650565b60008151808452620003e08160208601602086016200045d565b601f01601f19169290920160200192915050565b60a0815260006200040960a0830188620003c6565b82810360208401526200041d8188620003c6565b90508281036040840152620004338187620003c6565b905084151560608401528281036080840152620004518185620003c6565b98975050505050505050565b60005b838110156200047a57818101518382015260200162000460565b838111156200048a576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b612a6e80620004b66000396000f3fe6080604052600436106101cd5760003560e01c80635e94c98e116100f75780638da5cb5b11610095578063fa7783fd11610064578063fa7783fd146105d8578063fad9a11f146105ee578063fca3b5aa1461060e578063fe4d5add1461062e57600080fd5b80638da5cb5b146105655780638ff44bf014610583578063e07fa3c1146105a3578063f2fde38b146105b857600080fd5b806379502c55116100d157806379502c55146104675780637bc2620b14610510578063828c12ce146105305780638456cb591461055057600080fd5b80635e94c98e1461041c578063715018a61461043c578063771282f61461045157600080fd5b80633dac1ecb1161016f5780634a9dc7491161013e5780634a9dc7491461039457806355f804b3146103a75780635c975abb146103c75780635e124dcf146103e657600080fd5b80633dac1ecb1461031c5780633f4ba83a1461034957806347ccca021461035e57806348a9d0ce1461037e57600080fd5b8063162094c4116101ab578063162094c4146102975780631aa5e872146102b95780632be09561146102f457806331a02bce1461030957600080fd5b806306b1bd0e146101d257806307546172146102225780630c8f81b51461025a575b600080fd5b3480156101de57600080fd5b5061020d6101ed36600461272c565b600c60209081526000928352604080842090915290825290205460ff1681565b60405190151581526020015b60405180910390f35b34801561022e57600080fd5b50600254610242906001600160a01b031681565b6040516001600160a01b039091168152602001610219565b34801561026657600080fd5b5061027a6102753660046124c3565b610690565b604080519384526020840192909252151590820152606001610219565b3480156102a357600080fd5b506102b76102b236600461280d565b61082a565b005b3480156102c557600080fd5b506102e66102d43660046124c3565b600e6020526000908152604090205481565b604051908152602001610219565b34801561030057600080fd5b506102b7610905565b6102b76103173660046124dd565b610953565b34801561032857600080fd5b506102e66103373660046126fc565b600d6020526000908152604090205481565b34801561035557600080fd5b506102b7610ede565b34801561036a57600080fd5b50600354610242906001600160a01b031681565b34801561038a57600080fd5b506102e660125481565b6102b76103a23660046124dd565b610f89565b3480156103b357600080fd5b506102b76103c2366004612620565b611368565b3480156103d357600080fd5b50600054600160a01b900460ff1661020d565b3480156103f257600080fd5b506102426104013660046126fc565b600f602052600090815260409020546001600160a01b031681565b34801561042857600080fd5b506102b76104373660046126fc565b611440565b34801561044857600080fd5b506102b761148d565b34801561045d57600080fd5b506102e660115481565b34801561047357600080fd5b50600454600554600654600754600854600954600a546104ba96956001600160a01b03908116959493929190811690600160a01b90046bffffffffffffffffffffffff1688565b604080519889526001600160a01b0397881660208a01528801959095526060870193909352608086019190915260a085015290911660c08301526bffffffffffffffffffffffff1660e082015261010001610219565b34801561051c57600080fd5b506102b761052b366004612506565b6114df565b34801561053c57600080fd5b506102b761054b3660046125dc565b611629565b34801561055c57600080fd5b506102b76116bc565b34801561057157600080fd5b506000546001600160a01b0316610242565b34801561058f57600080fd5b506102b761059e36600461265b565b611759565b3480156105af57600080fd5b506102b7611810565b3480156105c457600080fd5b506102b76105d33660046124c3565b6119b9565b3480156105e457600080fd5b506102e660105481565b3480156105fa57600080fd5b506102b7610609366004612757565b611a89565b34801561061a57600080fd5b506102b76106293660046124c3565b611c1d565b34801561063a57600080fd5b506106706106493660046126fc565b600b6020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610219565b60008060006004600201546000141580156106ad57506006544210155b6106f15760405162461bcd60e51b815260206004820152601060248201526f1352539517d393d517d4d5105495115160821b60448201526064015b60405180910390fd5b6001600160a01b0384166000908152600e6020526040812054600654600754600854909650945090915b600754811015610811576000818152600b60209081526040918290208251608081018452815481526001820154928101839052600282015493810193909352600301546060830181905242916107719086612949565b61077b9190612949565b106107df57806040015195508196504281602001518461079b9190612949565b101580156107cb57506000828152600c602090815260408083206001600160a01b038c16845290915290205460ff165b80156107d75750805184105b945050610811565b806060015181602001516107f39190612949565b6107fd9084612949565b9250508061080a906129c3565b905061071b565b50828015610820575060095482105b9496939550505050565b6002546001600160a01b031633146108845760405162461bcd60e51b815260206004820152600c60248201527f554e415554484f52495a4544000000000000000000000000000000000000000060448201526064016106e8565b6003546040517f162094c40000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063162094c4906108cf90859085906004016128b2565b600060405180830381600087803b1580156108e957600080fd5b505af11580156108fd573d6000803e3d6000fd5b505050505050565b6000546001600160a01b0316331461094d5760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b42600655565b600054600160a01b900460ff16156109a05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e8565b600260015414156109f35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106e8565b600260015560065415801590610a0b57506006544210155b610a4a5760405162461bcd60e51b815260206004820152601060248201526f1352539517d393d517d4d5105495115160821b60448201526064016106e8565b6001600160a01b0382166000908152600e602052604081205460065460085491929091905b600754811015610c3f576000818152600b6020908152604091829020825160808101845281548152600182015492810183905260028201549381019390935260030154606083018190524291610ac59087612949565b610acf9190612949565b10610c0d5742816020015185610ae59190612949565b1015610b335760405162461bcd60e51b815260206004820152600860248201527f494e5f44454c415900000000000000000000000000000000000000000000000060448201526064016106e8565b6040808201516000848152600c60209081528382206001600160a01b038c1683529052919091205490935060ff16610bad5760405162461bcd60e51b815260206004820152600f60248201527f4e4f545f57484954454c4953544544000000000000000000000000000000000060448201526064016106e8565b8051610bb98787612949565b1115610c075760405162461bcd60e51b815260206004820152601960248201527f4558434545445f57484954454c4953545f4d494e545f4d41580000000000000060448201526064016106e8565b50610c3f565b80606001518160200151610c219190612949565b610c2b9085612949565b93505080610c38906129c3565b9050610a6f565b50600954610c4d8585612949565b1115610c9b5760405162461bcd60e51b815260206004820152600f60248201527f4558434545445f4d494e545f4d4158000000000000000000000000000000000060448201526064016106e8565b8015610cc257610cc233610caf8684612961565b6005546001600160a01b03169190611d42565b6001600160a01b0385166000908152600e602052604081208054869290610cea908490612949565b90915550600090505b84811015610e125785600f600083601054610d0e9190612949565b8152602081019190915260400160002080546001600160a01b0319166001600160a01b0392831617905560035460115491169063b55f92b2908890610d54908590612949565b600a5460405160e085901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b03938416600482015260248101929092529182166044820152600160a01b9091046bffffffffffffffffffffffff16606482015260a06084820152600060a482015260c401600060405180830381600087803b158015610de957600080fd5b505af1158015610dfd573d6000803e3d6000fd5b5050505080610e0b906129c3565b9050610cf3565b508360106000828254610e259190612949565b925050819055508360116000828254610e3e9190612949565b90915550506004546010541115610e975760405162461bcd60e51b815260206004820152601160248201527f4558434545445f4d41585f535550504c5900000000000000000000000000000060448201526064016106e8565b6040516001600160a01b03861681527f0af7474cbbd1ef068605cf3d04b3b0f187241620cc71f4dff74d398eb5e4e2069060200160405180910390a1505060018055505050565b6000546001600160a01b03163314610f265760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b600054600160a01b900460ff16610f7f5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106e8565b610f87611db9565b565b600054600160a01b900460ff1615610fd65760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e8565b600260015414156110295760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106e8565b60026001556000546001600160a01b031633146110885760405162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a6564000000000000000000000000000000000000000060448201526064016106e8565b6006541580159061109b57506006544210155b6110da5760405162461bcd60e51b815260206004820152601060248201526f1352539517d393d517d4d5105495115160821b60448201526064016106e8565b6009546001600160a01b0383166000908152600e6020526040902054611101908390612949565b111561114f5760405162461bcd60e51b815260206004820152600f60248201527f4558434545445f4d494e545f4d4158000000000000000000000000000000000060448201526064016106e8565b6001600160a01b0382166000908152600e602052604081208054839290611177908490612949565b90915550600090505b8181101561129f5782600f60008360105461119b9190612949565b8152602081019190915260400160002080546001600160a01b0319166001600160a01b0392831617905560035460115491169063b55f92b29085906111e1908590612949565b600a5460405160e085901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b03938416600482015260248101929092529182166044820152600160a01b9091046bffffffffffffffffffffffff16606482015260a06084820152600060a482015260c401600060405180830381600087803b15801561127657600080fd5b505af115801561128a573d6000803e3d6000fd5b5050505080611298906129c3565b9050611180565b5080601060008282546112b29190612949565b9250508190555080601160008282546112cb9190612949565b909155505060045460105411156113245760405162461bcd60e51b815260206004820152601160248201527f4558434545445f4d41585f535550504c5900000000000000000000000000000060448201526064016106e8565b6040516001600160a01b03831681527f0af7474cbbd1ef068605cf3d04b3b0f187241620cc71f4dff74d398eb5e4e2069060200160405180910390a1505060018055565b6002546001600160a01b031633146113c25760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016106e8565b6003546040517f55f804b30000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906355f804b39061140b90849060040161289f565b600060405180830381600087803b15801561142557600080fd5b505af1158015611439573d6000803e3d6000fd5b5050505050565b6000546001600160a01b031633146114885760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b601255565b6000546001600160a01b031633146114d55760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b610f876000611e5f565b6000546001600160a01b031633146115275760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b80518251146115785760405162461bcd60e51b815260206004820152600e60248201527f494e56414c49445f4c454e47544800000000000000000000000000000000000060448201526064016106e8565b815160005b81811015611623578281815181106115a557634e487b7160e01b600052603260045260246000fd5b6020026020010151600b60008684815181106115d157634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301559050508061161c906129c3565b905061157d565b50505050565b6000546001600160a01b031633146116715760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b6003546040517f828c12ce0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063828c12ce906108cf9085908590600401612884565b6000546001600160a01b031633146117045760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b600054600160a01b900460ff16156117515760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e8565b610f87611eaf565b6000546001600160a01b031633146117a15760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b80516004556020810151600580546001600160a01b039283166001600160a01b031990911617905560408201516006556060820151600755608082015160085560a082015160095560c082015160e0909201516bffffffffffffffffffffffff16600160a01b02911617600a55565b6000546001600160a01b031633146118585760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b6005546000906001600160a01b0316611872575047611909565b6005546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156118ce57600080fd5b505afa1580156118e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119069190612714565b90505b600081116119595760405162461bcd60e51b815260206004820152601160248201527f4e4f5f415641494c41424c455f46554e4400000000000000000000000000000060448201526064016106e8565b600554611970906001600160a01b03163383611f37565b600554604080516001600160a01b039092168252602082018390527f09ad672d4e7c4892da934d1051932ebe9ec4b6ec8c3f40d569176db3e93e5abe910160405180910390a150565b6000546001600160a01b03163314611a015760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b6001600160a01b038116611a7d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106e8565b611a8681611e5f565b50565b6000546001600160a01b03163314611ad15760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b6000805b8351811015611bc4576000858152600c6020526040812085518515159290879085908110611b1357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff16151514611bb4576000858152600c602052604081208551859290879085908110611b7457634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905581611bb0816129c3565b9250505b611bbd816129c3565b9050611ad5565b508115611bf4576000848152600d602052604081208054839290611be9908490612949565b909155506116239050565b6000848152600d602052604081208054839290611c12908490612980565b909155505050505050565b6000546001600160a01b03163314611c655760405162461bcd60e51b81526020600482018190526024820152600080516020612a1983398151915260448201526064016106e8565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b038116611d3d5760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c65640000000000000000000060448201526064016106e8565b919050565b6001600160a01b038316611da457348114611d9f5760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f4d53475f56414c554500000000000000000000000000000060448201526064016106e8565b505050565b611d9f6001600160a01b038416833084611ffc565b600054600160a01b900460ff16611e125760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106e8565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff1615611efc5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e8565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611e423390565b6001600160a01b038316611fe8576000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611f92576040519150601f19603f3d011682016040523d82523d6000602084013e611f97565b606091505b50509050806116235760405162461bcd60e51b815260206004820152601c60248201527f4e41544956455f544f4b454e5f5452414e534645525f4641494c45440000000060448201526064016106e8565b611d9f6001600160a01b03841683836120ad565b6040516001600160a01b03808516602483015283166044820152606481018290526116239085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526120f6565b6040516001600160a01b038316602482015260448101829052611d9f9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612049565b600061214b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121db9092919063ffffffff16565b805190915015611d9f578080602001905181019061216991906125c0565b611d9f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106e8565b60606121ea84846000856121f4565b90505b9392505050565b60608247101561226c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106e8565b6001600160a01b0385163b6122c35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106e8565b600080866001600160a01b031685876040516122df9190612868565b60006040518083038185875af1925050503d806000811461231c576040519150601f19603f3d011682016040523d82523d6000602084013e612321565b606091505b509150915061233182828661233c565b979650505050505050565b6060831561234b5750816121ed565b82511561235b5782518084602001fd5b8160405162461bcd60e51b81526004016106e8919061289f565b80356001600160a01b0381168114611d3d57600080fd5b600082601f83011261239c578081fd5b813560206123b16123ac83612925565b6128f4565b80838252828201915082860187848660071b89010111156123d0578586fd5b855b8581101561242457608080838b0312156123ea578788fd5b6123f26128cb565b8335815286840135878201526040808501359082015260608085013590820152855293850193909101906001016123d2565b5090979650505050505050565b8035611d3d81612a0a565b600082601f83011261244c578081fd5b813567ffffffffffffffff811115612466576124666129f4565b612479601f8201601f19166020016128f4565b81815284602083860101111561248d578283fd5b816020850160208301379081016020019190915292915050565b80356bffffffffffffffffffffffff81168114611d3d57600080fd5b6000602082840312156124d4578081fd5b6121ed82612375565b600080604083850312156124ef578081fd5b6124f883612375565b946020939093013593505050565b60008060408385031215612518578182fd5b823567ffffffffffffffff8082111561252f578384fd5b818501915085601f830112612542578384fd5b813560206125526123ac83612925565b8083825282820191508286018a848660051b8901011115612571578889fd5b8896505b84871015612593578035835260019690960195918301918301612575565b50965050860135925050808211156125a9578283fd5b506125b68582860161238c565b9150509250929050565b6000602082840312156125d1578081fd5b81516121ed81612a0a565b600080604083850312156125ee578182fd5b82356125f981612a0a565b9150602083013567ffffffffffffffff811115612614578182fd5b6125b68582860161243c565b600060208284031215612631578081fd5b813567ffffffffffffffff811115612647578182fd5b6126538482850161243c565b949350505050565b600061010080838503121561266e578182fd5b6040519081019067ffffffffffffffff82118183101715612691576126916129f4565b81604052833581526126a560208501612375565b602082015260408401356040820152606084013560608201526080840135608082015260a084013560a08201526126de60c08501612375565b60c08201526126ef60e085016124a7565b60e0820152949350505050565b60006020828403121561270d578081fd5b5035919050565b600060208284031215612725578081fd5b5051919050565b6000806040838503121561273e578182fd5b8235915061274e60208401612375565b90509250929050565b60008060006060848603121561276b578081fd5b8335925060208085013567ffffffffffffffff811115612789578283fd5b8501601f81018713612799578283fd5b80356127a76123ac82612925565b8082825284820191508484018a868560051b87010111156127c6578687fd5b8694505b838510156127ef576127db81612375565b8352600194909401939185019185016127ca565b50809650505050505061280460408501612431565b90509250925092565b6000806040838503121561281f578182fd5b82359150602083013567ffffffffffffffff811115612614578182fd5b60008151808452612854816020860160208601612997565b601f01601f19169290920160200192915050565b6000825161287a818460208701612997565b9190910192915050565b82151581526040602082015260006121ea604083018461283c565b6020815260006121ed602083018461283c565b8281526040602082015260006121ea604083018461283c565b6040516080810167ffffffffffffffff811182821017156128ee576128ee6129f4565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561291d5761291d6129f4565b604052919050565b600067ffffffffffffffff82111561293f5761293f6129f4565b5060051b60200190565b6000821982111561295c5761295c6129de565b500190565b600081600019048311821515161561297b5761297b6129de565b500290565b600082821015612992576129926129de565b500390565b60005b838110156129b257818101518382015260200161299a565b838111156116235750506000910152565b60006000198214156129d7576129d76129de565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114611a8657600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122010cccf2e40b923e951cc105875b6ae8c7e35a874f2a83cde66df37efde889e4564736f6c63430008040033";

export class TeritoriMinterV2__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _contractURI: string,
    _nft_impl: string,
    _minter: string,
    _minterFee: BigNumberish,
    _revealed: boolean,
    _revealURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TeritoriMinterV2> {
    return super.deploy(
      _name,
      _symbol,
      _contractURI,
      _nft_impl,
      _minter,
      _minterFee,
      _revealed,
      _revealURI,
      overrides || {}
    ) as Promise<TeritoriMinterV2>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _contractURI: string,
    _nft_impl: string,
    _minter: string,
    _minterFee: BigNumberish,
    _revealed: boolean,
    _revealURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _contractURI,
      _nft_impl,
      _minter,
      _minterFee,
      _revealed,
      _revealURI,
      overrides || {}
    );
  }
  attach(address: string): TeritoriMinterV2 {
    return super.attach(address) as TeritoriMinterV2;
  }
  connect(signer: Signer): TeritoriMinterV2__factory {
    return super.connect(signer) as TeritoriMinterV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TeritoriMinterV2Interface {
    return new utils.Interface(_abi) as TeritoriMinterV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TeritoriMinterV2 {
    return new Contract(address, _abi, signerOrProvider) as TeritoriMinterV2;
  }
}