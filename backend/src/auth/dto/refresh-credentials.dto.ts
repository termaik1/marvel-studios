import { IsString } from 'class-validator';

export class RefreshCredentialsDto {
  @IsString()
  refresh_token: string;
}
