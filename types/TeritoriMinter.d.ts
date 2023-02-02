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

interface TeritoriMinterInterface extends ethers.utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "currentSupply()": FunctionFragment;
    "mint(tuple[])": FunctionFragment;
    "mintWithMetadata(tuple[])": FunctionFragment;
    "minter()": FunctionFragment;
    "minterFee()": FunctionFragment;
    "nft()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestMint(address,uint256)": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "setConfig((uint256,address,uint256,uint256,uint256,uint256))": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "setMinterFee(uint256)": FunctionFragment;
    "setTokenURI(uint256,string)": FunctionFragment;
    "setWhitelist(uint256,address[],bool)": FunctionFragment;
    "setWhitelistConfig(uint256[],tuple[])": FunctionFragment;
    "startMint()": FunctionFragment;
    "tokenRequests(uint256)": FunctionFragment;
    "tokenRequestsCount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateReveal(bool,string)": FunctionFragment;
    "userMinted(address)": FunctionFragment;
    "userState(address)": FunctionFragment;
    "userWhitelisted(uint256,address)": FunctionFragment;
    "whitelistSize(uint256)": FunctionFragment;
    "whitelists(uint256)": FunctionFragment;
    "withdrawFund()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWithMetadata",
    values: [
      {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
        extension: {
          name: string;
          description: string;
          image: string;
          external_url: string;
          animation_url: string;
          attributes: { trait_type: string; value: string }[];
        };
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "minterFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      {
        maxSupply: BigNumberish;
        mintToken: string;
        mintStartTime: BigNumberish;
        whitelistCount: BigNumberish;
        publicMintPrice: BigNumberish;
        publicMintMax: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMinterFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenURI",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [BigNumberish, string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistConfig",
    values: [
      BigNumberish[],
      {
        mintMax: BigNumberish;
        mintPeriod: BigNumberish;
        mintPrice: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "startMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenRequests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenRequestsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateReveal",
    values: [boolean, string]
  ): string;
  encodeFunctionData(functionFragment: "userMinted", values: [string]): string;
  encodeFunctionData(functionFragment: "userState", values: [string]): string;
  encodeFunctionData(
    functionFragment: "userWhitelisted",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFund",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWithMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minterFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenRequestsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateReveal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userMinted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFund",
    data: BytesLike
  ): Result;

  events: {
    "MintRequest(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WithdrawFund(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MintRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFund"): EventFragment;
}

export type MintRequestEvent = TypedEvent<[string] & { user: string }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WithdrawFundEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export class TeritoriMinter extends BaseContract {
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

  interface: TeritoriMinterInterface;

  functions: {
    config(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxSupply: BigNumber;
        mintToken: string;
        mintStartTime: BigNumber;
        whitelistCount: BigNumber;
        publicMintPrice: BigNumber;
        publicMintMax: BigNumber;
      }
    >;

    currentSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintWithMetadata(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
        extension: {
          name: string;
          description: string;
          image: string;
          external_url: string;
          animation_url: string;
          attributes: { trait_type: string; value: string }[];
        };
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    minterFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestMint(
      user: string,
      count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      newConfig: {
        maxSupply: BigNumberish;
        mintToken: string;
        mintStartTime: BigNumberish;
        whitelistCount: BigNumberish;
        publicMintPrice: BigNumberish;
        publicMintMax: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinterFee(
      newMinterFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenURI(
      tokenId: BigNumberish,
      tokenUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
      whitelistPhase: BigNumberish,
      users: string[],
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelistConfig(
      whitelistPhases: BigNumberish[],
      newWhitelistMintConfigs: {
        mintMax: BigNumberish;
        mintPeriod: BigNumberish;
        mintPrice: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startMint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenRequestsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateReveal(
      _revealed: boolean,
      _revealURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userMinted(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    userState(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        currentPhase: BigNumber;
        mintPrice: BigNumber;
        userCanMint: boolean;
      }
    >;

    userWhitelisted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    whitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    whitelists(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        mintMax: BigNumber;
        mintPeriod: BigNumber;
        mintPrice: BigNumber;
      }
    >;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  config(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      maxSupply: BigNumber;
      mintToken: string;
      mintStartTime: BigNumber;
      whitelistCount: BigNumber;
      publicMintPrice: BigNumber;
      publicMintMax: BigNumber;
    }
  >;

  currentSupply(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    mintData: {
      tokenId: BigNumberish;
      royaltyReceiver: string;
      royaltyPercentage: BigNumberish;
      tokenUri: string;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintWithMetadata(
    mintData: {
      tokenId: BigNumberish;
      royaltyReceiver: string;
      royaltyPercentage: BigNumberish;
      tokenUri: string;
      extension: {
        name: string;
        description: string;
        image: string;
        external_url: string;
        animation_url: string;
        attributes: { trait_type: string; value: string }[];
      };
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minter(overrides?: CallOverrides): Promise<string>;

  minterFee(overrides?: CallOverrides): Promise<BigNumber>;

  nft(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestMint(
    user: string,
    count: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBaseURI(
    newBaseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    newConfig: {
      maxSupply: BigNumberish;
      mintToken: string;
      mintStartTime: BigNumberish;
      whitelistCount: BigNumberish;
      publicMintPrice: BigNumberish;
      publicMintMax: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinter(
    newMinter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinterFee(
    newMinterFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenURI(
    tokenId: BigNumberish,
    tokenUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelist(
    whitelistPhase: BigNumberish,
    users: string[],
    whitelisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelistConfig(
    whitelistPhases: BigNumberish[],
    newWhitelistMintConfigs: {
      mintMax: BigNumberish;
      mintPeriod: BigNumberish;
      mintPrice: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startMint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenRequests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  tokenRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateReveal(
    _revealed: boolean,
    _revealURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userMinted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  userState(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      currentPhase: BigNumber;
      mintPrice: BigNumber;
      userCanMint: boolean;
    }
  >;

  userWhitelisted(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistSize(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  whitelists(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      mintMax: BigNumber;
      mintPeriod: BigNumber;
      mintPrice: BigNumber;
    }
  >;

  withdrawFund(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxSupply: BigNumber;
        mintToken: string;
        mintStartTime: BigNumber;
        whitelistCount: BigNumber;
        publicMintPrice: BigNumber;
        publicMintMax: BigNumber;
      }
    >;

    currentSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    mintWithMetadata(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
        extension: {
          name: string;
          description: string;
          image: string;
          external_url: string;
          animation_url: string;
          attributes: { trait_type: string; value: string }[];
        };
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    minter(overrides?: CallOverrides): Promise<string>;

    minterFee(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestMint(
      user: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseURI(newBaseURI: string, overrides?: CallOverrides): Promise<void>;

    setConfig(
      newConfig: {
        maxSupply: BigNumberish;
        mintToken: string;
        mintStartTime: BigNumberish;
        whitelistCount: BigNumberish;
        publicMintPrice: BigNumberish;
        publicMintMax: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    setMinter(newMinter: string, overrides?: CallOverrides): Promise<void>;

    setMinterFee(
      newMinterFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenURI(
      tokenId: BigNumberish,
      tokenUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelist(
      whitelistPhase: BigNumberish,
      users: string[],
      whitelisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistConfig(
      whitelistPhases: BigNumberish[],
      newWhitelistMintConfigs: {
        mintMax: BigNumberish;
        mintPeriod: BigNumberish;
        mintPrice: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    startMint(overrides?: CallOverrides): Promise<void>;

    tokenRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateReveal(
      _revealed: boolean,
      _revealURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userMinted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userState(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        currentPhase: BigNumber;
        mintPrice: BigNumber;
        userCanMint: boolean;
      }
    >;

    userWhitelisted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelists(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        mintMax: BigNumber;
        mintPeriod: BigNumber;
        mintPrice: BigNumber;
      }
    >;

    withdrawFund(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MintRequest(address)"(
      user?: null
    ): TypedEventFilter<[string], { user: string }>;

    MintRequest(user?: null): TypedEventFilter<[string], { user: string }>;

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
    config(overrides?: CallOverrides): Promise<BigNumber>;

    currentSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintWithMetadata(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
        extension: {
          name: string;
          description: string;
          image: string;
          external_url: string;
          animation_url: string;
          attributes: { trait_type: string; value: string }[];
        };
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    minterFee(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestMint(
      user: string,
      count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      newConfig: {
        maxSupply: BigNumberish;
        mintToken: string;
        mintStartTime: BigNumberish;
        whitelistCount: BigNumberish;
        publicMintPrice: BigNumberish;
        publicMintMax: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinterFee(
      newMinterFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenURI(
      tokenId: BigNumberish,
      tokenUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelist(
      whitelistPhase: BigNumberish,
      users: string[],
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelistConfig(
      whitelistPhases: BigNumberish[],
      newWhitelistMintConfigs: {
        mintMax: BigNumberish;
        mintPeriod: BigNumberish;
        mintPrice: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startMint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateReveal(
      _revealed: boolean,
      _revealURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userMinted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userState(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userWhitelisted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelists(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintWithMetadata(
      mintData: {
        tokenId: BigNumberish;
        royaltyReceiver: string;
        royaltyPercentage: BigNumberish;
        tokenUri: string;
        extension: {
          name: string;
          description: string;
          image: string;
          external_url: string;
          animation_url: string;
          attributes: { trait_type: string; value: string }[];
        };
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minterFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestMint(
      user: string,
      count: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      newConfig: {
        maxSupply: BigNumberish;
        mintToken: string;
        mintStartTime: BigNumberish;
        whitelistCount: BigNumberish;
        publicMintPrice: BigNumberish;
        publicMintMax: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinterFee(
      newMinterFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenURI(
      tokenId: BigNumberish,
      tokenUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      whitelistPhase: BigNumberish,
      users: string[],
      whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistConfig(
      whitelistPhases: BigNumberish[],
      newWhitelistMintConfigs: {
        mintMax: BigNumberish;
        mintPeriod: BigNumberish;
        mintPrice: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startMint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenRequestsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateReveal(
      _revealed: boolean,
      _revealURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userMinted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userState(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userWhitelisted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelists(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
