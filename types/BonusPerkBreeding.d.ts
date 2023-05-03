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

interface BonusPerkBreedingInterface extends ethers.utils.Interface {
  functions: {
    "LUCK()": FunctionFragment;
    "PROTECTION()": FunctionFragment;
    "RARITY()": FunctionFragment;
    "STAMINA()": FunctionFragment;
    "bonusPerk()": FunctionFragment;
    "breed(uint256,uint256)": FunctionFragment;
    "breedConfig()": FunctionFragment;
    "breedList(uint256)": FunctionFragment;
    "breedRequestsCount()": FunctionFragment;
    "minter()": FunctionFragment;
    "nftMetadataRegistry()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "riot()": FunctionFragment;
    "setBreedConfig((uint256,uint256,address))": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "startBreed()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "userBreedList(address)": FunctionFragment;
    "withdrawFund()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "LUCK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PROTECTION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "RARITY", values?: undefined): string;
  encodeFunctionData(functionFragment: "STAMINA", values?: undefined): string;
  encodeFunctionData(functionFragment: "bonusPerk", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "breed",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "breedConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "breedList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "breedRequestsCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nftMetadataRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "riot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBreedConfig",
    values: [
      { startTime: BigNumberish; priceAmount: BigNumberish; currency: string }
    ]
  ): string;
  encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "startBreed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userBreedList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFund",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "LUCK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PROTECTION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RARITY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "STAMINA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bonusPerk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "breed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "breedConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "breedList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "breedRequestsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftMetadataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "riot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBreedConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBreed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userBreedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFund",
    data: BytesLike
  ): Result;

  events: {
    "Breed(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WithdrawFund(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Breed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFund"): EventFragment;
}

export type BreedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    riotTokenId: BigNumber;
    bonusPerkTokenId: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WithdrawFundEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export class BonusPerkBreeding extends BaseContract {
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

  interface: BonusPerkBreedingInterface;

  functions: {
    LUCK(overrides?: CallOverrides): Promise<[string]>;

    PROTECTION(overrides?: CallOverrides): Promise<[string]>;

    RARITY(overrides?: CallOverrides): Promise<[string]>;

    STAMINA(overrides?: CallOverrides): Promise<[string]>;

    bonusPerk(overrides?: CallOverrides): Promise<[string]>;

    breed(
      riotTokenId: BigNumberish,
      bonusPerkTokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    breedConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        startTime: BigNumber;
        priceAmount: BigNumber;
        currency: string;
      }
    >;

    breedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        owner: string;
        riotTokenId: BigNumber;
        bonusPerkTokenId: BigNumber;
      }
    >;

    breedRequestsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    riot(overrides?: CallOverrides): Promise<[string]>;

    setBreedConfig(
      newBreedConfig: {
        startTime: BigNumberish;
        priceAmount: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBreed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userBreedList(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  LUCK(overrides?: CallOverrides): Promise<string>;

  PROTECTION(overrides?: CallOverrides): Promise<string>;

  RARITY(overrides?: CallOverrides): Promise<string>;

  STAMINA(overrides?: CallOverrides): Promise<string>;

  bonusPerk(overrides?: CallOverrides): Promise<string>;

  breed(
    riotTokenId: BigNumberish,
    bonusPerkTokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  breedConfig(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      startTime: BigNumber;
      priceAmount: BigNumber;
      currency: string;
    }
  >;

  breedList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      owner: string;
      riotTokenId: BigNumber;
      bonusPerkTokenId: BigNumber;
    }
  >;

  breedRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

  minter(overrides?: CallOverrides): Promise<string>;

  nftMetadataRegistry(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  riot(overrides?: CallOverrides): Promise<string>;

  setBreedConfig(
    newBreedConfig: {
      startTime: BigNumberish;
      priceAmount: BigNumberish;
      currency: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinter(
    newMinter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBreed(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userBreedList(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  withdrawFund(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LUCK(overrides?: CallOverrides): Promise<string>;

    PROTECTION(overrides?: CallOverrides): Promise<string>;

    RARITY(overrides?: CallOverrides): Promise<string>;

    STAMINA(overrides?: CallOverrides): Promise<string>;

    bonusPerk(overrides?: CallOverrides): Promise<string>;

    breed(
      riotTokenId: BigNumberish,
      bonusPerkTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    breedConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        startTime: BigNumber;
        priceAmount: BigNumber;
        currency: string;
      }
    >;

    breedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        owner: string;
        riotTokenId: BigNumber;
        bonusPerkTokenId: BigNumber;
      }
    >;

    breedRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<string>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    riot(overrides?: CallOverrides): Promise<string>;

    setBreedConfig(
      newBreedConfig: {
        startTime: BigNumberish;
        priceAmount: BigNumberish;
        currency: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    setMinter(newMinter: string, overrides?: CallOverrides): Promise<void>;

    startBreed(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    userBreedList(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    withdrawFund(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Breed(address,uint256,uint256)"(
      user?: null,
      riotTokenId?: null,
      bonusPerkTokenId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; riotTokenId: BigNumber; bonusPerkTokenId: BigNumber }
    >;

    Breed(
      user?: null,
      riotTokenId?: null,
      bonusPerkTokenId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; riotTokenId: BigNumber; bonusPerkTokenId: BigNumber }
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

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "WithdrawFund(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    WithdrawFund(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    LUCK(overrides?: CallOverrides): Promise<BigNumber>;

    PROTECTION(overrides?: CallOverrides): Promise<BigNumber>;

    RARITY(overrides?: CallOverrides): Promise<BigNumber>;

    STAMINA(overrides?: CallOverrides): Promise<BigNumber>;

    bonusPerk(overrides?: CallOverrides): Promise<BigNumber>;

    breed(
      riotTokenId: BigNumberish,
      bonusPerkTokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    breedConfig(overrides?: CallOverrides): Promise<BigNumber>;

    breedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    breedRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    nftMetadataRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    riot(overrides?: CallOverrides): Promise<BigNumber>;

    setBreedConfig(
      newBreedConfig: {
        startTime: BigNumberish;
        priceAmount: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBreed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userBreedList(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LUCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROTECTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RARITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAMINA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusPerk(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    breed(
      riotTokenId: BigNumberish,
      bonusPerkTokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    breedConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    breedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    breedRequestsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftMetadataRegistry(
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

    riot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBreedConfig(
      newBreedConfig: {
        startTime: BigNumberish;
        priceAmount: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBreed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userBreedList(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
