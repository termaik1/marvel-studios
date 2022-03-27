import { IsString } from 'class-validator';
import { IHero } from 'src/hero/hero.interface';

export class HeroCredentialsDto implements Omit<IHero, 'id' | 'created_at'> {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
