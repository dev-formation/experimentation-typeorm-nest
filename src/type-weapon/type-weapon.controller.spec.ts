import { Test, TestingModule } from '@nestjs/testing';
import { TypeWeaponController } from './type-weapon.controller';
import { TypeWeaponService } from './type-weapon.service';

describe('TypeWeaponController', () => {
  let controller: TypeWeaponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeWeaponController],
      providers: [TypeWeaponService],
    }).compile();

    controller = module.get<TypeWeaponController>(TypeWeaponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
