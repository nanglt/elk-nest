import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
        new winston.transports.DailyRotateFile({
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '7d',
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike('BICenter', {
              prettyPrint: true,
              colors: true,
            }),
          ),
        }),
      ],
    }),
  });
  await app.listen(3010);
}
bootstrap();
