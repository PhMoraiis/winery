import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Vinicola } from "./Vinicola";

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

  @ManyToMany(() => Vinicola, vinicola => vinicola.categories)
  vinicolas: Vinicola[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}