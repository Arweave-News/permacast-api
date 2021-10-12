import { ConsoleLoggerFactory } from './web/ConsoleLoggerFactory';
export class LoggerFactory {
    constructor() {
        // not instantiable from outside
    }
    setOptions(newOptions, moduleName) {
        LoggerFactory.INST.setOptions(newOptions, moduleName);
    }
    getOptions(moduleName) {
        return LoggerFactory.INST.getOptions(moduleName);
    }
    logLevel(level, moduleName) {
        LoggerFactory.INST.logLevel(level, moduleName);
    }
    create(moduleName) {
        return LoggerFactory.INST.create(moduleName);
    }
    static use(logger) {
        LoggerFactory.INST = logger;
    }
}
LoggerFactory.INST = new ConsoleLoggerFactory();
//# sourceMappingURL=LoggerFactory.js.map