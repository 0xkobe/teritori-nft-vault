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

interface StakingInterface extends ethers.utils.Interface {
  functions: {
    "cooldownPeriod()": FunctionFragment;
    "getUserStakeList(address)": FunctionFragment;
    "isSupportedCollection(address)": FunctionFragment;
    "nftStakeIndex(address,uint256)": FunctionFragment;
    "nftStakeInfo(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCooldownPeriod(uint256)": FunctionFragment;
    "setSupportedCollection(address,bool)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "stakeDuration(address,uint256)": FunctionFragment;
    "stakeList(uint256)": FunctionFragment;
    "stakeListLength()": FunctionFragment;
    "stringToUint(string)": FunctionFragment;
    "supportedCollectionAt(uint256)": FunctionFragment;
    "supportedCollectionLength()": FunctionFragment;
    "supportedCollections(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "unstake(address,uint256)": FunctionFragment;
    "userStakeList(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cooldownPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStakeList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedCollection",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nftStakeIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nftStakeInfo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCooldownPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportedCollection",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeDuration",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeListLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stringToUint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedCollectionAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedCollectionLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportedCollections",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userStakeList",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "cooldownPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStakeList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftStakeIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCooldownPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupportedCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stringToUint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedCollectionAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedCollectionLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedCollections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userStakeList",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Stake(address,address,uint256,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Unstake(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstake"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type StakeEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    user: string;
    collection: string;
    tokenId: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UnstakeEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    collection: string;
    tokenId: BigNumber;
  }
>;

export class Staking extends BaseContract {
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

  interface: StakingInterface;

  functions: {
    cooldownPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserStakeList(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nftStakeIndex(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nftStakeInfo(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, boolean] & {
          owner: string;
          startTime: BigNumber;
          endTime: BigNumber;
          withdrawn: boolean;
        }
      ]
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        owner: string;
        startTime: BigNumber;
        endTime: BigNumber;
        withdrawn: boolean;
      }
    >;

    stakeListLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    stringToUint(
      s: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { result: BigNumber; hasError: boolean }>;

    supportedCollectionAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    supportedCollectionLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportedCollections(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { collections: string[] }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userStakeList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getUserStakeList(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  isSupportedCollection(
    nft: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nftStakeIndex(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nftStakeInfo(
    collection: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      owner: string;
      startTime: BigNumber;
      endTime: BigNumber;
      withdrawn: boolean;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCooldownPeriod(
    _cooldownPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSupportedCollection(
    collection: string,
    supported: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    collection: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeDuration(
    collection: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakeList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      owner: string;
      startTime: BigNumber;
      endTime: BigNumber;
      withdrawn: boolean;
    }
  >;

  stakeListLength(overrides?: CallOverrides): Promise<BigNumber>;

  stringToUint(
    s: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { result: BigNumber; hasError: boolean }>;

  supportedCollectionAt(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  supportedCollectionLength(overrides?: CallOverrides): Promise<BigNumber>;

  supportedCollections(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    collection: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userStakeList(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getUserStakeList(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nftStakeIndex(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftStakeInfo(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        owner: string;
        startTime: BigNumber;
        endTime: BigNumber;
        withdrawn: boolean;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        owner: string;
        startTime: BigNumber;
        endTime: BigNumber;
        withdrawn: boolean;
      }
    >;

    stakeListLength(overrides?: CallOverrides): Promise<BigNumber>;

    stringToUint(
      s: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { result: BigNumber; hasError: boolean }>;

    supportedCollectionAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    supportedCollectionLength(overrides?: CallOverrides): Promise<BigNumber>;

    supportedCollections(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    unstake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userStakeList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
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

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Stake(address,address,uint256,uint256,uint256)"(
      user?: null,
      collection?: null,
      tokenId?: null,
      startTime?: null,
      endTime?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        collection: string;
        tokenId: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
      }
    >;

    Stake(
      user?: null,
      collection?: null,
      tokenId?: null,
      startTime?: null,
      endTime?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        collection: string;
        tokenId: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
      }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unstake(address,address,uint256)"(
      user?: null,
      collection?: null,
      tokenId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; collection: string; tokenId: BigNumber }
    >;

    Unstake(
      user?: null,
      collection?: null,
      tokenId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; collection: string; tokenId: BigNumber }
    >;
  };

  estimateGas: {
    cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getUserStakeList(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftStakeIndex(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftStakeInfo(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakeListLength(overrides?: CallOverrides): Promise<BigNumber>;

    stringToUint(s: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportedCollectionAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportedCollectionLength(overrides?: CallOverrides): Promise<BigNumber>;

    supportedCollections(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userStakeList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cooldownPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserStakeList(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftStakeIndex(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftStakeInfo(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakeListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stringToUint(
      s: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedCollectionAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedCollectionLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedCollections(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      collection: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userStakeList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
