import { useState } from "react";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

import { Props } from "./types";

const DeleteWinery = ({ vinicola, onDelete }: Props) => {
  const navigate = useNavigate();

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await API.delete(`/api/vinicolas/${vinicola.id}`);
      onDelete();
      navigate("/vinicolas");
      console.log("Vinícola excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir vinícola:", error);
    }
  };

  const handleCancel = () => {
    setConfirmDelete(false);
  };

  return (
    <div>
      {confirmDelete ? (
        <div>
          <p>Tem certeza que deseja excluir a vinícola {vinicola.name}?</p>
          <button onClick={handleDelete}>Sim</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>Excluir</button>
      )}
    </div>
  );
};

export default DeleteWinery;