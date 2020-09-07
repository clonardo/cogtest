import { AuthGuard } from '@nestjs/passport';
import { NestModule, Module, MiddlewareConsumer, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunnerController } from './runner.controller';
import { RunnerService } from './runner.service';
import { RunEntity, ResultEntity } from '../entities';
import { AuthModule } from '../auth-module';

/**
 * Module controlling configuration + data capture for runs
 */
@Module({
  imports: [TypeOrmModule.forFeature([RunEntity, ResultEntity]), AuthModule],
  controllers: [RunnerController],
  providers: [Logger, RunnerService],
  exports: [],
})
export class RunnerModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    // AuthGuard
  }
}
