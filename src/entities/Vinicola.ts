import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

  @Column()
  wine_tasting: boolean;

  @Column()
  tour: boolean;

  @Column()
  restaurant: boolean;

  @Column()
  hotel: boolean;

  @Column()
  bikes: boolean;

  @Column()
  trakking: boolean;

  @Column()
  viewpoint: boolean;

  @Column()
  cafeteria: boolean;

  @Column()
  playground: boolean;

  @Column()
  acessibility: boolean;

  @Column()
  pool: boolean;

  @Column()
  cable_car: boolean;

  @Column()
  kayak: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}