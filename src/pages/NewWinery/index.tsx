import { useState } from "react";
import { VinicolaFormProps } from "../../types/type";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";

const WineryCreateForm = () => {
  const [vinicola, setVinicola] = useState<VinicolaFormProps>({
    id: "",
    name: "",
    description: "",
    image: "",
    wine_tasting: false,
    tour: false,
    restaurant: false,
    hotel: false,
    bikes: false,
    trakking: false,
    viewpoint: false,
    cafeteria: false,
    playground: false,
    acessibility: false,
    pool: false,
    cable_car: false,
    kayak: false,
  });

  const navigate = useNavigate();

  const handleCadasterVinicola = async () => {
    try {
      const response = await API.post("", vinicola, {
        responseType: "json",
      });
      console.log("Vinícola criada:", response.data);
      navigate("/winerymng");
    } catch (error) {
      console.error(error);
    }
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
            onChange={(e) => setVinicola({ ...vinicola, name: e.target.value })}
          />

          <label className="block mb-4 ml-10 mt-2 text-gray-700 md:w-2/4 font-naveidRg items-center">
            URL da imagem*:
          </label>
          <input
            type="text"
            name="image"
            className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={vinicola.image}
            onChange={(e) =>
              setVinicola({ ...vinicola, image: e.target.value })
            }
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
          onChange={(e) =>
            setVinicola({ ...vinicola, description: e.target.value })
          }
        ></textarea>

        <label className="block mb-2 text-gray-700 font-naveidRg">
          Categorias:
        </label>
        <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="wine_tasting"
              value="wine_tasting"
              checked={vinicola.wine_tasting}
              onChange={(e) =>
                setVinicola({ ...vinicola, wine_tasting: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Degustação</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="tour"
              value="tour"
              checked={vinicola.tour}
              onChange={(e) =>
                setVinicola({ ...vinicola, tour: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Tour</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="restaurant"
              value="restaurant"
              checked={vinicola.restaurant}
              onChange={(e) =>
                setVinicola({ ...vinicola, restaurant: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">
              Restaurante
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hotel"
              value="hotel"
              checked={vinicola.hotel}
              onChange={(e) =>
                setVinicola({ ...vinicola, hotel: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Hotel</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="bikes"
              value="bikes"
              checked={vinicola.bikes}
              onChange={(e) =>
                setVinicola({ ...vinicola, bikes: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Bikes</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="trakking"
              value="trakking"
              checked={vinicola.trakking}
              onChange={(e) =>
                setVinicola({ ...vinicola, trakking: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Trilha</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="viewpoint"
              value="viewpoint"
              checked={vinicola.viewpoint}
              onChange={(e) =>
                setVinicola({ ...vinicola, viewpoint: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Mirante</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="cafeteria"
              value="cafeteria"
              checked={vinicola.cafeteria}
              onChange={(e) =>
                setVinicola({ ...vinicola, cafeteria: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Cafeteria</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="playground"
              value="playground"
              checked={vinicola.playground}
              onChange={(e) =>
                setVinicola({ ...vinicola, playground: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Playground</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acessibility"
              value="acessibility"
              checked={vinicola.acessibility}
              onChange={(e) =>
                setVinicola({ ...vinicola, acessibility: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">
              Acessibilidade
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="pool"
              value="pool"
              checked={vinicola.pool}
              onChange={(e) =>
                setVinicola({ ...vinicola, pool: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Piscina</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="cable_car"
              value="cable_car"
              checked={vinicola.cable_car}
              onChange={(e) =>
                setVinicola({ ...vinicola, cable_car: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Teleférico</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="kayak"
              value="kayak"
              checked={vinicola.kayak}
              onChange={(e) =>
                setVinicola({ ...vinicola, kayak: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Kayak</span>
          </label>
        </div>
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
