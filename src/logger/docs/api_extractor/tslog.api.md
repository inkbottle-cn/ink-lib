## API Report File for "tslog"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { InspectOptions } from 'util';

// @public
export interface ICodeFrame {
    // (undocumented)
    columnNumber: number | null;
    // (undocumented)
    firstLineNumber: number;
    // (undocumented)
    lineNumber: number;
    // (undocumented)
    linesAfter: string[];
    // (undocumented)
    linesBefore: string[];
    // (undocumented)
    relevantLine: string;
}

// @public
export interface IErrorObject {
    codeFrame?: ICodeFrame;
    details: object;
    isError: true;
    message: string;
    name: string;
    nativeError: Error;
    stack: IStackFrame[];
}

// @public
export interface IErrorObjectStringifiable extends IErrorObject {
    // (undocumented)
    errorString: string;
    // (undocumented)
    nativeError: never;
}

// @public
export interface IHighlightStyles {
    // (undocumented)
    bigint?: TUtilsInspectColors;
    // (undocumented)
    boolean?: TUtilsInspectColors;
    // (undocumented)
    date?: TUtilsInspectColors;
    // (undocumented)
    module?: TUtilsInspectColors;
    // (undocumented)
    name?: TUtilsInspectColors;
    // (undocumented)
    null?: TUtilsInspectColors;
    // (undocumented)
    number?: TUtilsInspectColors;
    // (undocumented)
    regexp?: TUtilsInspectColors;
    // (undocumented)
    special?: TUtilsInspectColors;
    // (undocumented)
    string?: TUtilsInspectColors;
    // (undocumented)
    symbol?: TUtilsInspectColors;
    // (undocumented)
    undefined?: TUtilsInspectColors;
}

// @public
export interface ILogLevel {
    // (undocumented)
    0: "silly";
    // (undocumented)
    1: "trace";
    // (undocumented)
    2: "debug";
    // (undocumented)
    3: "info";
    // (undocumented)
    4: "warn";
    // (undocumented)
    5: "error";
    // (undocumented)
    6: "fatal";
}

// @public
export interface ILogObject extends IStackFrame {
    argumentsArray: (IErrorObject | unknown)[];
    date: Date;
    hostname: string;
    instanceName?: string;
    loggerName?: string;
    logLevel: TLogLevelName;
    logLevelId: TLogLevelId;
    requestId?: string;
    stack?: IStackFrame[];
    toJSON: () => ILogObjectStringifiable;
}

// @public
export interface ILogObjectStringifiable extends ILogObject {
    // (undocumented)
    argumentsArray: (IErrorObjectStringifiable | string)[];
}

// @public
export interface ISettings extends ISettingsParam {
    // (undocumented)
    dateTimePattern: string;
    // (undocumented)
    dateTimeTimezone: string;
    // (undocumented)
    displayDateTime: boolean;
    // (undocumented)
    displayFilePath: "hidden" | "displayAll" | "hideNodeModulesOnly";
    // (undocumented)
    displayFunctionName: boolean;
    // (undocumented)
    displayInstanceName: boolean;
    // (undocumented)
    displayLoggerName?: boolean;
    // (undocumented)
    displayLogLevel: boolean;
    // (undocumented)
    displayRequestId: boolean;
    // (undocumented)
    displayTypes: boolean;
    // (undocumented)
    exposeErrorCodeFrame: boolean;
    // (undocumented)
    exposeErrorCodeFrameLinesBeforeAndAfter: number;
    // (undocumented)
    exposeStack: boolean;
    // (undocumented)
    instanceName?: string;
    // (undocumented)
    jsonInspectOptions: InspectOptions;
    // (undocumented)
    logLevelsColors: TLogLevelColor;
    // (undocumented)
    maskAny: (string | number)[];
    // (undocumented)
    maskPlaceholder: string;
    // (undocumented)
    maskValuesOfKeys: (number | string)[];
    // (undocumented)
    minLevel: TLogLevelName;
    // (undocumented)
    name?: string;
    // (undocumented)
    overwriteConsole: boolean;
    // (undocumented)
    prefix: unknown[];
    // (undocumented)
    prettyInspectHighlightStyles: IHighlightStyles;
    // (undocumented)
    prettyInspectOptions: InspectOptions;
    // (undocumented)
    printLogMessageInNewLine: boolean;
    // (undocumented)
    requestId?: string | TRequestIdFunction;
    // (undocumented)
    setCallerAsLoggerName: boolean;
    // (undocumented)
    stdErr: IStd;
    // (undocumented)
    stdOut: IStd;
    // (undocumented)
    suppressStdOutput: boolean;
    // (undocumented)
    type: "json" | "pretty" | "hidden";
}

// @public
export interface ISettingsParam {
    dateTimePattern?: string;
    dateTimeTimezone?: string;
    displayDateTime?: boolean;
    displayFilePath?: "hidden" | "displayAll" | "hideNodeModulesOnly";
    displayFunctionName?: boolean;
    displayInstanceName?: boolean;
    displayLoggerName?: boolean;
    displayLogLevel?: boolean;
    displayRequestId?: boolean;
    displayTypes?: boolean;
    exposeErrorCodeFrame?: boolean;
    exposeErrorCodeFrameLinesBeforeAndAfter?: number;
    exposeStack?: boolean;
    instanceName?: string;
    jsonInspectOptions?: InspectOptions;
    logLevelsColors?: TLogLevelColor;
    maskAny?: (string | number)[];
    maskPlaceholder?: string;
    maskValuesOfKeys?: (number | string)[];
    minLevel?: TLogLevelName;
    name?: string;
    overwriteConsole?: boolean;
    prefix?: unknown[];
    prettyInspectHighlightStyles?: IHighlightStyles;
    prettyInspectOptions?: InspectOptions;
    printLogMessageInNewLine?: boolean;
    requestId?: string | TRequestIdFunction;
    setCallerAsLoggerName?: boolean;
    stdErr?: IStd;
    stdOut?: IStd;
    suppressStdOutput?: boolean;
    type?: "json" | "pretty" | "hidden";
}

// @public
export interface IStackFrame {
    columnNumber: number | null;
    fileName: string;
    filePath: string;
    fullFilePath: string;
    functionName: string | null;
    isConstructor: boolean | null;
    lineNumber: number | null;
    methodName: string | null;
    typeName: string | null;
}

// @public
export interface IStd {
    write: (message: string) => void;
}

// @public
export class Logger {
    constructor(settings?: ISettingsParam, parentSettings?: ISettings);
    attachTransport(transportLogger: TTransportLogger<(message: ILogObject) => void>, minLevel?: TLogLevelName): void;
    debug(...args: unknown[]): ILogObject;
    error(...args: unknown[]): ILogObject;
    fatal(...args: unknown[]): ILogObject;
    getChildLogger(settings?: ISettingsParam): Logger;
    info(...args: unknown[]): ILogObject;
    prettyError(error: Error, print?: boolean, exposeErrorCodeFrame?: boolean, exposeStackTrace?: boolean, stackOffset?: number, stackLimit?: number, std?: IStd): IErrorObject;
    setSettings(settings: ISettingsParam, parentSettings?: ISettings): ISettings;
    get settings(): ISettings;
    silly(...args: unknown[]): ILogObject;
    trace(...args: unknown[]): ILogObject;
    warn(...args: unknown[]): ILogObject;
}

// @public
export type TLogLevelColor = {
    [key in TLogLevelId]: TUtilsInspectColors;
};

// @public
export type TLogLevelId = keyof ILogLevel;

// @public
export type TLogLevelName = ILogLevel[TLogLevelId];

// @public
export type TRequestIdFunction = () => string;

// @public
export type TTransportLogger<T> = {
    [key in TLogLevelName]: T;
};

// @public
export type TUtilsInspectColors = "reset" | "bold" | "dim" | "italic" | "underline" | "blink" | "inverse" | "hidden" | "strikethrough" | "doubleunderline" | "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "framed" | "overlined" | "gray" | "grey" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright" | "bgGray" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";


```