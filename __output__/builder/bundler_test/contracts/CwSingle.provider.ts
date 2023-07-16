/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { CwSingleClient, CwSingleQueryClient } from "./CwSingle.client";
import { CwSingleMessageComposer } from "./CwSingle.message-composer";
export class CwSingle extends ContractBase<CwSingleClient, CwSingleQueryClient, CwSingleMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, CwSingleClient, CwSingleQueryClient, CwSingleMessageComposer);
  }

}