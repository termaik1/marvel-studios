import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { HeroEntity } from './hero.entity';
import { IHero } from 'src/hero/hero.interface';
import { HeroService } from './hero.service';
import { HeroCredentialsDto } from './dto/hero-credentials.dto';

@Controller('hero')
export class ImageController {
  constructor(private heroService: HeroService) {}

  @Get('/list')
  async getHeroList(): Promise<HeroEntity[]> {
    return this.heroService.findAll();
  }

  @Get(':id')
  async getProfile(@Param('id') id: IHero['id']): Promise<HeroEntity> {
    return await this.heroService.findById(id);
  }

  @Post()
  async create(
    @Body(ValidationPipe) hero: HeroCredentialsDto,
  ): Promise<HeroEntity> {
    return await this.heroService.create(hero);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: IHero['id'],
    @Body(ValidationPipe) hero: Partial<HeroCredentialsDto>,
  ): Promise<HeroEntity> {
    return await this.heroService.patch(id, hero);
  }
}
