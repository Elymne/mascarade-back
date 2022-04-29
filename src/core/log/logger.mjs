import winston from 'winston'
import path from 'path'
import appRootPath from 'app-root-path'

/**
 * Directory for log files.
 */
const __dirname = `${appRootPath}/logs/`

/**
 * Styling for console log.
 */
const formatCli = winston.format.combine(
    winston.format.colorize(),
    winston.format.cli({ colors: { error: 'red', warn: 'orange', info: 'blue', http: 'cyan', verbose: 'verbose', debug: 'pink' } }),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
)

/**
 * Logger object.
 */
const logger = {
    toFile: winston.createLogger({
        transports: [
            new winston.transports.File({
                filename: path.join(__dirname, 'sheet.log'),
                level: 'info',
                maxsize: 500,
            }),
        ],
        level: 'debug',
    }),
    toConsole: winston.createLogger({
        transports: [new winston.transports.Console({ format: formatCli })],
        level: 'debug',
    }),
}

export default logger
