import { ISettingsParam } from 'tslog';
import { RedStoneLogger } from '../RedStoneLogger';
import { ILoggerFactory, LogLevel } from '../..';
export declare const defaultLoggerOptions: ISettingsParam;
/**
 * A wrapper around "tslog" logging library that allows to change logging settings at runtime
 * (for each registered module independently, or globally - for all loggers).
 */
export declare class TsLogFactory implements ILoggerFactory {
    private readonly registeredLoggers;
    private readonly registeredOptions;
    private defaultOptions;
    constructor();
    setOptions(newOptions: ISettingsParam, moduleName?: string): void;
    getOptions(moduleName?: string): ISettingsParam;
    logLevel(level: LogLevel, moduleName?: string): void;
    create(moduleName?: string): RedStoneLogger;
}
//# sourceMappingURL=TsLogFactory.d.ts.map