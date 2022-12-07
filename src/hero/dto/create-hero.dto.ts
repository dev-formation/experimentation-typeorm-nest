import { PartialType } from '@nestjs/mapped-types';
import { Hero } from '../entities/hero.entity';

export class CreateHeroDto extends PartialType(Hero) {}
