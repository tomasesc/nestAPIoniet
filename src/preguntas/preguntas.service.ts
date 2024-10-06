import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { Pregunta } from './entities/pregunta.entity';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectRepository(Pregunta)
    private preguntasRepository: Repository<Pregunta>,
  ) {}

  create(createPreguntaDto: CreatePreguntaDto) {
    const pregunta = this.preguntasRepository.create(createPreguntaDto);
    return this.preguntasRepository.save(pregunta);
  }

  findAll() {
    return this.preguntasRepository.find();
  }

  findOne(id_pregunta: number) {
    return this.preguntasRepository.findOneBy({ id_pregunta });
  }

  update(id_pregunta: number, createPreguntaDto: CreatePreguntaDto) {
    return this.preguntasRepository.update(id_pregunta, createPreguntaDto);
  }

  remove(id_pregunta: number) {
    return this.preguntasRepository.delete(id_pregunta);
  }
}
