import { useState, useEffect } from "react";
import { API } from "../../api";
import UpdateWinery from "../../components/CrudWinery/UpdateWinery";
import DeleteWinery from "../../components/CrudWinery/DeleteWinery";
import { Categoria, Vinicola } from "../../types";

interface IProps {
  vinicolas: Vinicola[];
  categorias: Categoria[];
  onSubmit: (vinicolaAtualizada: Vinicola) => void;
}

const WineriesTable = ({ vinicolas, categorias, onSubmit }: IProps) => {
  const [vinicolasState, setVinicolasState] = useState<Vinicola[]>(vinicolas);

  useEffect(() => {
    const fetchVinicolas = async () => {
      try {
        const response = await API.get("/api/vinicolas");
        setVinicolasState(response.data);
      } catch (error) {
        console.error("Erro ao buscar vinícolas:", error);
      }
    };
    fetchVinicolas();
  }, []);

  const handleDelete = (id: number) => {
    setVinicolasState(vinicolasState.filter((vinicola) => vinicola.id !== id));
  };

  const handleUpdate = (vinicolaAtualizada: Vinicola) => {
    setVinicolasState(
      vinicolasState.map((vinicola) =>
        vinicola.id === vinicolaAtualizada.id ? vinicolaAtualizada : vinicola
      )
    );
    onSubmit(vinicolaAtualizada);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>País</th>
            <th>Região</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vinicolasState.map((vinicola) => (
            <tr key={vinicola.id}>
              <td>{vinicola.name}</td>
              <td>{vinicola.description}</td>
              <td>{vinicola.image}</td>
              <td>{vinicola.category ? vinicola.category.name : ""}</td>
              <td>
                <UpdateWinery
                  vinicola={vinicola}
                  categorias={categorias}
                  onSubmit={handleUpdate}
                />
                <DeleteWinery
                  vinicola={vinicola}
                  onDelete={() => handleDelete(vinicola.id!)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WineriesTable;
