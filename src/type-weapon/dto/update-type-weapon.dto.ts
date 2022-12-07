import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeWeaponDto } from './create-type-weapon.dto';

export class UpdateTypeWeaponDto extends PartialType(CreateTypeWeaponDto) {}
