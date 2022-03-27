import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import { SkillEntity } from './skill.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ISkill } from './skill.interface';
import { SkillCredentialsDto } from './dto/skill-credentials.dto';

@EntityRepository(SkillEntity)
@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillEntity)
    private skillRepository: Repository<SkillEntity>,
  ) {}

  async create(skill: SkillCredentialsDto): Promise<SkillEntity> {
    const createSkill = await this.skillRepository.create(skill);

    return createSkill;
  }

  async patch(
    id: ISkill['id'],
    skill: Partial<SkillCredentialsDto>,
  ): Promise<SkillEntity> {
    const skillFind = await this.skillRepository.findOne({ id });

    if (!skillFind?.id) {
      return SkillService.throwNotFoundException();
    }

    const saveSkill = await this.skillRepository.save({ ...skillFind, skill });

    return saveSkill;
  }

  private static throwNotFoundException(): never {
    throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
  }
}
