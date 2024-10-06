import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Configuracion {
    @PrimaryGeneratedColumn()
    id_configuracion: number;
  
    @Column({ nullable: true })
    clave: string;
  
    @Column({ nullable: true })
    valor: string;
  
    @Column({ nullable: true })
    timeout: number;
  }
  