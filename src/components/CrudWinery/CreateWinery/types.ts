import { Categoria } from "../../../types";

export type FormValues = {
  name: string;
  description: string;
  image: string;
  category?: Categoria;
};