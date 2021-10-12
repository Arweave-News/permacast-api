/**
 * A simple, in-memory cache, with keys being transaction ids (e.g. contract transaction id).
 */
export class MemCache {
    constructor() {
        this.storage = {};
    }
    clearAll() {
        Object.keys(this.storage).forEach((key) => {
            delete this.storage[key];
        });
    }
    contains(key) {
        return Object.prototype.hasOwnProperty.call(this.storage, key);
    }
    get(key) {
        return this.storage[key];
    }
    put(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
}
//# sourceMappingURL=MemCache.js.map