import { Pregunta } from "../entities/pregunta.entity";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePreguntaDto {
    @IsNumber()
  id_lugar: number;

  @IsString()
  @IsNotEmpty()
  opcion_1: string;   

  @IsString()
  @IsNotEmpty()
  opcion_2: string;

  @IsString()
  @IsNotEmpty()
  opcion_3: string;

  @IsString()
  @IsNotEmpty()
  opcion_4: string;
}
