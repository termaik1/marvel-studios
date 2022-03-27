import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TokenService } from './token.service';
import { TokenEntity } from './token.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([TokenEntity])],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
