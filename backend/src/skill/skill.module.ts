import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SkillService } from './skill.service';
import { SkillEntity } from './skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SkillEntity])],
  providers: [SkillService],
  exports: [SkillService],
})
export class SkillModule {}
