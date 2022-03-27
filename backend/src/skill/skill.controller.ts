import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SkillCredentialsDto } from './dto/skill-credentials.dto';
import { SkillEntity } from './skill.entity';
import { ISkill } from './skill.interface';
import { SkillService } from './skill.service';

export class SkillController {
  constructor(private skillService: SkillService) {}

  @Post()
  async create(
    @Body(ValidationPipe) skill: SkillCredentialsDto,
  ): Promise<SkillEntity> {
    return await this.skillService.create(skill);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: ISkill['id'],
    @Body(ValidationPipe) skill: Partial<SkillCredentialsDto>,
  ): Promise<SkillEntity> {
    return await this.skillService.patch(id, skill);
  }
}
