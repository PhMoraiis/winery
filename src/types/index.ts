export interface Categoria {
    id?: number;
    name: string;
}

export interface Vinicola {
    id?: number;
    name: string;
    description: string;
    image: string;
    category?: Categoria;
}
