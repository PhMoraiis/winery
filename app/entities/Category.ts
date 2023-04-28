import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { VinicolaCategoria } from "./VinicolaCategoria";
@Entity("categories")
export class Category {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => VinicolaCategoria, vinicolaCategoria => vinicolaCategoria.categoria)
  vinicolaCategorias: VinicolaCategoria[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}