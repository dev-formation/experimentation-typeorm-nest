import { PartialType } from '@nestjs/mapped-types';
import { TypeWeapon } from '../entities/type-weapon.entity';

export class CreateTypeWeaponDto extends PartialType(TypeWeapon) {}
