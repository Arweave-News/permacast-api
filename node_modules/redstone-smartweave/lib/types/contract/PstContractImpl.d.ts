import { BalanceResult, HandlerBasedContract, PstContract, PstState, TransferInput } from './index';
export declare class PstContractImpl extends HandlerBasedContract<PstState> implements PstContract {
    currentBalance(target: string): Promise<BalanceResult>;
    currentState(): Promise<PstState>;
    transfer(transfer: TransferInput): Promise<string | null>;
    evolve(newSrcTxId: string): Promise<string | null>;
    saveNewSource(newContractSource: string): Promise<string | null>;
}
//# sourceMappingURL=PstContractImpl.d.ts.map