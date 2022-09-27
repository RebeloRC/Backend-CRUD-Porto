import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cliente } from "./Cliente";

@Entity("Containers")
export class Container {

  @PrimaryColumn()
  id: string;

  @Column()
  id_cliente: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: "id_cliente" })
  cliente: Cliente

  @Column()
  Numero_container: string;

  @Column()
  Tipo_container: number;

  @Column()
  Status_container: string;

  @Column()
  Categoria_container: string;

  @CreateDateColumn()
  Created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}