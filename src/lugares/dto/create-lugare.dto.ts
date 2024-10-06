import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateLugareDto {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    codigoqr: string;
  
    @Column()
    pista: string;
}
