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
  BonusPerkBreeding,
  BonusPerkBreedingInterface,
} from "../BonusPerkBreeding";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_riot",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bonusPerk",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftMetadataRegistry",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct BonusPerkBreeding.BreedConfig",
        name: "_breedConfig",
        type: "tuple",
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
        internalType: "uint256",
        name: "riotTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bonusPerkTokenId",
        type: "uint256",
      },
    ],
    name: "Breed",
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
    name: "LUCK",
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
    inputs: [],
    name: "PROTECTION",
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
    inputs: [],
    name: "STAMINA",
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
    inputs: [],
    name: "bonusPerk",
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
        internalType: "uint256",
        name: "riotTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bonusPerkTokenId",
        type: "uint256",
      },
    ],
    name: "breed",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "breedConfig",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
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
    name: "breedList",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "riotTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bonusPerkTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "breedRequestsCount",
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
    inputs: [],
    name: "riot",
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
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct BonusPerkBreeding.BreedConfig",
        name: "newBreedConfig",
        type: "tuple",
      },
    ],
    name: "setBreedConfig",
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
    inputs: [],
    name: "startBreed",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "user",
        type: "address",
      },
    ],
    name: "userBreedList",
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
    inputs: [],
    name: "withdrawFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d3738038062001d37833981016040819052620000349162000122565b6200003f33620000b5565b6000805460ff60a01b1916905560018055600380546001600160a01b039586166001600160a01b03199182161790915560048054948616948216949094179093556005805492851692841692909217909155805160065560208101516007556040015160088054919093169116179055620001da565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200011d57600080fd5b919050565b60008060008084860360c081121562000139578485fd5b620001448662000105565b9450620001546020870162000105565b9350620001646040870162000105565b92506060605f198201121562000178578182fd5b50604051606081016001600160401b0381118282101715620001a857634e487b7160e01b83526041600452602483fd5b6040526060860151815260808601516020820152620001ca60a0870162000105565b6040820152939692955090935050565b611b4d80620001ea6000396000f3fe6080604052600436106101755760003560e01c80638da5cb5b116100cb578063cb595cf31161007f578063e07fa3c111610059578063e07fa3c114610408578063f2fde38b1461041d578063fca3b5aa1461043d57600080fd5b8063cb595cf314610383578063d9ecad7b146103c8578063de8498a2146103db57600080fd5b8063af0066a0116100b0578063af0066a01461030d578063c5b9301614610322578063c9d32edb1461036e57600080fd5b80638da5cb5b146102cf5780638e4af17b146102ed57600080fd5b80634e235ac51161012d578063715018a611610107578063715018a614610290578063838c295d146102a55780638456cb59146102ba57600080fd5b80634e235ac5146102315780635c975abb14610246578063656791d61461027057600080fd5b80632c87572b1161015e5780632c87572b146101d75780633f4ba83a146101f7578063442e64201461020e57600080fd5b8063075461721461017a5780632a0eba30146101b7575b600080fd5b34801561018657600080fd5b5060025461019a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101c357600080fd5b5060045461019a906001600160a01b031681565b3480156101e357600080fd5b5060055461019a906001600160a01b031681565b34801561020357600080fd5b5061020c61045d565b005b34801561021a57600080fd5b5061022361051f565b6040519081526020016101ae565b34801561023d57600080fd5b50610223610563565b34801561025257600080fd5b50600054600160a01b900460ff1660405190151581526020016101ae565b34801561027c57600080fd5b5060035461019a906001600160a01b031681565b34801561029c57600080fd5b5061020c610591565b3480156102b157600080fd5b506102236105f5565b3480156102c657600080fd5b5061020c61061d565b3480156102db57600080fd5b506000546001600160a01b031661019a565b3480156102f957600080fd5b5061020c610308366004611940565b6106cc565b34801561031957600080fd5b5061020c610765565b34801561032e57600080fd5b5060065460075460085461034a9291906001600160a01b031683565b6040805193845260208401929092526001600160a01b0316908201526060016101ae565b34801561037a57600080fd5b50600954610223565b34801561038f57600080fd5b506103a361039e3660046119ad565b6107c5565b604080516001600160a01b0390941684526020840192909252908201526060016101ae565b61020c6103d63660046119dd565b610802565b3480156103e757600080fd5b506103fb6103f63660046118e8565b610d37565b6040516101ae9190611a1a565b34801561041457600080fd5b5061020c610da3565b34801561042957600080fd5b5061020c6104383660046118e8565b610f5e565b34801561044957600080fd5b5061020c6104583660046118e8565b611040565b6000546001600160a01b031633146104bc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600054600160a01b900460ff166105155760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104b3565b61051d6110c9565b565b60405160200161054a906020808252600790820152665374616d696e6160c81b604082015260600190565b6040516020818303038152906040528051906020012081565b60405160200161054a906020808252600a9082015269283937ba32b1ba34b7b760b11b604082015260600190565b6000546001600160a01b031633146105eb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b61051d600061116f565b60405160200161054a906020808252600490820152634c75636b60e01b604082015260600190565b6000546001600160a01b031633146106775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b600054600160a01b900460ff16156106c45760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b3565b61051d6111cc565b6000546001600160a01b031633146107265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b80516006556020810151600755604001516008805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055565b6000546001600160a01b031633146107bf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b42600655565b600981815481106107d557600080fd5b60009182526020909120600390910201805460018201546002909201546001600160a01b03909116925083565b600054600160a01b900460ff161561084f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b3565b600260015414156108a25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104b3565b6002600155600654158015906108ba57506006544210155b6109065760405162461bcd60e51b815260206004820152601160248201527f42524545445f4e4f545f5354415254454400000000000000000000000000000060448201526064016104b3565b600754600854610923916001600160a01b03909116903390611254565b60408051606081018252338082526020820185905281830184905260035492516331a9108f60e11b815260048101869052919290916001600160a01b0390911690636352211e9060240160206040518083038186803b15801561098557600080fd5b505afa158015610999573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bd9190611904565b6001600160a01b0316148015610a575750600480546040516331a9108f60e11b815291820184905233916001600160a01b0390911690636352211e9060240160206040518083038186803b158015610a1457600080fd5b505afa158015610a28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4c9190611904565b6001600160a01b0316145b610aa35760405162461bcd60e51b815260206004820152600960248201527f4e4f545f4f574e4552000000000000000000000000000000000000000000000060448201526064016104b3565b600354604051630852cd8d60e31b8152600481018590526001600160a01b03909116906342966c6890602401600060405180830381600087803b158015610ae957600080fd5b505af1158015610afd573d6000803e3d6000fd5b50505050610b4c604051602001610b2f906020808252600790820152665374616d696e6160c81b604082015260600190565b6040516020818303038152906040528051906020012084846112cb565b610b7d604051602001610b2f906020808252600a9082015269283937ba32b1ba34b7b760b11b604082015260600190565b610ba8604051602001610b2f906020808252600490820152634c75636b60e01b604082015260600190565b60048054604051630852cd8d60e31b81529182018490526001600160a01b0316906342966c6890602401600060405180830381600087803b158015610bec57600080fd5b505af1158015610c00573d6000803e3d6000fd5b50506009805460018082018355600083815286517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af6003909402938401805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169190911790556020808801517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b08501556040808901517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b190950194909455338252600a9052919091209154919350610cda925090611aa9565b8154600181018355600092835260209283902001556040805133815291820185905281018390527fba98b7f4d0873fd00cc6a3e0c32bbae8a106a12e09d2e6f26e13fab08ce0b6ef9060600160405180910390a150506001805550565b6001600160a01b0381166000908152600a6020908152604091829020805483518184028101840190945280845260609392830182828015610d9757602002820191906000526020600020905b815481526020019060010190808311610d83575b50505050509050919050565b6000546001600160a01b03163314610dfd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b6008546000906001600160a01b0316610e17575047610eae565b6008546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610e7357600080fd5b505afa158015610e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eab91906119c5565b90505b60008111610efe5760405162461bcd60e51b815260206004820152601160248201527f4e4f5f415641494c41424c455f46554e4400000000000000000000000000000060448201526064016104b3565b600854610f15906001600160a01b031633836114aa565b600854604080516001600160a01b039092168252602082018390527f09ad672d4e7c4892da934d1051932ebe9ec4b6ec8c3f40d569176db3e93e5abe910160405180910390a150565b6000546001600160a01b03163314610fb85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b6001600160a01b0381166110345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104b3565b61103d8161116f565b50565b6000546001600160a01b0316331461109a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b3565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600054600160a01b900460ff166111225760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104b3565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff16156112195760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b3565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111523390565b6001600160a01b0383166112b6573481146112b15760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f4d53475f56414c554500000000000000000000000000000060448201526064016104b3565b505050565b6112b16001600160a01b03841683308461156f565b60055460048054604051635047b18f60e11b81526001600160a01b03918216928101929092526024820186905260448201849052600092169063a08f631e9060640160206040518083038186803b15801561132557600080fd5b505afa158015611339573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135d91906119c5565b905080156114a457600554600354604051635047b18f60e11b81526001600160a01b0391821660048201526024810187905260448101869052600092919091169063a08f631e9060640160206040518083038186803b1580156113bf57600080fd5b505afa1580156113d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f791906119c5565b6005546003549192506001600160a01b03908116916310525f789116878761141f8787611a91565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526001600160a01b039094166004850152602484019290925260448301526064820152608401600060405180830381600087803b15801561148a57600080fd5b505af115801561149e573d6000803e3d6000fd5b50505050505b50505050565b6001600160a01b03831661155b576000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611505576040519150601f19603f3d011682016040523d82523d6000602084013e61150a565b606091505b50509050806114a45760405162461bcd60e51b815260206004820152601c60248201527f4e41544956455f544f4b454e5f5452414e534645525f4641494c45440000000060448201526064016104b3565b6112b16001600160a01b0384168383611620565b6040516001600160a01b03808516602483015283166044820152606481018290526114a49085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611669565b6040516001600160a01b0383166024820152604481018290526112b19084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115bc565b60006116be826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661174e9092919063ffffffff16565b8051909150156112b157808060200190518101906116dc9190611920565b6112b15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104b3565b606061175d8484600085611767565b90505b9392505050565b6060824710156117df5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104b3565b6001600160a01b0385163b6118365760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b3565b600080866001600160a01b0316858760405161185291906119fe565b60006040518083038185875af1925050503d806000811461188f576040519150601f19603f3d011682016040523d82523d6000602084013e611894565b606091505b50915091506118a48282866118af565b979650505050505050565b606083156118be575081611760565b8251156118ce5782518084602001fd5b8160405162461bcd60e51b81526004016104b39190611a5e565b6000602082840312156118f9578081fd5b813561176081611b02565b600060208284031215611915578081fd5b815161176081611b02565b600060208284031215611931578081fd5b81518015158114611760578182fd5b600060608284031215611951578081fd5b6040516060810181811067ffffffffffffffff8211171561198057634e487b7160e01b83526041600452602483fd5b8060405250823581526020830135602082015260408301356119a181611b02565b60408201529392505050565b6000602082840312156119be578081fd5b5035919050565b6000602082840312156119d6578081fd5b5051919050565b600080604083850312156119ef578081fd5b50508035926020909101359150565b60008251611a10818460208701611ac0565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611a5257835183529284019291840191600101611a36565b50909695505050505050565b6020815260008251806020840152611a7d816040850160208701611ac0565b601f01601f19169190910160400192915050565b60008219821115611aa457611aa4611aec565b500190565b600082821015611abb57611abb611aec565b500390565b60005b83811015611adb578181015183820152602001611ac3565b838111156114a45750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461103d57600080fdfea2646970667358221220ddcab449aa4328ab42ad76c18d4dcec85547dd701b8c053f94a5fdc9f02db5d364736f6c63430008040033";

export class BonusPerkBreeding__factory extends ContractFactory {
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
    _riot: string,
    _bonusPerk: string,
    _nftMetadataRegistry: string,
    _breedConfig: {
      startTime: BigNumberish;
      priceAmount: BigNumberish;
      currency: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BonusPerkBreeding> {
    return super.deploy(
      _riot,
      _bonusPerk,
      _nftMetadataRegistry,
      _breedConfig,
      overrides || {}
    ) as Promise<BonusPerkBreeding>;
  }
  getDeployTransaction(
    _riot: string,
    _bonusPerk: string,
    _nftMetadataRegistry: string,
    _breedConfig: {
      startTime: BigNumberish;
      priceAmount: BigNumberish;
      currency: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _riot,
      _bonusPerk,
      _nftMetadataRegistry,
      _breedConfig,
      overrides || {}
    );
  }
  attach(address: string): BonusPerkBreeding {
    return super.attach(address) as BonusPerkBreeding;
  }
  connect(signer: Signer): BonusPerkBreeding__factory {
    return super.connect(signer) as BonusPerkBreeding__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BonusPerkBreedingInterface {
    return new utils.Interface(_abi) as BonusPerkBreedingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BonusPerkBreeding {
    return new Contract(address, _abi, signerOrProvider) as BonusPerkBreeding;
  }
}
