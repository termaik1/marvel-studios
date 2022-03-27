import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { RefreshCredentialsDto } from './dto/refresh-credentials.dto';
import { UserEntity } from 'src/user/user.entity';
import { TokenEntity } from 'src/token/token.entity';
import { RegisterCredentialsDto } from './dto/register-credentials.dto';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async get() {
    return 'success';
  }

  @Post('register')
  async register(
    @Body(ValidationPipe) registerCredentials: RegisterCredentialsDto,
  ): Promise<UserEntity> {
    return this.authService.register(registerCredentials);
  }

  @Post('login')
  async login(
    @Body(ValidationPipe) authCredentials: AuthCredentialsDto,
  ): Promise<TokenEntity> {
    return this.authService.login(authCredentials);
  }

  @Post('refresh')
  async refresh(
    @Body(ValidationPipe) refreshCredentials: RefreshCredentialsDto,
  ): Promise<TokenEntity> {
    return this.authService.refresh(refreshCredentials);
  }
}
