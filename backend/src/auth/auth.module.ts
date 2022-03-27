import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UserModule } from 'src/user/user.module';
import { TokenModule } from 'src/token/token.module';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { algorithm: 'HS256' },
    }),

    UserModule,
    TokenModule,
  ],
})
export class AuthModule {}
