import { ILoggerFactory, LoggerSettings, RedStoneLogger } from '../..';
import { LogLevel } from '../LoggerSettings';
export declare class ConsoleLoggerFactory implements ILoggerFactory {
    private registeredLoggers;
    private readonly registeredOptions;
    private defOptions;
    constructor();
    setOptions(newOptions: LoggerSettings, moduleName?: string): void;
    getOptions(moduleName?: string): LoggerSettings;
    logLevel(level: LogLevel, moduleName?: string): void;
    create(moduleName?: string): RedStoneLogger;
}
//# sourceMappingURL=ConsoleLoggerFactory.d.ts.map