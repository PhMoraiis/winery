import ListWineries from "../../components/ListWineries";
import { Vinicola, Categoria } from "../../types";

const Logon = () => {
  const vinicolas: Vinicola[] = [];


  return (
    <ListWineries vinicolas={vinicolas} />
  )
};

export default Logon;
