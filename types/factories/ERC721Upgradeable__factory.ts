/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061139a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101c3578063b88d4fde146101d6578063c87b56dd146101e9578063e985e9c5146101fc57600080fd5b80636352211e1461018757806370a082311461019a57806395d89b41146101bb57600080fd5b8063095ea7b3116100bd578063095ea7b31461014c57806323b872dd1461016157806342842e0e1461017457600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004611192565b610238565b60405190151581526020015b60405180910390f35b6101146102d5565b6040516101039190611279565b61013461012f3660046111ca565b610367565b6040516001600160a01b039091168152602001610103565b61015f61015a366004611169565b61038e565b005b61015f61016f36600461101f565b6104c5565b61015f61018236600461101f565b61053c565b6101346101953660046111ca565b610557565b6101ad6101a8366004610fd3565b6105bc565b604051908152602001610103565b610114610656565b61015f6101d136600461112f565b610665565b61015f6101e436600461105a565b610674565b6101146101f73660046111ca565b6106f2565b6100f761020a366004610fed565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061029b57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102cf57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060606580546102e4906112e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610310906112e7565b801561035d5780601f106103325761010080835404028352916020019161035d565b820191906000526020600020905b81548152906001019060200180831161034057829003601f168201915b5050505050905090565b600061037282610766565b506000908152606960205260409020546001600160a01b031690565b600061039982610557565b9050806001600160a01b0316836001600160a01b031614156104285760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806104445750610444813361020a565b6104b65760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161041f565b6104c083836107cd565b505050565b6104cf3382610848565b6105315760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b606482015260840161041f565b6104c08383836108c7565b6104c083838360405180602001604052806000815250610674565b6000818152606760205260408120546001600160a01b0316806102cf5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161041f565b60006001600160a01b03821661063a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161041f565b506001600160a01b031660009081526068602052604090205490565b6060606680546102e4906112e7565b610670338383610ada565b5050565b61067e3383610848565b6106e05760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b606482015260840161041f565b6106ec84848484610ba9565b50505050565b60606106fd82610766565b600061071460408051602081019091526000815290565b90506000815111610734576040518060200160405280600081525061075f565b8061073e84610c32565b60405160200161074f92919061120e565b6040516020818303038152906040525b9392505050565b6000818152606760205260409020546001600160a01b03166107ca5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161041f565b50565b6000818152606960205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061080f82610557565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061085483610557565b9050806001600160a01b0316846001600160a01b0316148061089b57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b806108bf5750836001600160a01b03166108b484610367565b6001600160a01b0316145b949350505050565b826001600160a01b03166108da82610557565b6001600160a01b03161461093e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161041f565b6001600160a01b0382166109b95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161041f565b6109c68383836001610cea565b826001600160a01b03166109d982610557565b6001600160a01b031614610a3d5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161041f565b6000818152606960209081526040808320805473ffffffffffffffffffffffffffffffffffffffff199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610b3c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161041f565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610bb48484846108c7565b610bc084848484610d72565b6106ec5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161041f565b60606000610c3f83610ed5565b600101905060008167ffffffffffffffff811115610c6d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c97576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610cdd57610ce2565b610ca1565b509392505050565b60018111156106ec576001600160a01b03841615610d30576001600160a01b03841660009081526068602052604081208054839290610d2a9084906112a4565b90915550505b6001600160a01b038316156106ec576001600160a01b03831660009081526068602052604081208054839290610d6790849061128c565b909155505050505050565b60006001600160a01b0384163b15610eca57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610db690339089908890889060040161123d565b602060405180830381600087803b158015610dd057600080fd5b505af1925050508015610e00575060408051601f3d908101601f19168201909252610dfd918101906111ae565b60015b610eb0573d808015610e2e576040519150601f19603f3d011682016040523d82523d6000602084013e610e33565b606091505b508051610ea85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161041f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108bf565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610f1e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610f4a576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f6857662386f26fc10000830492506010015b6305f5e1008310610f80576305f5e100830492506008015b6127108310610f9457612710830492506004015b60648310610fa6576064830492506002015b600a83106102cf5760010192915050565b80356001600160a01b0381168114610fce57600080fd5b919050565b600060208284031215610fe4578081fd5b61075f82610fb7565b60008060408385031215610fff578081fd5b61100883610fb7565b915061101660208401610fb7565b90509250929050565b600080600060608486031215611033578081fd5b61103c84610fb7565b925061104a60208501610fb7565b9150604084013590509250925092565b6000806000806080858703121561106f578081fd5b61107885610fb7565b935061108660208601610fb7565b925060408501359150606085013567ffffffffffffffff808211156110a9578283fd5b818701915087601f8301126110bc578283fd5b8135818111156110ce576110ce611338565b604051601f8201601f19908116603f011681019083821181831017156110f6576110f6611338565b816040528281528a602084870101111561110e578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611141578182fd5b61114a83610fb7565b91506020830135801515811461115e578182fd5b809150509250929050565b6000806040838503121561117b578182fd5b61118483610fb7565b946020939093013593505050565b6000602082840312156111a3578081fd5b813561075f8161134e565b6000602082840312156111bf578081fd5b815161075f8161134e565b6000602082840312156111db578081fd5b5035919050565b600081518084526111fa8160208601602086016112bb565b601f01601f19169290920160200192915050565b600083516112208184602088016112bb565b8351908301906112348183602088016112bb565b01949350505050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261126f60808301846111e2565b9695505050505050565b60208152600061075f60208301846111e2565b6000821982111561129f5761129f611322565b500190565b6000828210156112b6576112b6611322565b500390565b60005b838110156112d65781810151838201526020016112be565b838111156106ec5750506000910152565b600181811c908216806112fb57607f821691505b6020821081141561131c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146107ca57600080fdfea2646970667358221220dc2528744d64f6455c76b4075b145e623e1ac4be206e8e7341af35b12033081b64736f6c63430008040033";

export class ERC721Upgradeable__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}
