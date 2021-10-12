"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockHeightCacheResult = exports.BlockHeightKey = void 0;
class BlockHeightKey {
    constructor(cacheKey, blockHeight) {
        this.cacheKey = cacheKey;
        this.blockHeight = blockHeight;
    }
}
exports.BlockHeightKey = BlockHeightKey;
// tslint:disable-next-line:max-classes-per-file
class BlockHeightCacheResult {
    constructor(cachedHeight, cachedValue) {
        this.cachedHeight = cachedHeight;
        this.cachedValue = cachedValue;
    }
}
exports.BlockHeightCacheResult = BlockHeightCacheResult;
//# sourceMappingURL=BlockHeightSwCache.js.map