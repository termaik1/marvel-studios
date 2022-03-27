import 'dotenv/config';

export const jwtConfig = (): { jwtSecret: string } => ({
  jwtSecret: process.env.JWT_SECRET,
});
