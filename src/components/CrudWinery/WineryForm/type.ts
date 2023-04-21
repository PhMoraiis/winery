import { Categoria, Vinicola } from "../../../types";

export interface IProps {
    onSubmit: (vinicola: Vinicola) => void;
    categories: Categoria[];
    vinicola?: Vinicola;
}

export interface IFormValues {
    id?: number;
    name: string;
    description: string;
    image: string;
    category: number;
}
