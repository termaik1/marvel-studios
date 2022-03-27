import { ISkill } from './skill.interface';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
// import { ChannelEntity } from 'src/channel/channel.entity';

@Entity({ name: 'skill' })
export class SkillEntity extends BaseEntity implements ISkill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
