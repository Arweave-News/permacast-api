import { GQLEdgeInterface, InteractionsSorter } from '../../..';
/**
 * an implementation based on https://github.com/ArweaveTeam/SmartWeave/pull/82
 */
export declare class BlockHeightInteractionsSorter implements InteractionsSorter {
    sort(transactions: GQLEdgeInterface[]): Promise<GQLEdgeInterface[]>;
}
//# sourceMappingURL=BlockHeightInteractionsSorter.d.ts.map