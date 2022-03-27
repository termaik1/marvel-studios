import { jwtConfig } from './jwt.config';
import { JwtStrategy } from './jwt.strategy';

import 'dotenv/config';

type JWTFactory = {
  secret: string;
  // signOptions: {
  //   expiresIn: string;
  // };
};

export const JWTProvider = {
  useFactory: async (): Promise<JWTFactory> => ({
    secret: process.env.JWT_SECRET,
    // signOptions: {
    //   expiresIn: '1d',
    // },
  }),
  providers: [JwtStrategy],
};
