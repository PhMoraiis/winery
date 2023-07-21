import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("vinicolas")
export class Vinicola {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({type: 'text', unique: true})
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;
}