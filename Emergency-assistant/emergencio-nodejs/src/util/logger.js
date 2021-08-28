const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");
const { env } = require("../config/config");

// const env = 'development';
const logDir = "logs";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "logs.log");
const errorFilename = path.join(logDir, "errors.log");
const logger = createLogger({
  level: "info",
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({
      stack: true,
    }),
    format.json()
  ),
  transports: [
    new transports.File({
      filename: errorFilename,
      level: "error",
    }),
    new transports.File({
      filename,
    }),
  ],
});

if (env !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    })
  );
}

module.exports.logger = logger;
