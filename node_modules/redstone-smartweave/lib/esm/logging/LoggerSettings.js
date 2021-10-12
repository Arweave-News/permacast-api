export const LogLevelOrder = {
    silly: 0,
    trace: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5,
    fatal: 6
};
export function lvlToOrder(logLevel) {
    return LogLevelOrder[logLevel];
}
//# sourceMappingURL=LoggerSettings.js.map