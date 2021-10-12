/**
 * an implementation based on https://github.com/ArweaveTeam/SmartWeave/pull/82
 */
export class BlockHeightInteractionsSorter {
    async sort(transactions) {
        const copy = [...transactions];
        return copy.sort((a, b) => a.node.block.height - b.node.block.height || a.node.id.localeCompare(b.node.id));
    }
}
//# sourceMappingURL=BlockHeightInteractionsSorter.js.map