import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { v4 as uuid } from "uuid"
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
    category_id: string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}