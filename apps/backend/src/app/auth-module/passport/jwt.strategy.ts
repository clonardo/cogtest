import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  Inject,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { IJwtPayload } from '../../contracts';
import { AuthService } from '../auth.service';
import { SanitizeError } from '../../backend-utils';

/**
 * JWT validation strategy
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * Validate JWT payload
   *
   * @param payload payload to validate
   */
  async validate(payload: IJwtPayload): Promise<IJwtPayload> {
    try {
      const user = await this.authService.validateUser(payload);
      if (!user) {
        throw new UnauthorizedException();
      } else {
        return payload;
      }
    } catch (e) {
      const msg = SanitizeError(e);
      this.logger.error(msg);
      throw new UnauthorizedException(msg);
    }
  }
}
