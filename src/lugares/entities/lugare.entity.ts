import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class lugares {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  codigoqr: string;

  @Column({ nullable: true })
  pista: string;
}
