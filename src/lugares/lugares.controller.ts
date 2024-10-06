import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { CreateLugareDto } from './dto/create-lugare.dto';


@Controller('lugares')
export class LugaresController {
  constructor(private readonly lugaresService: LugaresService) {}

  @Post()
  create(@Body() CreateLugareDto: CreateLugareDto) {
    return this.lugaresService.create(CreateLugareDto);
  }

  @Get()
  findAll() {
    return this.lugaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lugaresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateLugareDto: CreateLugareDto) {
    return this.lugaresService.update(+id, CreateLugareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lugaresService.remove(+id);
  }
}
