import { Injectable } from '@nestjs/common';

import * as omit from 'lodash.omit';

import { UserEntity } from 'src/user/user.entity';
import { IUser } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  constructor(private readonly userService: UserService) {}

  async getProfileUserById(id: IUser['id']): Promise<UserEntity> {
    const user = await this.userService.findById(id);

    return omit(user, ['password']);
  }
}
