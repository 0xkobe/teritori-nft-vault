/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniSafeERC20, UniSafeERC20Interface } from "../UniSafeERC20";

const _abi = [
  {
    inputs: [],
    name: "NATIVE_TOKEN",
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
];

const _bytecode =
  "0x609e610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806331f7d964146038575b600080fd5b603f600081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea2646970667358221220c928a77882e448336ab4c116c9ce5ffb31951efac5c12a3614b6aec9d9c1799d64736f6c63430008040033";

export class UniSafeERC20__factory extends ContractFactory {
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
  ): Promise<UniSafeERC20> {
    return super.deploy(overrides || {}) as Promise<UniSafeERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniSafeERC20 {
    return super.attach(address) as UniSafeERC20;
  }
  connect(signer: Signer): UniSafeERC20__factory {
    return super.connect(signer) as UniSafeERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniSafeERC20Interface {
    return new utils.Interface(_abi) as UniSafeERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniSafeERC20 {
    return new Contract(address, _abi, signerOrProvider) as UniSafeERC20;
  }
}
