/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HPHealing, HPHealingInterface } from "../HPHealing";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftMetadataRegistry",
        type: "address",
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
    name: "EndHealing",
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
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
    ],
    name: "StartHealing",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_POINT",
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
    name: "HP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "heal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "healingPriceUnit",
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
    name: "healingToken",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "healings",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
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
    name: "queryHealingPrice",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_priceUnit",
        type: "uint256",
      },
    ],
    name: "setHealingOption",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161185838038061185883398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100db565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100be578081fd5b81516001600160a01b03811681146100d4578182fd5b9392505050565b61176e806100ea6000396000f3fe60806040526004361061015f5760003560e01c80636d749a0d116100c0578063b5d2e19b11610074578063dfb33cdb11610059578063dfb33cdb1461042f578063f2fde38b1461044f578063f3fef3a31461046f57600080fd5b8063b5d2e19b146103fc578063c01806f01461041c57600080fd5b80638178c4df116100a55780638178c4df146103475780638da5cb5b14610374578063a5a68a331461039257600080fd5b80636d749a0d1461031c578063715018a61461033257600080fd5b80631e1a3d35116101175780632c87572b116100fc5780632c87572b146102c75780632ea84003146102e75780633d18bb7f1461030757600080fd5b80631e1a3d351461025f578063251f2e8a1461029757600080fd5b80631135daeb116101485780631135daeb146101ae578063150b7a02146101ca578063155dd5ee1461023f57600080fd5b8063014b5c10146101645780630bed494c1461018c575b600080fd5b34801561017057600080fd5b5061017961048f565b6040519081526020015b60405180910390f35b34801561019857600080fd5b506101ac6101a7366004611502565b6104a0565b005b3480156101ba57600080fd5b50610179670de0b6b3a764000081565b3480156101d657600080fd5b5061020e6101e536600461142d565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610183565b34801561024b57600080fd5b506101ac61025a36600461157d565b610520565b34801561026b57600080fd5b5061027f61027a36600461157d565b610594565b6040516001600160a01b039091168152602001610183565b3480156102a357600080fd5b506102b76102b2366004611413565b6105a7565b6040519015158152602001610183565b3480156102d357600080fd5b5060015461027f906001600160a01b031681565b3480156102f357600080fd5b50610179610302366004611538565b6105b4565b34801561031357600080fd5b5061017961073d565b34801561032857600080fd5b5061017960035481565b34801561033e57600080fd5b506101ac61077c565b34801561035357600080fd5b5061036761036236600461157d565b6107e2565b60405161018391906115c9565b34801561038057600080fd5b506000546001600160a01b031661027f565b34801561039e57600080fd5b506103dd6103ad366004611538565b6006602090815260009283526040808420909152908252902080546001909101546001600160a01b039091169082565b604080516001600160a01b039093168352602083019190915201610183565b34801561040857600080fd5b5060025461027f906001600160a01b031681565b6101ac61042a366004611538565b6108aa565b34801561043b57600080fd5b506101ac61044a366004611538565b610a21565b34801561045b57600080fd5b506101ac61046a366004611413565b610aae565b34801561047b57600080fd5b506101ac61048a366004611538565b610b8d565b600061049b6004610d5d565b905090565b6000546001600160a01b031633146104ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b801561051557610510600483610d67565b505050565b610510600483610d83565b6000546001600160a01b0316331461057a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b600254610591906001600160a01b03163383610d98565b50565b60006105a1600483610e63565b92915050565b60006105a1600483610e6f565b60006105bf836105a7565b61060b5760405162461bcd60e51b815260206004820152601260248201527f696e76616c696420636f6c6c656374696f6e000000000000000000000000000060448201526064016104f6565b6001546040516000916001600160a01b03169063a08f631e90869061064990602001602080825260029082015261048560f41b604082015260600190565b60408051601f198184030181529082905280516020909101207fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1682526001600160a01b03909216600482015260248101919091526044810186905260640160206040518083038186803b1580156106c557600080fd5b505afa1580156106d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fd9190611595565b9050670de0b6b3a764000081610714826064611681565b61071e91906116a0565b60035461072b9190611681565b6107359190611661565b949350505050565b60405160200161076390602080825260029082015261048560f41b604082015260600190565b6040516020818303038152906040528051906020012081565b6000546001600160a01b031633146107d65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6107e06000610e91565b565b606060006107f06004610d5d565b90508067ffffffffffffffff81111561081957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610842578160200160208202803683370190505b50915060005b818110156108a35761085b600485610e63565b83828151811061087b57634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015261089c816116e3565b9050610848565b5050919050565b60006108b683836105b4565b604051632142170760e11b8152336004820152306024820152604481018490529091506001600160a01b038416906342842e0e90606401600060405180830381600087803b15801561090757600080fd5b505af115801561091b573d6000803e3d6000fd5b505060025461093792506001600160a01b031690503383610eee565b6000600a60035483610e1061094c9190611681565b6109569190611661565b6109609190611661565b61096a9042611649565b6040805180820182523380825260208083018581526001600160a01b038a81166000818152600685528781208c825285528790209551865473ffffffffffffffffffffffffffffffffffffffff191692169190911785559051600190940193909355835191825281019190915290810185905260608101849052608081018290529091507fe17ada2cbde9ef5ad5baed3f49f46f7370b37dc272af95c11cb679e32397987c9060a00160405180910390a150505050565b6000546001600160a01b03163314610a7b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039390931692909217909155600355565b6000546001600160a01b03163314610b085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6001600160a01b038116610b845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104f6565b61059181610e91565b6001600160a01b0380831660009081526006602090815260408083208584528252918290208251808401909352805490931680835260019093015490820152903314610c1b5760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016104f6565b4281602001511115610c6f5760405162461bcd60e51b815260206004820152600a60248201527f696e206865616c696e670000000000000000000000000000000000000000000060448201526064016104f6565b6001600160a01b0383166000818152600660209081526040808320868452909152808220805473ffffffffffffffffffffffffffffffffffffffff191681556001019190915551632142170760e11b8152306004820152336024820152604481018490526342842e0e90606401600060405180830381600087803b158015610cf657600080fd5b505af1158015610d0a573d6000803e3d6000fd5b5050604080513381526001600160a01b03871660208201529081018590527fe6cdd02eb4fd9395e0a26fdea7567ff11ef819eaf5bc423a90282a1a1a1c62da9250606001905060405180910390a1505050565b60006105a1825490565b6000610d7c836001600160a01b038416610f60565b9392505050565b6000610d7c836001600160a01b038416610faf565b6001600160a01b038316610e4f576000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610df3576040519150601f19603f3d011682016040523d82523d6000602084013e610df8565b606091505b5050905080610e495760405162461bcd60e51b815260206004820152601c60248201527f4e41544956455f544f4b454e5f5452414e534645525f4641494c45440000000060448201526064016104f6565b50505050565b6105106001600160a01b03841683836110cc565b6000610d7c8383611175565b6001600160a01b03811660009081526001830160205260408120541515610d7c565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038316610f4b573481146105105760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f4d53475f56414c554500000000000000000000000000000060448201526064016104f6565b6105106001600160a01b0384168330846111ad565b6000818152600183016020526040812054610fa7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105a1565b5060006105a1565b600081815260018301602052604081205480156110c2576000610fd36001836116a0565b8554909150600090610fe7906001906116a0565b905081811461106857600086600001828154811061101557634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061104657634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061108757634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105a1565b60009150506105a1565b6040516001600160a01b0383166024820152604481018290526105109084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526111fe565b600082600001828154811061119a57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b6040516001600160a01b0380851660248301528316604482015260648101829052610e499085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611111565b6000611253826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112e39092919063ffffffff16565b80519091501561051057808060200190518101906112719190611561565b6105105760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104f6565b60606107358484600085856001600160a01b0385163b6113455760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f6565b600080866001600160a01b0316858760405161136191906115ad565b60006040518083038185875af1925050503d806000811461139e576040519150601f19603f3d011682016040523d82523d6000602084013e6113a3565b606091505b50915091506113b38282866113be565b979650505050505050565b606083156113cd575081610d7c565b8251156113dd5782518084602001fd5b8160405162461bcd60e51b81526004016104f69190611616565b80356001600160a01b038116811461140e57600080fd5b919050565b600060208284031215611424578081fd5b610d7c826113f7565b60008060008060808587031215611442578283fd5b61144b856113f7565b9350611459602086016113f7565b925060408501359150606085013567ffffffffffffffff8082111561147c578283fd5b818701915087601f83011261148f578283fd5b8135818111156114a1576114a1611714565b604051601f8201601f19908116603f011681019083821181831017156114c9576114c9611714565b816040528281528a60208487010111156114e1578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611514578182fd5b61151d836113f7565b9150602083013561152d8161172a565b809150509250929050565b6000806040838503121561154a578182fd5b611553836113f7565b946020939093013593505050565b600060208284031215611572578081fd5b8151610d7c8161172a565b60006020828403121561158e578081fd5b5035919050565b6000602082840312156115a6578081fd5b5051919050565b600082516115bf8184602087016116b7565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561160a5783516001600160a01b0316835292840192918401916001016115e5565b50909695505050505050565b60208152600082518060208401526116358160408501602087016116b7565b601f01601f19169190910160400192915050565b6000821982111561165c5761165c6116fe565b500190565b60008261167c57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561169b5761169b6116fe565b500290565b6000828210156116b2576116b26116fe565b500390565b60005b838110156116d25781810151838201526020016116ba565b83811115610e495750506000910152565b60006000198214156116f7576116f76116fe565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461059157600080fdfea264697066735822122017423c44f27a2eea5b9850fd5896b394be9a026a19694011f21f1d7c0802e6bb64736f6c63430008040033";

export class HPHealing__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HPHealing> {
    return super.deploy(
      _nftMetadataRegistry,
      overrides || {}
    ) as Promise<HPHealing>;
  }
  getDeployTransaction(
    _nftMetadataRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nftMetadataRegistry, overrides || {});
  }
  attach(address: string): HPHealing {
    return super.attach(address) as HPHealing;
  }
  connect(signer: Signer): HPHealing__factory {
    return super.connect(signer) as HPHealing__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HPHealingInterface {
    return new utils.Interface(_abi) as HPHealingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HPHealing {
    return new Contract(address, _abi, signerOrProvider) as HPHealing;
  }
}
