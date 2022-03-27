import { IsString } from 'class-validator';
import { ISkill } from 'src/skill/skill.interface';

export class SkillCredentialsDto implements Omit<ISkill, 'id' | 'created_at'> {}
