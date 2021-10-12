export function getTag(tx, name) {
    const tags = tx.get('tags');
    for (const tag of tags) {
        // decoding tags can throw on invalid utf8 data.
        try {
            if (tag.get('name', { decode: true, string: true }) === name) {
                return tag.get('value', { decode: true, string: true });
            }
            // eslint-disable-next-line no-empty
        }
        catch (e) { }
    }
    return false;
}
export function arrayToHex(arr) {
    let str = '';
    for (const a of arr) {
        str += ('0' + a.toString(16)).slice(-2);
    }
    return str;
}
//# sourceMappingURL=utils.js.map