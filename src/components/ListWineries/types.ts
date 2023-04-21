import { Categoria, Vinicola } from "../../types";

export interface IProps {
    vinicolas: Vinicola[];
    categorias: Categoria[];
    onSubmit?: (vinicolaAtualizada: Vinicola) => void;
}