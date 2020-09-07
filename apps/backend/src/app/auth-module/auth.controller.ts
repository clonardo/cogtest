import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ILoginDto, IRegisterDto, IJwtPayload } from '../contracts';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  /*
  // disabled because we don't want randos signing up
  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() signupDto: IRegisterDto): Promise<string> {
    return this._authService.RegisterUser(signupDto);
  }
  */

  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(@Body() signinDto: ILoginDto): Promise<string> {
    return this._authService.Login(signinDto);
  }
}
