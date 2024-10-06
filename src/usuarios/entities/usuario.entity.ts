import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    puntaje: number;
  
    @Column()
    nombre: string;
  
    @Column()
    usuario: string;

    @Column()
    dni: string;
  
    @Column()
    mail: string;


}
