"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLogFactory = exports.defaultLoggerOptions = void 0;
const path_1 = __importDefault(require("path"));
const tslog_1 = require("tslog");
exports.defaultLoggerOptions = {
    displayFunctionName: false,
    displayFilePath: 'hidden',
    displayLoggerName: true,
    dateTimeTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    minLevel: 'info',
    overwriteConsole: false
};
/**
 * A wrapper around "tslog" logging library that allows to change logging settings at runtime
 * (for each registered module independently, or globally - for all loggers).
 */
class TsLogFactory {
    constructor() {
        this.registeredLoggers = {};
        this.registeredOptions = {};
        this.defaultOptions = { ...exports.defaultLoggerOptions };
        this.setOptions = this.setOptions.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.create = this.create.bind(this);
        this.logLevel = this.logLevel.bind(this);
    }
    setOptions(newOptions, moduleName) {
        // if moduleName not specified
        if (!moduleName) {
            // update default options
            this.defaultOptions = {
                ...this.defaultOptions,
                ...newOptions
            };
            // update options for all already registered loggers
            Object.keys(this.registeredLoggers).forEach((key) => {
                this.registeredLoggers[key].setSettings({
                    ...this.registeredLoggers[key].settings,
                    ...newOptions
                });
            });
        }
        else {
            // if logger already registered
            if (this.registeredLoggers[moduleName]) {
                // update its options
                this.registeredLoggers[moduleName].setSettings({
                    ...this.registeredLoggers[moduleName].settings,
                    ...newOptions
                });
            }
            else {
                // if logger not yet registered - save options that will be used for its creation
                this.registeredOptions[moduleName] = {
                    ...this.defaultOptions,
                    ...newOptions
                };
            }
        }
    }
    getOptions(moduleName) {
        if (!moduleName) {
            return this.defaultOptions;
        }
        else {
            if (this.registeredLoggers[moduleName]) {
                return this.registeredLoggers[moduleName].settings;
            }
            else if (this.registeredOptions[moduleName]) {
                return this.registeredOptions[moduleName];
            }
            else {
                return this.defaultOptions;
            }
        }
    }
    logLevel(level, moduleName) {
        this.setOptions({ minLevel: level }, moduleName);
    }
    create(moduleName = 'SWC') {
        // in case of passing '__dirname' as moduleName - leaves only the file name without extension.
        const normalizedModuleName = path_1.default.basename(moduleName, path_1.default.extname(moduleName));
        if (!this.registeredLoggers[normalizedModuleName]) {
            const logger = new tslog_1.Logger({
                ...this.getOptions(normalizedModuleName),
                name: normalizedModuleName
            });
            this.registeredLoggers[normalizedModuleName] = logger;
        }
        return this.registeredLoggers[normalizedModuleName];
    }
}
exports.TsLogFactory = TsLogFactory;
//# sourceMappingURL=TsLogFactory.js.map