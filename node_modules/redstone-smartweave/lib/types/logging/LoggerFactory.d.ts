import { LogLevel, RedStoneLogger } from './index';
export interface ILoggerFactory {
    setOptions(newOptions: any, moduleName?: string): void;
    getOptions(moduleName?: string): any;
    logLevel(level: LogLevel, moduleName?: string): void;
    create(moduleName?: string): RedStoneLogger;
}
export declare class LoggerFactory implements ILoggerFactory {
    static INST: ILoggerFactory;
    private constructor();
    setOptions(newOptions: any, moduleName?: string): void;
    getOptions(moduleName?: string): any;
    logLevel(level: LogLevel, moduleName?: string): void;
    create(moduleName?: string): RedStoneLogger;
    static use(logger: ILoggerFactory): void;
}
//# sourceMappingURL=LoggerFactory.d.ts.map