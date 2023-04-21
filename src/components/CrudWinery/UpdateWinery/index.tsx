import { useEffect, useState } from "react";
import { Vinicola } from "../../../types";
import { API } from "../../../api";
import { useParams, useNavigate } from "react-router-dom";
import { WineryForm } from "../WineryForm";

import { IProps } from "./types";
import { IRouteParams } from "./types";

const EditWinery = ({ categorias }: IProps) => {
  const [vinicolas, setVinicola] = useState<Vinicola>({
    id: 0,
    name: "",
    description: "",
    image: "",
    category: { id: 0, name: "" },
  });

  const { id } = useParams<IRouteParams>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVinicola = async () => {
      try {
        const response = await API.get<Vinicola>(`/vinicolas/${id}`);
        setVinicola(response.data);
      } catch (error) {
        console.error("Erro ao buscar vinícola:", error);
      }
    };
    fetchVinicola();
  }, [id]);

  const handleUpdate = async (novaVinicola: Vinicola) => {
    try {
      await API.put(`/vinicolas/${id}`, novaVinicola);
      console.log("Vinícola atualizada com sucesso!");
      navigate("/vinicolas");
    } catch (error) {
      console.error("Erro ao atualizar vinícola:", error);
    }
  };

  return (
    <div>
      <h1>Editar Vinícola</h1>
      <WineryForm
        onSubmit={handleUpdate}
        vinicola={vinicolas}
        categories={categorias!}
      />
    </div>
  );
};

export default EditWinery;
