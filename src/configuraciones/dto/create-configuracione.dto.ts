import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateConfiguracionDto {
  @IsString()
  @IsOptional()
  clave: string;

  @IsString()
  @IsOptional()
  valor: string;

  @IsNumber()
  @IsOptional()
  timeout: number;
}
