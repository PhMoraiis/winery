import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { Categoria, Vinicola } from "../../../types";
import { IProps, IFormValues } from "./type";

import { API } from "../../../api";

const WineryForm = ({ onSubmit, categories, vinicola }: IProps) => {
  const [category, setCategorys] = useState<Categoria[]>([]);
  const [vinicolas, setVinicolas] = useState(vinicola || {});

  const { register, handleSubmit, formState } = useForm<IFormValues>();

  useEffect(() => {
    API.get("http://localhost:5000/categories")
      .then((response) => {
        setCategorys(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmitForm = (data: IFormValues) => {
    const novaVinicola: Vinicola = {
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      category: categories.find(
        (categoria) => categoria.id === Number(data.category)
      ),
    };
    onSubmit(novaVinicola); // chama a função onSubmit passando o objeto Vinicola
  };
  

  function handleChange(e: any) {
    const { name, value } = e.target;
    setVinicolas({ ...vinicolas, [name]: value });
  }

  function handleCategory(e: any) {
    setVinicolas({
      ...vinicolas,
      categories: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
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
          onChange={handleCategory}
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
