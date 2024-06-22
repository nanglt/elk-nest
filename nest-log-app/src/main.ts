import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.File({
          filename: 'logs/error.json',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
        new winston.transports.File({ filename: 'logs/combined.json' }),
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
  await app.listen(3000);
}
bootstrap();
