import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionProvider } from './database.provider';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { ProfileModule } from './profile/profile.module';

import { HeroModule } from './hero/hero.module';
import { ImageModule } from './image/image.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionProvider,
    }),
    UserModule,
    TokenModule,
    AuthModule,
    ProfileModule,
    HeroModule,
    SkillModule,
    ImageModule,
  ],
})
export class AppModule {}
