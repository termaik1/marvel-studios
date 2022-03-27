import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as omit from 'lodash.omit';

import { UserEntity } from './user.entity';
import { IUser } from './user.interface';

@EntityRepository(UserEntity)
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: IUser['email']): Promise<UserEntity> {
    const userFind = await this.userRepository.findOne({ email });

    return userFind;
  }

  async findById(id: IUser['id']): Promise<UserEntity> {
    const userFind = await this.userRepository.findOne({ id });

    return userFind;
  }

  async create(
    user: Pick<IUser, 'email' | 'username' | 'password'>,
  ): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user);
    const hash = await UserService.generateHashPassword(user.password);

    const saveUser = await this.userRepository.save({
      ...newUser,
      password: hash,
    });

    return omit(saveUser, ['password']);
  }

  async matchingHashPassword(
    passwordHash: string,
    password: string,
  ): Promise<boolean> {
    const isMatching = await new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash, (_, res) => {
        if (res) {
          resolve(res);
        }
        reject('Invalid credentials');
      });
    });

    return !!isMatching;
  }

  private static async generateHashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
