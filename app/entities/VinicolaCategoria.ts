import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vinicola } from "./Vinicola";
import { Category } from "./Category";

@Entity('vinicolas_categorias')
export class VinicolaCategoria {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Vinicola, vinicola => vinicola.vinicolaCategorias)
  @JoinColumn({ name: 'vinicola_id' })
  vinicola: Vinicola;

  @ManyToOne(() => Category, categoria => categoria.vinicolaCategorias)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Category;
}