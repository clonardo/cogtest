import { JwtModule } from '@nestjs/jwt';
import { PassportModule, AuthGuard } from '@nestjs/passport';
import { NestModule, Module, MiddlewareConsumer, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserEntity } from '../entities';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secretOrKeyProvider: () => process.env.JWT_SECRET as string,
      signOptions: {
        expiresIn: 360000,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    AuthService,
    // RolesGuard,
    Logger,
  ],
  exports: [
    // RolesGuard,
    JwtModule,
    PassportModule,
    AuthService,
  ],
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    /*
        if (process.env.GITHUB_OAUTH_CLIENT_ID) {
          consumer
            .apply(
              authenticate('github', {
                session: false,
                scope: [],
              })
            )
            .forRoutes({
              path: '/auth/github',
              method: RequestMethod.GET,
            });
        }
        */
  }
}
