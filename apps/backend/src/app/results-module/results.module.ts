import { JwtModule } from '@nestjs/jwt';
import { PassportModule, AuthGuard } from '@nestjs/passport';
import { NestModule, Module, MiddlewareConsumer, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { RunEntity, ResultEntity } from '../entities';
import { AuthModule } from '../auth-module';

@Module({
  imports: [TypeOrmModule.forFeature([RunEntity, ResultEntity]), AuthModule],
  controllers: [ResultsController],
  providers: [Logger, ResultsService],
  exports: [],
})
export class ResultsModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    // AuthGuard
  }
}
