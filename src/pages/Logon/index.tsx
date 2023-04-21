import { categories } from "../../components/Filters/Categories";
import ListWineries from "../../components/ListWineries";
import { Vinicola, Categoria } from "../../types";

const Logon = () => {
  const vinicolas: Vinicola[] = [];

  const categorias: Categoria[] = categories.map((categoria, index) => ({
    id: index + 1,
    name: categoria.label,
  }));

  return (
    <ListWineries vinicolas={vinicolas} categorias={categorias} />
  )
};

export default Logon;
