import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { IProps, IFormValues } from "./type";

import { API } from "../../../api";

const WineryForm = ({ onSubmit, categories, vinicola }: IProps) => {
  const [vinicolas, setVinicolas] = useState(vinicola || {});

  const { register, handleSubmit, formState } = useForm<IFormValues>();

  useEffect(() => {
    API.get("/vinicolas")
      .then((response) => {
        setVinicolas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function handleChange(e: any) {
    const { name, value } = e.target;
    setVinicolas({ ...vinicolas, [name]: value });
  }


  return (
    <form>
      <label>
        Nome:
        <input {...register("name", { required: true })} />
        {formState.errors.name && <span>Nome é obrigatório</span>}
      </label>
      <label>
        Descrição:
        <input {...register("description", { required: true })} />
        {formState.errors.description && <span>Descrição é obrigatória</span>}
      </label>
      <label>
        Imagem:
        <input {...register("image", { required: true })} />
        {formState.errors.image && <span>Imagem é obrigatória</span>}
      </label>
      <label>
        Categoria:
        <select
          {...register("category", { required: true })}
        >
          {categories.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
        {formState.errors.category && <span>Categoria é obrigatória</span>}
      </label>
      <button type="submit">Adicionar Vinícola</button>
    </form>
  );
};

export { WineryForm };
