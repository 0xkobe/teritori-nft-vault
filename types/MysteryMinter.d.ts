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

interface MysteryMinterInterface extends ethers.utils.Interface {
  functions: {
    "claimMysteryBox()": FunctionFragment;
    "claimMysteryKey()": FunctionFragment;
    "distribute(uint256,address[],address[])": FunctionFragment;
    "distributeForDay(uint256)": FunctionFragment;
    "mysteryBox()": FunctionFragment;
    "mysteryBoxAirdrops(address)": FunctionFragment;
    "mysteryKey()": FunctionFragment;
    "mysteryKeyAirdrops(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimMysteryBox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimMysteryKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [BigNumberish, string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeForDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mysteryBox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mysteryBoxAirdrops",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mysteryKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mysteryKeyAirdrops",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimMysteryBox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimMysteryKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeForDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mysteryBox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mysteryBoxAirdrops",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mysteryKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mysteryKeyAirdrops",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class MysteryMinter extends BaseContract {
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

  interface: MysteryMinterInterface;

  functions: {
    claimMysteryBox(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimMysteryKey(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      day: BigNumberish,
      usersForMysteryBox: string[],
      usersForMysteryKey: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeForDay(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mysteryBox(overrides?: CallOverrides): Promise<[string]>;

    mysteryBoxAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mysteryKey(overrides?: CallOverrides): Promise<[string]>;

    mysteryKeyAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimMysteryBox(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimMysteryKey(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    day: BigNumberish,
    usersForMysteryBox: string[],
    usersForMysteryKey: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeForDay(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mysteryBox(overrides?: CallOverrides): Promise<string>;

  mysteryBoxAirdrops(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mysteryKey(overrides?: CallOverrides): Promise<string>;

  mysteryKeyAirdrops(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimMysteryBox(overrides?: CallOverrides): Promise<void>;

    claimMysteryKey(overrides?: CallOverrides): Promise<void>;

    distribute(
      day: BigNumberish,
      usersForMysteryBox: string[],
      usersForMysteryKey: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    distributeForDay(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mysteryBox(overrides?: CallOverrides): Promise<string>;

    mysteryBoxAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mysteryKey(overrides?: CallOverrides): Promise<string>;

    mysteryKeyAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
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
  };

  estimateGas: {
    claimMysteryBox(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimMysteryKey(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      day: BigNumberish,
      usersForMysteryBox: string[],
      usersForMysteryKey: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeForDay(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mysteryBox(overrides?: CallOverrides): Promise<BigNumber>;

    mysteryBoxAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mysteryKey(overrides?: CallOverrides): Promise<BigNumber>;

    mysteryKeyAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimMysteryBox(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimMysteryKey(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      day: BigNumberish,
      usersForMysteryBox: string[],
      usersForMysteryKey: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeForDay(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mysteryBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mysteryBoxAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mysteryKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mysteryKeyAirdrops(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
