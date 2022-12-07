import { Test, TestingModule } from '@nestjs/testing';
import { TypeWeaponService } from './type-weapon.service';

describe('TypeWeaponService', () => {
  let service: TypeWeaponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeWeaponService],
    }).compile();

    service = module.get<TypeWeaponService>(TypeWeaponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
