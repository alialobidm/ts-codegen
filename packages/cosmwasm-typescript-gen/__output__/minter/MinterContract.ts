/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface ConfigResponse {
  admin: string;
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_address: string;
  sg721_code_id: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: string | null;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type Addr = string;
export interface Config {
  admin: Addr;
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_code_id: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: Addr | null;
  [k: string]: unknown;
}
export type Decimal = string;
export interface InstantiateMsg {
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_code_id: number;
  sg721_instantiate_msg: InstantiateMsg1;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: string | null;
  [k: string]: unknown;
}
export interface InstantiateMsg1 {
  collection_info: CollectionInfoFor_RoyaltyInfoResponse;
  minter: string;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface CollectionInfoFor_RoyaltyInfoResponse {
  creator: string;
  description: string;
  external_link?: string | null;
  image: string;
  royalty_info?: RoyaltyInfoResponse | null;
  [k: string]: unknown;
}
export interface RoyaltyInfoResponse {
  payment_address: string;
  share: Decimal;
  [k: string]: unknown;
}
export interface MinterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  mintableNumTokens: () => Promise<MintableNumTokensResponse>;
  startTime: () => Promise<StartTimeResponse>;
  mintPrice: () => Promise<MintPriceResponse>;
  mintCount: ({
    address
  }: {
    address: string;
  }) => Promise<MintCountResponse>;
}
export class MinterQueryClient implements MinterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.mintableNumTokens = this.mintableNumTokens.bind(this);
    this.startTime = this.startTime.bind(this);
    this.mintPrice = this.mintPrice.bind(this);
    this.mintCount = this.mintCount.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  mintableNumTokens = async (): Promise<MintableNumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mintable_num_tokens: {}
    });
  };
  startTime = async (): Promise<StartTimeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      start_time: {}
    });
  };
  mintPrice = async (): Promise<MintPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_price: {}
    });
  };
  mintCount = async ({
    address
  }: {
    address: string;
  }): Promise<MintCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_count: {
        address
      }
    });
  };
}
export interface MinterInterface extends MinterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mint: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  withdraw: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class MinterClient extends MinterQueryClient implements MinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  mint = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {}
    }, fee, memo, funds);
  };
  setWhitelist = async ({
    whitelist
  }: {
    whitelist: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_whitelist: {
        whitelist
      }
    }, fee, memo, funds);
  };
  updateStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee, memo, funds);
  };
  updatePerAddressLimit = async ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {
        per_address_limit: perAddressLimit
      }
    }, fee, memo, funds);
  };
  mintTo = async ({
    recipient
  }: {
    recipient: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_to: {
        recipient
      }
    }, fee, memo, funds);
  };
  mintFor = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_for: {
        recipient,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  withdraw = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {}
    }, fee, memo, funds);
  };
}