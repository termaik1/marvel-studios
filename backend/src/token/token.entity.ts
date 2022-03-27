import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { IToken } from './token.interface';
import { Exclude } from 'class-transformer';

@Entity({ name: 'token' })
export class TokenEntity extends BaseEntity implements IToken {
  @PrimaryGeneratedColumn('rowid')
  id: string;

  @Column('varchar')
  auth_token: string;

  @Column('varchar')
  refresh_token: string;
}
