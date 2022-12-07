import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero)
    private heroRepo: Repository<Hero>,
  ) {}

  create(createHeroDto: CreateHeroDto) {
    return this.heroRepo.save(createHeroDto);
  }

  findAll() {
    return this.heroRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
