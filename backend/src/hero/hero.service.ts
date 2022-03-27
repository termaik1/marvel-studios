import { Injectable } from '@nestjs/common';
import { HeroEntity } from './hero.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IHero } from './hero.interface';
import { HeroCredentialsDto } from './dto/hero-credentials.dto';

@EntityRepository(HeroEntity)
@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(HeroEntity)
    private heroRepository: Repository<HeroEntity>,
  ) {}

  async findAll(): Promise<HeroEntity[]> {
    const heroList = await this.heroRepository.find();

    return heroList;
  }

  async findById(id: IHero['id']): Promise<HeroEntity> {
    const hero = await this.heroRepository.findOne({ id });

    return hero;
  }

  async create(hero: HeroCredentialsDto): Promise<HeroEntity> {
    const createHero = await this.heroRepository.create(hero);

    return createHero;
  }

  async patch(
    id: IHero['id'],
    hero: Partial<HeroCredentialsDto>,
  ): Promise<HeroEntity> {
    const heroFind = await this.heroRepository.findOne({ id });

    const updateHero = await this.heroRepository.save({ ...heroFind, hero });

    return updateHero;
  }
}
