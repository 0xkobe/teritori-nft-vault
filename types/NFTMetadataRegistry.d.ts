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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface NFTMetadataRegistryInterface extends ethers.utils.Interface {
  functions: {
    "initialize()": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "metadata(address,bytes32,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "queryMetadataKey(string)": FunctionFragment;
    "queryNftMetadata(address,string,uint256)": FunctionFragment;
    "registerNftMegadata(address,bytes32,uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdmin(address[],bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "metadata",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryMetadataKey",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "queryNftMetadata",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerNftMegadata",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryMetadataKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryNftMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerNftMegadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class NFTMetadataRegistry extends BaseContract {
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

  interface: NFTMetadataRegistryInterface;

  functions: {
    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAdmin(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    metadata(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    queryMetadataKey(key: string, overrides?: CallOverrides): Promise<[string]>;

    queryNftMetadata(
      collection: string,
      key: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "registerNftMegadata(address,bytes32,uint256,uint256)"(
      collection: string,
      metadata_key: BytesLike,
      tokenId: BigNumberish,
      stanima: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerNftMegadata(address,bytes32,uint256[],uint256[])"(
      collection: string,
      metadata_key: BytesLike,
      tokenIdArray: BigNumberish[],
      stanimaArray: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      _admins: string[],
      _isAdmin: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAdmin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  metadata(
    arg0: string,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  queryMetadataKey(key: string, overrides?: CallOverrides): Promise<string>;

  queryNftMetadata(
    collection: string,
    key: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "registerNftMegadata(address,bytes32,uint256,uint256)"(
    collection: string,
    metadata_key: BytesLike,
    tokenId: BigNumberish,
    stanima: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerNftMegadata(address,bytes32,uint256[],uint256[])"(
    collection: string,
    metadata_key: BytesLike,
    tokenIdArray: BigNumberish[],
    stanimaArray: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    _admins: string[],
    _isAdmin: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(overrides?: CallOverrides): Promise<void>;

    isAdmin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    metadata(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    queryMetadataKey(key: string, overrides?: CallOverrides): Promise<string>;

    queryNftMetadata(
      collection: string,
      key: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerNftMegadata(address,bytes32,uint256,uint256)"(
      collection: string,
      metadata_key: BytesLike,
      tokenId: BigNumberish,
      stanima: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerNftMegadata(address,bytes32,uint256[],uint256[])"(
      collection: string,
      metadata_key: BytesLike,
      tokenIdArray: BigNumberish[],
      stanimaArray: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdmin(
      _admins: string[],
      _isAdmin: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

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
  };

  estimateGas: {
    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAdmin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    metadata(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    queryMetadataKey(
      key: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryNftMetadata(
      collection: string,
      key: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerNftMegadata(address,bytes32,uint256,uint256)"(
      collection: string,
      metadata_key: BytesLike,
      tokenId: BigNumberish,
      stanima: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerNftMegadata(address,bytes32,uint256[],uint256[])"(
      collection: string,
      metadata_key: BytesLike,
      tokenIdArray: BigNumberish[],
      stanimaArray: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdmin(
      _admins: string[],
      _isAdmin: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAdmin(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metadata(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryMetadataKey(
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryNftMetadata(
      collection: string,
      key: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "registerNftMegadata(address,bytes32,uint256,uint256)"(
      collection: string,
      metadata_key: BytesLike,
      tokenId: BigNumberish,
      stanima: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerNftMegadata(address,bytes32,uint256[],uint256[])"(
      collection: string,
      metadata_key: BytesLike,
      tokenIdArray: BigNumberish[],
      stanimaArray: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _admins: string[],
      _isAdmin: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
