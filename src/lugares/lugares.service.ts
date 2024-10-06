import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLugareDto } from './dto/create-lugare.dto';
import { lugares } from './entities/lugare.entity';

@Injectable()
export class LugaresService {
  constructor(
    @InjectRepository(lugares)
    private lugaresRepository: Repository<lugares>,
  ) {}

  create(createLugareDto: CreateLugareDto) {
    const lugar = this.lugaresRepository.create(createLugareDto);
    return this.lugaresRepository.save(lugar);
  }

  findAll() {
    return this.lugaresRepository.find();
  }

  findOne(id: number) {
    return this.lugaresRepository.findOneBy({ id: id });
  }

  update(id: number, createLugareDto: CreateLugareDto) {
    return this.lugaresRepository.update(id, createLugareDto);
  }

  remove(id: number) {
    return this.lugaresRepository.delete(id);
  }
}
