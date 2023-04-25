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

  const handleSubmit = async (data: FormValues) => {

    try {
      const response = await API.post("/vinicolas", {
        nome: data.name,
        descricao: data.description,
        imagem: data.image,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h1>Criar Vinícola</h1>
    </div>
  );
};

export { CreateWinery };
