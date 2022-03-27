import { IsString, MinLength } from 'class-validator';

export class RegisterCredentialsDto {
  @IsString()
  @MinLength(3)
  email: string;

  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
