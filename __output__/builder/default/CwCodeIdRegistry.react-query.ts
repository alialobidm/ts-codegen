/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Addr, PaymentInfo, Uint128, ConfigResponse, ExecuteMsg, Binary, Cw20ReceiveMsg, GetRegistrationResponse, Registration, InfoForCodeIdResponse, InstantiateMsg, ListRegistrationsResponse, QueryMsg, ReceiveMsg } from "./CwCodeIdRegistry.types";
import { CwCodeIdRegistryQueryClient } from "./CwCodeIdRegistry.client";
export interface CwCodeIdRegistryReactQuery<TResponse, TData = TResponse> {
  client: CwCodeIdRegistryQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface CwCodeIdRegistryListRegistrationsQuery<TData> extends CwCodeIdRegistryReactQuery<ListRegistrationsResponse, TData> {
  args: {
    chainId: string;
    name: string;
  };
}
export function useCwCodeIdRegistryListRegistrationsQuery<TData = ListRegistrationsResponse>({
  client,
  args,
  options
}: CwCodeIdRegistryListRegistrationsQuery<TData>) {
  return useQuery<ListRegistrationsResponse, Error, TData>(["cwCodeIdRegistryListRegistrations", client.contractAddress, JSON.stringify(args)], () => client.listRegistrations({
    chainId: args.chainId,
    name: args.name
  }), options);
}
export interface CwCodeIdRegistryInfoForCodeIdQuery<TData> extends CwCodeIdRegistryReactQuery<InfoForCodeIdResponse, TData> {
  args: {
    chainId: string;
    codeId: number;
  };
}
export function useCwCodeIdRegistryInfoForCodeIdQuery<TData = InfoForCodeIdResponse>({
  client,
  args,
  options
}: CwCodeIdRegistryInfoForCodeIdQuery<TData>) {
  return useQuery<InfoForCodeIdResponse, Error, TData>(["cwCodeIdRegistryInfoForCodeId", client.contractAddress, JSON.stringify(args)], () => client.infoForCodeId({
    chainId: args.chainId,
    codeId: args.codeId
  }), options);
}
export interface CwCodeIdRegistryGetRegistrationQuery<TData> extends CwCodeIdRegistryReactQuery<GetRegistrationResponse, TData> {
  args: {
    chainId: string;
    name: string;
    version?: string;
  };
}
export function useCwCodeIdRegistryGetRegistrationQuery<TData = GetRegistrationResponse>({
  client,
  args,
  options
}: CwCodeIdRegistryGetRegistrationQuery<TData>) {
  return useQuery<GetRegistrationResponse, Error, TData>(["cwCodeIdRegistryGetRegistration", client.contractAddress, JSON.stringify(args)], () => client.getRegistration({
    chainId: args.chainId,
    name: args.name,
    version: args.version
  }), options);
}
export interface CwCodeIdRegistryConfigQuery<TData> extends CwCodeIdRegistryReactQuery<ConfigResponse, TData> {}
export function useCwCodeIdRegistryConfigQuery<TData = ConfigResponse>({
  client,
  options
}: CwCodeIdRegistryConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(["cwCodeIdRegistryConfig", client.contractAddress], () => client.config(), options);
}