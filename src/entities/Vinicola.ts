import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("vinicolas")
export class Vinicola {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(() => Category, category => category.vinicolas)
  @JoinTable({
    name: "vinicolas_categories",
    joinColumn: {
      name: "vinicola_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "category_id",
      referencedColumnName: "id"
    }
  })
  categories: Category[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}