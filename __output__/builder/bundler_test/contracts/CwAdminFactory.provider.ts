/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { CwAdminFactoryClient, CwAdminFactoryQueryClient } from "./CwAdminFactory.client";
import { CwAdminFactoryMessageComposer } from "./CwAdminFactory.message-composer";
export class CwAdminFactory extends ContractBase<CwAdminFactoryClient, CwAdminFactoryQueryClient, CwAdminFactoryMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, CwAdminFactoryClient, CwAdminFactoryQueryClient, CwAdminFactoryMessageComposer);
  }

}