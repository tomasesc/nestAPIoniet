import { Usuario } from "../entities/usuario.entity";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
  @IsNumber()
  puntaje: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsEmail()
  mail: string;
}
