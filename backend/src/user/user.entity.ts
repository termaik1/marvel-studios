import { IUser } from './user.interface';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
// import { ChannelEntity } from 'src/channel/channel.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  // @Exclude()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ default: '' })
  avatar: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
