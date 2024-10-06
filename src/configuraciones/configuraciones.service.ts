import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfiguracionDto } from './dto/create-configuracione.dto';
import { Configuracion } from './entities/configuracione.entity';

@Injectable()
export class ConfiguracionesService {
  constructor(
    @InjectRepository(Configuracion)
    private configuracionesRepository: Repository<Configuracion>,
  ) {}

  create(createConfiguracionDto: CreateConfiguracionDto) {
    const configuracion = this.configuracionesRepository.create(createConfiguracionDto);
    return this.configuracionesRepository.save(configuracion);
  }

  findAll() {
    return this.configuracionesRepository.find();
  }

  findOne(id: number) {
    return this.configuracionesRepository.findOneBy({ id_configuracion: id });
  }

  update(id: number, createConfiguracionDto: CreateConfiguracionDto) {
    return this.configuracionesRepository.update(id, createConfiguracionDto);
  }

  remove(id: number) {
    return this.configuracionesRepository.delete(id);
  }
}
