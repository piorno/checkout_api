import { Injectable, LoggerService } from '@nestjs/common';
import pino, { Logger } from 'pino';
import pretty from 'pino-pretty';

@Injectable()
export class LoggerCustomService implements LoggerService {
  private readonly logger: Logger;

  constructor() {
    const stream = pretty({
      colorize: true,
    });

    this.logger = pino({}, stream);
  }

  log(message: unknown) {
    this.logger.info(message);
  }

  fatal(message: unknown) {
    this.logger.fatal(message);
  }

  error(message: unknown) {
    this.logger.error(message);
  }

  warn(message: unknown) {
    this.logger.warn(message);
  }

  debug?(message: unknown) {
    this.logger.debug(message);
  }
}