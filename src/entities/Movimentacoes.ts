import { Container } from './Container';
import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cliente } from "./Cliente";


@Entity("Movimentacoes")
export class Movimentacao {

  @PrimaryColumn()
  id: string;

  @Column()
  id_cliente: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: "id_cliente" })
  cliente: Cliente

  @Column()
  id_container: string;

  @ManyToOne(() => Container)
  @JoinColumn({ name: "id_container" })
  container: Container

  @Column()
  Tipo_movimentacao: string;

  @Column()
  data_hora_inicio: string;

  @Column()
  data_hora_fim: string;

  @CreateDateColumn()
  Created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}