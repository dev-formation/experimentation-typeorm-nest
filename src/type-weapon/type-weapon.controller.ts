import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeWeaponService } from './type-weapon.service';
import { CreateTypeWeaponDto } from './dto/create-type-weapon.dto';
import { UpdateTypeWeaponDto } from './dto/update-type-weapon.dto';

@Controller('type-weapon')
export class TypeWeaponController {
  constructor(private readonly typeWeaponService: TypeWeaponService) {}

  @Post()
  create(@Body() createTypeWeaponDto: CreateTypeWeaponDto) {
    return this.typeWeaponService.create(createTypeWeaponDto);
  }

  @Get()
  findAll() {
    return this.typeWeaponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeWeaponService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeWeaponDto: UpdateTypeWeaponDto,
  ) {
    return this.typeWeaponService.update(+id, updateTypeWeaponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeWeaponService.remove(+id);
  }
}
