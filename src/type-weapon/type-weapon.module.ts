import { Module } from '@nestjs/common';
import { TypeWeaponService } from './type-weapon.service';
import { TypeWeaponController } from './type-weapon.controller';
import { TypeWeapon } from './entities/type-weapon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeWeapon])],
  controllers: [TypeWeaponController],
  providers: [TypeWeaponService],
})
export class TypeWeaponModule {}
