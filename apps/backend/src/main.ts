import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ignoreFavicon,
  createConsoleLogTransporter,
  ValidationPipe,
  CustomExceptionFilter,
} from './app/backend-utils';
import * as express from 'express';
import * as cors from 'cors';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const expressApp = express();
  expressApp.use(cors());
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
    {
      logger: WinstonModule.createLogger({
        transports: [createConsoleLogTransporter('BACKEND')],
      }),
      cors: true,
    }
  );
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CustomExceptionFilter());
  app.use(ignoreFavicon);

  app.enableShutdownHooks();

  const port = +process.env.PORT || 3353;
  app.enableCors({
    origin: [/^(.*)/],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
  });
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
