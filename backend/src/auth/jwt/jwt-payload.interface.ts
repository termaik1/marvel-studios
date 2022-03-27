import { IUser } from 'src/user/user.interface';

export type IJwtPayload = {
  id: IUser['id'];
  email: IUser['email'];
  iat?: number;
  exp?: number;
};
