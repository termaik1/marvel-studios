import { Matches } from 'class-validator';
import { TOKEN_REGEXP } from 'src/constants/auth.constants';

export class TokenDto {
  id: string;

  @Matches(TOKEN_REGEXP)
  access_token: string;

  @Matches(TOKEN_REGEXP)
  refresh_token: string;
}
