import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { IHero } from './hero.interface';
// import { ChannelEntity } from 'src/channel/channel.entity';

@Entity({ name: 'hero' })
export class HeroEntity extends BaseEntity implements IHero {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('jsonb')
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
