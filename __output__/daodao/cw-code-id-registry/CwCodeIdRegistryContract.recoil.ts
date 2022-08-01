/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { Addr, PaymentInfo, Uint128, ConfigResponse, ExecuteMsg, Binary, Cw20ReceiveMsg, GetRegistrationResponse, Registration, InfoForCodeIdResponse, InstantiateMsg, ListRegistrationsResponse, QueryMsg, ReceiveMsg } from "./CwCodeIdRegistryContract";
import { CwCodeIdRegistryQueryClient } from "./CwCodeIdRegistryContract.ts";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<CwCodeIdRegistryQueryClient, QueryClientParams>({
  key: "cwCodeIdRegistryQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new CwCodeIdRegistryQueryClient(client, contractAddress);
  }
});
export const configSelector = selectorFamily<ConfigResponse, QueryClientParams & {
  params: Parameters<CwCodeIdRegistryQueryClient["config"]>;
}>({
  key: "cwCodeIdRegistryConfig",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.config(...params);
  }
});
export const getRegistrationSelector = selectorFamily<GetRegistrationResponse, QueryClientParams & {
  params: Parameters<CwCodeIdRegistryQueryClient["getRegistration"]>;
}>({
  key: "cwCodeIdRegistryGetRegistration",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.getRegistration(...params);
  }
});
export const infoForCodeIdSelector = selectorFamily<InfoForCodeIdResponse, QueryClientParams & {
  params: Parameters<CwCodeIdRegistryQueryClient["infoForCodeId"]>;
}>({
  key: "cwCodeIdRegistryInfoForCodeId",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.infoForCodeId(...params);
  }
});
export const listRegistrationsSelector = selectorFamily<ListRegistrationsResponse, QueryClientParams & {
  params: Parameters<CwCodeIdRegistryQueryClient["listRegistrations"]>;
}>({
  key: "cwCodeIdRegistryListRegistrations",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.listRegistrations(...params);
  }
});