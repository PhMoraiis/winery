import { useEffect, useState } from "react";

import axios from "axios";

import { Categoria } from "../../../types";
import { FormValues } from "./types";

import { WineryForm } from "../WineryForm";
import { API } from "../../../api";

const initialValues: FormValues = {
  name: "",
  description: "",
  image: "",
  category: {
    id: 0,
    name: "",
  },
};

const CreateWinery = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: FormValues) => {
    setLoading(true);

    const categoria = categorias.find((c) => c.id === data.category);

    try {
      const response = await axios.post("http://localhost:5000/vinicolas", {
        nome: data.name,
        descricao: data.description,
        imagem: data.image,
        categoria,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    API.get<Categoria[]>("http://localhost:5000/categories")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Criar Vinícola</h1>
      <WineryForm
        onSubmit={handleSubmit}
        categories={categorias}
        vinicola={initialValues}
      />
    </div>
  );
};

export { CreateWinery };
