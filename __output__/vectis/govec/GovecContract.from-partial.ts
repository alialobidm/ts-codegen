/**
* This file was automatically generated by cosmwasm-typescript-gen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./GovecContract";
export interface GovecMessage {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  revertFreezeStatus: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  relay: ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  rotateUserKey: ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  addRelayer: ({
    newRelayerAddress
  }: {
    newRelayerAddress: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  removeRelayer: ({
    relayerAddress
  }: {
    relayerAddress: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  updateGuardians: ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  updateLabel: ({
    newLabel
  }: {
    newLabel: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
export class GovecMessageComposer implements GovecMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.execute = this.execute.bind(this);
    this.revertFreezeStatus = this.revertFreezeStatus.bind(this);
    this.relay = this.relay.bind(this);
    this.rotateUserKey = this.rotateUserKey.bind(this);
    this.addRelayer = this.addRelayer.bind(this);
    this.removeRelayer = this.removeRelayer.bind(this);
    this.updateGuardians = this.updateGuardians.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }

  execute = ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          execute: {
            msgs
          }
        })),
        funds
      })
    };
  };
  revertFreezeStatus = (funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revert_freeze_status: {}
        })),
        funds
      })
    };
  };
  relay = ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          relay: {
            transaction
          }
        })),
        funds
      })
    };
  };
  rotateUserKey = ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          rotate_user_key: {
            new_user_address: newUserAddress
          }
        })),
        funds
      })
    };
  };
  addRelayer = ({
    newRelayerAddress
  }: {
    newRelayerAddress: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_relayer: {
            new_relayer_address: newRelayerAddress
          }
        })),
        funds
      })
    };
  };
  removeRelayer = ({
    relayerAddress
  }: {
    relayerAddress: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_relayer: {
            relayer_address: relayerAddress
          }
        })),
        funds
      })
    };
  };
  updateGuardians = ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_guardians: {
            guardians,
            new_multisig_code_id: newMultisigCodeId
          }
        })),
        funds
      })
    };
  };
  updateLabel = ({
    newLabel
  }: {
    newLabel: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_label: {
            new_label: newLabel
          }
        })),
        funds
      })
    };
  };
}