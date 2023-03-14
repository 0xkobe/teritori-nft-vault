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

interface SquadStakingV3Interface extends ethers.utils.Interface {
  functions: {
    "BONUS_MULTIPLIER_BASE_POINT()": FunctionFragment;
    "STAMINA()": FunctionFragment;
    "bonusMultipliers(uint256)": FunctionFragment;
    "cooldownPeriod()": FunctionFragment;
    "isSupportedCollection(address)": FunctionFragment;
    "maxSquadCount()": FunctionFragment;
    "maxSquadSize()": FunctionFragment;
    "minSquadSize()": FunctionFragment;
    "nftMetadataRegistry()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBonusMultiplier(uint256[],uint256[])": FunctionFragment;
    "setCooldownPeriod(uint256)": FunctionFragment;
    "setMaxSquadCount(uint256)": FunctionFragment;
    "setSquadSize(uint256,uint256)": FunctionFragment;
    "setSupportedCollection(address,bool)": FunctionFragment;
    "stake(tuple[])": FunctionFragment;
    "stakeDuration(address,uint256,uint256)": FunctionFragment;
    "supportedCollectionAt(uint256)": FunctionFragment;
    "supportedCollectionLength()": FunctionFragment;
    "supportedCollections(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "userSquadCount(address)": FunctionFragment;
    "userSquadInfo(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BONUS_MULTIPLIER_BASE_POINT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "STAMINA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bonusMultipliers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cooldownPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedCollection",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxSquadCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxSquadSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minSquadSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftMetadataRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBonusMultiplier",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setCooldownPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxSquadCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSquadSize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportedCollection",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [{ collection: string; tokenId: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeDuration",
    values: [string, BigNumberish, BigNumberish]
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
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userSquadCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userSquadInfo",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BONUS_MULTIPLIER_BASE_POINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "STAMINA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bonusMultipliers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cooldownPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxSquadCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxSquadSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minSquadSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftMetadataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
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
    functionFragment: "setBonusMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCooldownPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxSquadCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSquadSize",
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
    functionFragment: "userSquadCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userSquadInfo",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Stake(address,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Unstake(address)": EventFragment;
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
  [string, BigNumber, BigNumber] & {
    user: string;
    startTime: BigNumber;
    endTime: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UnstakeEvent = TypedEvent<[string] & { user: string }>;

export class SquadStakingV3 extends BaseContract {
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

  interface: SquadStakingV3Interface;

  functions: {
    BONUS_MULTIPLIER_BASE_POINT(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    STAMINA(overrides?: CallOverrides): Promise<[string]>;

    bonusMultipliers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cooldownPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxSquadCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxSquadSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    minSquadSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBonusMultiplier(
      _size: BigNumberish[],
      _bonusMultipliers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxSquadCount(
      _maxSquadCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSquadSize(
      _minSquadSize: BigNumberish,
      _maxSquadSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      nfts: { collection: string; tokenId: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userSquadCount(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userSquadInfo(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber] & { collection: string; tokenId: BigNumber })[]
        ] & {
          index: BigNumber;
          startTime: BigNumber;
          endTime: BigNumber;
          nfts: ([string, BigNumber] & {
            collection: string;
            tokenId: BigNumber;
          })[];
        })[]
      ] & {
        squads: ([
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber] & { collection: string; tokenId: BigNumber })[]
        ] & {
          index: BigNumber;
          startTime: BigNumber;
          endTime: BigNumber;
          nfts: ([string, BigNumber] & {
            collection: string;
            tokenId: BigNumber;
          })[];
        })[];
      }
    >;
  };

  BONUS_MULTIPLIER_BASE_POINT(overrides?: CallOverrides): Promise<BigNumber>;

  STAMINA(overrides?: CallOverrides): Promise<string>;

  bonusMultipliers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  isSupportedCollection(
    nft: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxSquadCount(overrides?: CallOverrides): Promise<BigNumber>;

  maxSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

  minSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

  nftMetadataRegistry(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBonusMultiplier(
    _size: BigNumberish[],
    _bonusMultipliers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCooldownPeriod(
    _cooldownPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxSquadCount(
    _maxSquadCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSquadSize(
    _minSquadSize: BigNumberish,
    _maxSquadSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSupportedCollection(
    collection: string,
    supported: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    nfts: { collection: string; tokenId: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeDuration(
    collection: string,
    tokenId: BigNumberish,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userSquadCount(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  userSquadInfo(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    ([
      BigNumber,
      BigNumber,
      BigNumber,
      ([string, BigNumber] & { collection: string; tokenId: BigNumber })[]
    ] & {
      index: BigNumber;
      startTime: BigNumber;
      endTime: BigNumber;
      nfts: ([string, BigNumber] & {
        collection: string;
        tokenId: BigNumber;
      })[];
    })[]
  >;

  callStatic: {
    BONUS_MULTIPLIER_BASE_POINT(overrides?: CallOverrides): Promise<BigNumber>;

    STAMINA(overrides?: CallOverrides): Promise<string>;

    bonusMultipliers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxSquadCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

    minSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBonusMultiplier(
      _size: BigNumberish[],
      _bonusMultipliers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxSquadCount(
      _maxSquadCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSquadSize(
      _minSquadSize: BigNumberish,
      _maxSquadSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      nfts: { collection: string; tokenId: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    unstake(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userSquadCount(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userSquadInfo(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      ([
        BigNumber,
        BigNumber,
        BigNumber,
        ([string, BigNumber] & { collection: string; tokenId: BigNumber })[]
      ] & {
        index: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        nfts: ([string, BigNumber] & {
          collection: string;
          tokenId: BigNumber;
        })[];
      })[]
    >;
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

    "Stake(address,uint256,uint256)"(
      user?: null,
      startTime?: null,
      endTime?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; startTime: BigNumber; endTime: BigNumber }
    >;

    Stake(
      user?: null,
      startTime?: null,
      endTime?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; startTime: BigNumber; endTime: BigNumber }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unstake(address)"(
      user?: null
    ): TypedEventFilter<[string], { user: string }>;

    Unstake(user?: null): TypedEventFilter<[string], { user: string }>;
  };

  estimateGas: {
    BONUS_MULTIPLIER_BASE_POINT(overrides?: CallOverrides): Promise<BigNumber>;

    STAMINA(overrides?: CallOverrides): Promise<BigNumber>;

    bonusMultipliers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cooldownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSquadCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

    minSquadSize(overrides?: CallOverrides): Promise<BigNumber>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBonusMultiplier(
      _size: BigNumberish[],
      _bonusMultipliers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxSquadCount(
      _maxSquadCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSquadSize(
      _minSquadSize: BigNumberish,
      _maxSquadSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      nfts: { collection: string; tokenId: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userSquadCount(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userSquadInfo(user: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BONUS_MULTIPLIER_BASE_POINT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    STAMINA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusMultipliers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cooldownPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSupportedCollection(
      nft: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSquadCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxSquadSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minSquadSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftMetadataRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBonusMultiplier(
      _size: BigNumberish[],
      _bonusMultipliers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCooldownPeriod(
      _cooldownPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxSquadCount(
      _maxSquadCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSquadSize(
      _minSquadSize: BigNumberish,
      _maxSquadSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSupportedCollection(
      collection: string,
      supported: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      nfts: { collection: string; tokenId: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeDuration(
      collection: string,
      tokenId: BigNumberish,
      size: BigNumberish,
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
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userSquadCount(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userSquadInfo(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
