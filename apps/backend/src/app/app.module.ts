import { Module } from '@nestjs/common';
import { DatabaseConfigFactory } from './config';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth-module';
import { ResultsModule } from './results-module';
import { RunnerModule } from './runner-module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigFactory,
    }),
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
    }),
    AuthModule,
    ResultsModule,
    RunnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
