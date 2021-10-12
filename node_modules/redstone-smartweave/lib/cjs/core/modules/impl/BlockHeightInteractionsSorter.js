"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockHeightInteractionsSorter = void 0;
/**
 * an implementation based on https://github.com/ArweaveTeam/SmartWeave/pull/82
 */
class BlockHeightInteractionsSorter {
    async sort(transactions) {
        const copy = [...transactions];
        return copy.sort((a, b) => a.node.block.height - b.node.block.height || a.node.id.localeCompare(b.node.id));
    }
}
exports.BlockHeightInteractionsSorter = BlockHeightInteractionsSorter;
//# sourceMappingURL=BlockHeightInteractionsSorter.js.map