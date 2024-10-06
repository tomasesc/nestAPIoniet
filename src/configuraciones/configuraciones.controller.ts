import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracionesService } from './configuraciones.service';
import { CreateConfiguracionDto } from './dto/create-configuracione.dto';

@Controller('configuraciones')
export class ConfiguracionesController {
  constructor(private readonly configuracionesService: ConfiguracionesService) {}

  @Post()
  create(@Body() CreateConfiguracionDto: CreateConfiguracionDto) {
    return this.configuracionesService.create(CreateConfiguracionDto);
  }

  @Get()
  findAll() {
    return this.configuracionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateConfiguracionDto: CreateConfiguracionDto) {
    return this.configuracionesService.update(+id, CreateConfiguracionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracionesService.remove(+id);
  }
}
