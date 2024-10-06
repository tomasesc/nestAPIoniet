import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  id_pregunta: number;

  @Column({ nullable: true })
  opcion_1: string;

  @Column({ nullable: true })
  opcion_2: string;

  @Column({ nullable: true })
  opcion_3: string;

  @Column({ nullable: true })
  opcion_4: string;

  @Column({ nullable: true })
  id_lugar: number;
}
