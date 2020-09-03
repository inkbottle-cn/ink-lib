import "ts-jest";
import { ILogObject, Logger } from "../src";
import { doesLogContain } from "./helper";

const stdOut: string[] = [];
const stdErr: string[] = [];
const transportOut: ILogObject[] = [];
const transportErr: ILogObject[] = [];

const logger: Logger = new Logger({
  type: "json",
  stdOut: {
    write: (print: string) => {
      stdOut.push(print);
    },
  },
  stdErr: {
    write: (print: string) => {
      stdErr.push(print);
    },
  },
});

logger.attachTransport(
  {
    silly: logToTransportOut,
    debug: logToTransportOut,
    trace: logToTransportOut,
    info: logToTransportOut,
    warn: logToTransportErr,
    error: logToTransportErr,
    fatal: logToTransportErr,
  },
  "silly"
);

function logToTransportOut(print: ILogObject) {
  transportOut.push(print);
}
function logToTransportErr(print: ILogObject) {
  transportErr.push(print);
}

describe("Logger: Transport", () => {
  beforeEach(() => {
    stdOut.length = 0;
    stdErr.length = 0;
    transportOut.length = 0;
    transportErr.length = 0;
  });
  test("attach transport", (): void => {
    logger.silly("test message");
    logger.trace("test message");
    logger.debug("test message");
    logger.info("test message");
    logger.warn("test message");
    logger.error("test message");
    logger.fatal("test message");

    expect(transportOut.length).toBe(stdOut.length);
    expect(
      doesLogContain(stdOut, transportOut[0].argumentsArray[0] as string)
    ).toBeTruthy();

    expect(transportErr.length).toBe(stdErr.length);
    expect(
      doesLogContain(stdErr, transportErr[0].argumentsArray[0] as string)
    ).toBeTruthy();
  });

  test("different log level", (): void => {
    logger.setSettings({ minLevel: "info" });

    logger.silly("test message");
    logger.trace("test message");
    logger.debug("test message");
    logger.info("test message");
    logger.warn("test message");
    logger.error("test message");
    logger.fatal("test message");

    // all 4: silly, trace, debug, info
    expect(transportOut.length).toBe(4);
    // info only to stdOut
    expect(stdOut.length).toBe(1);
  });
});
