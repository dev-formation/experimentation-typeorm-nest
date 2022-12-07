import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeWeaponDto } from './dto/create-type-weapon.dto';
import { UpdateTypeWeaponDto } from './dto/update-type-weapon.dto';
import { TypeWeapon } from './entities/type-weapon.entity';

@Injectable()
export class TypeWeaponService {
  constructor(
    @InjectRepository(TypeWeapon)
    private typeWeaponRepo: Repository<TypeWeapon>,
  ) {}

  create(createTypeWeaponDto: CreateTypeWeaponDto) {
    return this.typeWeaponRepo.save(createTypeWeaponDto);
  }

  findAll() {
    return this.typeWeaponRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} typeWeapon`;
  }

  update(id: number, updateTypeWeaponDto: UpdateTypeWeaponDto) {
    return `This action updates a #${id} typeWeapon`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeWeapon`;
  }
}
