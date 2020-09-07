import * as winston from 'winston';
import { utilities as WinstonUtilities } from 'nest-winston';

/**
 * Create a Winston console transporter for the given logger/service name, with default options
 *
 * @param loggerName Name to use for logger. will be shown in console in uppercase
 */
export const createConsoleLogTransporter = (
  loggerName: string
): winston.transports.ConsoleTransportInstance => {
  return new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss A' }),
      WinstonUtilities.format.nestLike(loggerName.toUpperCase())
    ),
    level: 'info',
  });
};
