/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./Factory.types";
import { FactoryQueryClient } from "./Factory.client";
export interface FactoryReactQuery<TResponse, TData = TResponse> {
  client: FactoryQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface FactoryAdminAddrQuery<TData> extends FactoryReactQuery<AdminAddrResponse, TData> {}
export function useFactoryAdminAddrQuery<TData = AdminAddrResponse>({
  client,
  options
}: FactoryAdminAddrQuery<TData>) {
  return useQuery<AdminAddrResponse, Error, TData>(["factoryAdminAddr", client.contractAddress], () => client.adminAddr(), options);
}
export interface FactoryGovecAddrQuery<TData> extends FactoryReactQuery<GovecAddrResponse, TData> {}
export function useFactoryGovecAddrQuery<TData = GovecAddrResponse>({
  client,
  options
}: FactoryGovecAddrQuery<TData>) {
  return useQuery<GovecAddrResponse, Error, TData>(["factoryGovecAddr", client.contractAddress], () => client.govecAddr(), options);
}
export interface FactoryFeeQuery<TData> extends FactoryReactQuery<FeeResponse, TData> {}
export function useFactoryFeeQuery<TData = FeeResponse>({
  client,
  options
}: FactoryFeeQuery<TData>) {
  return useQuery<FeeResponse, Error, TData>(["factoryFee", client.contractAddress], () => client.fee(), options);
}
export interface FactoryCodeIdQuery<TData> extends FactoryReactQuery<CodeIdResponse, TData> {
  args: {
    ty: CodeIdType;
  };
}
export function useFactoryCodeIdQuery<TData = CodeIdResponse>({
  client,
  args,
  options
}: FactoryCodeIdQuery<TData>) {
  return useQuery<CodeIdResponse, Error, TData>(["factoryCodeId", client.contractAddress, JSON.stringify(args)], () => client.codeId({
    ty: args.ty
  }), options);
}
export interface FactoryWalletsOfQuery<TData> extends FactoryReactQuery<WalletsOfResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useFactoryWalletsOfQuery<TData = WalletsOfResponse>({
  client,
  args,
  options
}: FactoryWalletsOfQuery<TData>) {
  return useQuery<WalletsOfResponse, Error, TData>(["factoryWalletsOf", client.contractAddress, JSON.stringify(args)], () => client.walletsOf({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface FactoryWalletsQuery<TData> extends FactoryReactQuery<WalletsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: WalletQueryPrefix;
  };
}
export function useFactoryWalletsQuery<TData = WalletsResponse>({
  client,
  args,
  options
}: FactoryWalletsQuery<TData>) {
  return useQuery<WalletsResponse, Error, TData>(["factoryWallets", client.contractAddress, JSON.stringify(args)], () => client.wallets({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}