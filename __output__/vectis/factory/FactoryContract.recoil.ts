/**
* This file was automatically generated by cosmwasm-typescript-gen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./FactoryContract";
import { FactoryQueryClient } from "./FactoryContract.ts";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<FactoryQueryClient | undefined, QueryClientParams>({
  key: "factoryQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    if (!client) return;
    return new FactoryQueryClient(client, contractAddress);
  }
});
export const walletsSelector = selectorFamily<WalletsResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["wallets"]>;
}>({
  key: "factoryWallets",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.wallets(...params);
  }
});
export const walletsOfSelector = selectorFamily<WalletsOfResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["walletsOf"]>;
}>({
  key: "factoryWalletsOf",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.walletsOf(...params);
  }
});
export const codeIdSelector = selectorFamily<CodeIdResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["codeId"]>;
}>({
  key: "factoryCodeId",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.codeId(...params);
  }
});
export const feeSelector = selectorFamily<FeeResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["fee"]>;
}>({
  key: "factoryFee",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.fee(...params);
  }
});
export const govecAddrSelector = selectorFamily<GovecAddrResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["govecAddr"]>;
}>({
  key: "factoryGovecAddr",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.govecAddr(...params);
  }
});
export const adminAddrSelector = selectorFamily<AdminAddrResponse | undefined, QueryClientParams & {
  params: Parameters<FactoryQueryClient["adminAddr"]>;
}>({
  key: "factoryAdminAddr",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.adminAddr(...params);
  }
});