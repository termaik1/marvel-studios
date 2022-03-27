import { IUser } from 'src/user/user.interface';
import { IsString } from 'class-validator';

export class UserTokenDto implements Pick<IUser, 'id' | 'email'> {
  @IsString()
  id: string;

  @IsString()
  email: string;
}
