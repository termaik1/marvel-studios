import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { IImage } from './image.interface';
import { Exclude } from 'class-transformer';
// import { ChannelEntity } from 'src/channel/channel.entity';

@Entity({ name: 'image' })
export class ImageEntity extends BaseEntity implements IImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
