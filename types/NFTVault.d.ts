/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface NFTVaultInterface extends ethers.utils.Interface {
  functions: {
    "FTM()": FunctionFragment;
    "buyNFT(address,uint256)": FunctionFragment;
    "feeDenominator()": FunctionFragment;
    "feeNumerator()": FunctionFragment;
    "listNFT(address,uint256,(address,uint256))": FunctionFragment;
    "nftSales(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeNumerator(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateSaleOption(address,uint256,(address,uint256))": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawAll(address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "FTM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [string, BigNumberish, { token: string; amount: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "nftSales",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeNumerator",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSaleOption",
    values: [string, BigNumberish, { token: string; amount: BigNumberish }]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "FTM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftSales", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSaleOption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;

  events: {
    "BuyNFT(address,address,uint256)": EventFragment;
    "ListNFT(address,address,uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdateSaleOption(address,address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateSaleOption"): EventFragment;
}

export type BuyNFTEvent = TypedEvent<
  [string, string, BigNumber] & {
    buyer: string;
    nft: string;
    tokenId: BigNumber;
  }
>;

export type ListNFTEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    [string, BigNumber] & { token: string; amount: BigNumber }
  ] & {
    owner: string;
    nft: string;
    tokenId: BigNumber;
    saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type UpdateSaleOptionEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    [string, BigNumber] & { token: string; amount: BigNumber }
  ] & {
    owner: string;
    nft: string;
    tokenId: BigNumber;
    saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
  }
>;

export class NFTVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NFTVaultInterface;

  functions: {
    FTM(overrides?: CallOverrides): Promise<[string]>;

    buyNFT(
      nft: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    listNFT(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nftSales(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, [string, BigNumber] & { token: string; amount: BigNumber }] & {
        owner: string;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      _feeDenominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateSaleOption(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAll(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  FTM(overrides?: CallOverrides): Promise<string>;

  buyNFT(
    nft: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  listNFT(
    nft: string,
    tokenId: BigNumberish,
    saleOption: { token: string; amount: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nftSales(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, [string, BigNumber] & { token: string; amount: BigNumber }] & {
      owner: string;
      saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeNumerator(
    _feeNumerator: BigNumberish,
    _feeDenominator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateSaleOption(
    nft: string,
    tokenId: BigNumberish,
    saleOption: { token: string; amount: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAll(
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FTM(overrides?: CallOverrides): Promise<string>;

    buyNFT(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    nftSales(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, [string, BigNumber] & { token: string; amount: BigNumber }] & {
        owner: string;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      _feeDenominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateSaleOption(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(token: string, overrides?: CallOverrides): Promise<void>;

    withdrawAll(tokens: string[], overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BuyNFT(address,address,uint256)"(
      buyer?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { buyer: string; nft: string; tokenId: BigNumber }
    >;

    BuyNFT(
      buyer?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { buyer: string; nft: string; tokenId: BigNumber }
    >;

    "ListNFT(address,address,uint256,tuple)"(
      owner?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null,
      saleOption?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        [string, BigNumber] & { token: string; amount: BigNumber }
      ],
      {
        owner: string;
        nft: string;
        tokenId: BigNumber;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;

    ListNFT(
      owner?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null,
      saleOption?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        [string, BigNumber] & { token: string; amount: BigNumber }
      ],
      {
        owner: string;
        nft: string;
        tokenId: BigNumber;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "UpdateSaleOption(address,address,uint256,tuple)"(
      owner?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null,
      saleOption?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        [string, BigNumber] & { token: string; amount: BigNumber }
      ],
      {
        owner: string;
        nft: string;
        tokenId: BigNumber;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;

    UpdateSaleOption(
      owner?: string | null,
      nft?: string | null,
      tokenId?: BigNumberish | null,
      saleOption?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        [string, BigNumber] & { token: string; amount: BigNumber }
      ],
      {
        owner: string;
        nft: string;
        tokenId: BigNumber;
        saleOption: [string, BigNumber] & { token: string; amount: BigNumber };
      }
    >;
  };

  estimateGas: {
    FTM(overrides?: CallOverrides): Promise<BigNumber>;

    buyNFT(
      nft: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nftSales(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      _feeDenominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateSaleOption(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAll(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FTM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyNFT(
      nft: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listNFT(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nftSales(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      _feeDenominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateSaleOption(
      nft: string,
      tokenId: BigNumberish,
      saleOption: { token: string; amount: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
