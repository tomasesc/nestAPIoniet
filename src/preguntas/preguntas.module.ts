import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { Pregunta } from './entities/pregunta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
