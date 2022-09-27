import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Clientes")
export class Cliente {

  @PrimaryColumn()
  id: string;

  @Column()
  Nome_cliente: string;

  @CreateDateColumn()
  Created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}