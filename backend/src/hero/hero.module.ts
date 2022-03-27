import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HeroService } from './hero.service';
import { HeroEntity } from './hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity])],
  providers: [HeroService],
  exports: [HeroService],
})
export class HeroModule {}
