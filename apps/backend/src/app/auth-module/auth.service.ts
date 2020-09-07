import {
  Injectable,
  UnauthorizedException,
  LoggerService,
  Inject,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import * as bcrypt from 'bcrypt';
import { ILoginDto, IRegisterDto, IJwtPayload } from '../contracts';
import { ApiException, SanitizeError } from '../backend-utils';

/**
 * Handle authentication
 */
@Injectable()
export class AuthService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private jwtService: JwtService,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>
  ) {}

  /**
   * Get a signed JWT string for the provided user entity
   *
   * @param user User Entity to sign
   */
  private async getSignedToken(user: UserEntity): Promise<string> {
    const roles = ['user'];

    return this.jwtService.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email,
        roles,
      },
      {
        expiresIn: '30 days',
        issuer: 'cogtest',
      }
    );
  }

  /**
   * Attempt to log a user in. Return a signed JWT on success
   *
   * @param dto Login DTO
   */
  public Login = async (dto: ILoginDto): Promise<string> => {
    try {
      const userEntity = await this.userRepo.findOne({
        where: { username: dto.username },
      });
      if (!userEntity) {
        throw new Error('Username is not valid');
      } else {
        const isMatching = await bcrypt.compare(
          dto.password,
          userEntity.password
        );
        if (!isMatching) {
          throw new ApiException('Invalid credentials provided');
        } else {
          return await this.getSignedToken(userEntity);
        }
      }
    } catch (e) {
      const msg = SanitizeError(e);
      this.logger.error(msg);
      throw new ApiException(msg);
    }
  };

  /**
   * Register a new user
   *
   * @param dto registration object
   */
  public RegisterUser = async (dto: IRegisterDto): Promise<string> => {
    try {
      const userEntity = await this.userRepo.findOne({
        where: { username: dto.username },
      });
      if (!userEntity) {
        const passwordHash = await bcrypt.hash(dto.password, 10);
        const user = await this.userRepo.create({
          email: dto.email,
          username: dto.username,
          password: passwordHash,
        });
        await this.userRepo.save(user);
        return await this.getSignedToken(user);
      } else {
        throw new Error('Username already in use');
      }
    } catch (e) {
      const msg = SanitizeError(e);
      this.logger.error(msg);
      throw new ApiException(msg);
    }
  };

  /**
   * Find a user ID in the user repository (after signed JWT has been validated)
   *
   * @param payload IJwtPayload
   */
  async validateUser(payload: IJwtPayload): Promise<UserEntity> {
    try {
      return await this.userRepo.findOneOrFail({ where: { _id: payload._id } });
    } catch (e) {
      throw new UnauthorizedException('Invalid user');
    }
  }
}
