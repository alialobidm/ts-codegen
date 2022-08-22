/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForEmpty, Binary, MintMsgForEmpty, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsg, TokensResponse } from "./Sg721.types";
import { Sg721QueryClient } from "./Sg721.client";
export interface Sg721ReactQuery<TResponse, TData = TResponse> {
  client: Sg721QueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface Sg721CollectionInfoQuery<TData> extends Sg721ReactQuery<CollectionInfoResponse, TData> {}
export function useSg721CollectionInfoQuery<TData = CollectionInfoResponse>({
  client,
  options
}: Sg721CollectionInfoQuery<TData>) {
  return useQuery<CollectionInfoResponse, Error, TData>(["sg721CollectionInfo", client.contractAddress], () => client.collectionInfo(), options);
}
export interface Sg721MinterQuery<TData> extends Sg721ReactQuery<MinterResponse, TData> {}
export function useSg721MinterQuery<TData = MinterResponse>({
  client,
  options
}: Sg721MinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(["sg721Minter", client.contractAddress], () => client.minter(), options);
}
export interface Sg721AllTokensQuery<TData> extends Sg721ReactQuery<AllTokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useSg721AllTokensQuery<TData = AllTokensResponse>({
  client,
  args,
  options
}: Sg721AllTokensQuery<TData>) {
  return useQuery<AllTokensResponse, Error, TData>(["sg721AllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721TokensQuery<TData> extends Sg721ReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useSg721TokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: Sg721TokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["sg721Tokens", client.contractAddress, JSON.stringify(args)], () => client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721AllNftInfoQuery<TData> extends Sg721ReactQuery<AllNftInfoResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721AllNftInfoQuery<TData = AllNftInfoResponse>({
  client,
  args,
  options
}: Sg721AllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponse, Error, TData>(["sg721AllNftInfo", client.contractAddress, JSON.stringify(args)], () => client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721NftInfoQuery<TData> extends Sg721ReactQuery<NftInfoResponse, TData> {
  args: {
    tokenId: string;
  };
}
export function useSg721NftInfoQuery<TData = NftInfoResponse>({
  client,
  args,
  options
}: Sg721NftInfoQuery<TData>) {
  return useQuery<NftInfoResponse, Error, TData>(["sg721NftInfo", client.contractAddress, JSON.stringify(args)], () => client.nftInfo({
    tokenId: args.tokenId
  }), options);
}
export interface Sg721ContractInfoQuery<TData> extends Sg721ReactQuery<ContractInfoResponse, TData> {}
export function useSg721ContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: Sg721ContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(["sg721ContractInfo", client.contractAddress], () => client.contractInfo(), options);
}
export interface Sg721NumTokensQuery<TData> extends Sg721ReactQuery<NumTokensResponse, TData> {}
export function useSg721NumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: Sg721NumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(["sg721NumTokens", client.contractAddress], () => client.numTokens(), options);
}
export interface Sg721AllOperatorsQuery<TData> extends Sg721ReactQuery<AllOperatorsResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useSg721AllOperatorsQuery<TData = AllOperatorsResponse>({
  client,
  args,
  options
}: Sg721AllOperatorsQuery<TData>) {
  return useQuery<AllOperatorsResponse, Error, TData>(["sg721AllOperators", client.contractAddress, JSON.stringify(args)], () => client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721ApprovalsQuery<TData> extends Sg721ReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721ApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: Sg721ApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(["sg721Approvals", client.contractAddress, JSON.stringify(args)], () => client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721ApprovalQuery<TData> extends Sg721ReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function useSg721ApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: Sg721ApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(["sg721Approval", client.contractAddress, JSON.stringify(args)], () => client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721OwnerOfQuery<TData> extends Sg721ReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721OwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: Sg721OwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(["sg721OwnerOf", client.contractAddress, JSON.stringify(args)], () => client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}