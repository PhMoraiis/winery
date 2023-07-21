import { useState } from "react";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";
import { Winery } from "../EditWinery";

const WineryCreateForm = () => {
  const [vinicola, setVinicola] = useState<Winery>({
    id: "",
    name: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleCadasterVinicola = async () => {
    try {
      const response = await API.post("/vinicolas", vinicola, {
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Vinícola criada:", response.data);
      navigate("/winerymng");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVinicola({ ...vinicola, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVinicola({ ...vinicola, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-naveidBd mt-8 mb-8 paragraph">
        Cadastrar Vinícola
      </h1>
      <form
        onSubmit={handleCadasterVinicola}
        className="bg-[#f6f6f6] py-6 px-6 rounded-md shadow-xl md:w-2/3 lg:w-[80vw] mx-auto border-2 border-[#fc9f32]"
      >
        <div className="flex flex-col md:flex-row">
          <label className="block mb-4 mt-2 text-gray-700 md:w-1/4 font-naveidRg items-center">
            Nome*:
          </label>
          <input
            type="text"
            name="name"
            className="block w-full rounded-md shadow-lg mb-4 border-[#fc9f32] focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={vinicola.name}
            onChange={handleInputChange}
          />

          <label className="block mb-4 ml-10 mt-2 text-gray-700 md:w-2/4 font-naveidRg items-center">
            URL da imagem*:
          </label>
          <input
            type="text"
            name="image"
            className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={vinicola.image}
            onChange={handleInputChange}
          />
        </div>
        <label className="block mb-2 text-gray-700 font-naveidRg">
          Descrição*:
        </label>
        <textarea
          className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] resize-none"
          rows={4}
          value={vinicola.description}
          name="description"
          onChange={handleTextAreaChange}
        ></textarea>
      </form>
      <button
        className="gradient text-white font-gilroyLt py-2 px-6 rounded-lg mt-8"
        onClick={handleCadasterVinicola}
      >
        Cadastrar
      </button>
    </div>
  );
};

export default WineryCreateForm;
