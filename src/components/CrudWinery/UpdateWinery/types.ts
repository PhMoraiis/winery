import { Categoria, Vinicola } from "../../../types";

export interface IProps {
    vinicola: Vinicola;
    categorias: Categoria[];
    onSubmit: (vinicolaAtualizada: Vinicola) => void;
}


export interface IRouteParams {
    id: string;
    [key: string]: string | undefined;
}