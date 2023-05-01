import { useState, useEffect } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { API } from "../../api";
import { VinicolaFormProps } from "../../types/type";

const WineryEditForm = () => {
  const [winery, setWinery] = useState<VinicolaFormProps>({
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

  useEffect(() => {
    if (winery.id) {
      // buscar dados da vinícola no backend e atualizar o estado
      API.get(`/vinicolas/${winery.id}`, { responseType: "json" })
        .then((response: AxiosResponse<VinicolaFormProps>) => {
          setWinery(response.data);
        })
        .catch((error: AxiosError) => {
          console.error(error);
        });
    }
  }, [winery.id]);
  

  const handleEditVinicola = () => {
    // enviar dados atualizados da vinícola para o backend
    const updatedWinery = { ...winery };
    delete updatedWinery.id;
    API.put(`/vinicolas/${winery.id}`, updatedWinery, { responseType: "json" })
      .then((response: AxiosResponse<VinicolaFormProps>) => {
        console.log("Winery updated:", response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  };
  

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-naveidBd mt-8 mb-8 paragraph">
        Editar Vinícola
      </h1>
      <form
        onSubmit={handleEditVinicola}
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
            value={winery.name}
            onChange={(e) => setWinery({ ...winery, name: e.target.value })}
          />

          <label className="block mb-4 ml-10 mt-2 text-gray-700 md:w-2/4 font-naveidRg items-center">
            URL da imagem*:
          </label>
          <input
            type="text"
            name="image"
            className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={winery.image}
            onChange={(e) =>
              setWinery({ ...winery, image: e.target.value })
            }
          />
        </div>
        <label className="block mb-2 text-gray-700 font-naveidRg">
          Descrição*:
        </label>
        <textarea
          className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] resize-none"
          rows={4}
          value={winery.description}
          name="description"
          onChange={(e) =>
            setWinery({ ...winery, description: e.target.value })
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
              checked={winery.wine_tasting}
              onChange={(e) =>
                setWinery({ ...winery, wine_tasting: e.target.checked })
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
              checked={winery.tour}
              onChange={(e) =>
                setWinery({ ...winery, tour: e.target.checked })
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
              checked={winery.restaurant}
              onChange={(e) =>
                setWinery({ ...winery, restaurant: e.target.checked })
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
              checked={winery.hotel}
              onChange={(e) =>
                setWinery({ ...winery, hotel: e.target.checked })
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
              checked={winery.bikes}
              onChange={(e) =>
                setWinery({ ...winery, bikes: e.target.checked })
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
              checked={winery.trakking}
              onChange={(e) =>
                setWinery({ ...winery, trakking: e.target.checked })
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
              checked={winery.viewpoint}
              onChange={(e) =>
                setWinery({ ...winery, viewpoint: e.target.checked })
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
              checked={winery.cafeteria}
              onChange={(e) =>
                setWinery({ ...winery, cafeteria: e.target.checked })
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
              checked={winery.playground}
              onChange={(e) =>
                setWinery({ ...winery, playground: e.target.checked })
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
              checked={winery.acessibility}
              onChange={(e) =>
                setWinery({ ...winery, acessibility: e.target.checked })
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
              checked={winery.pool}
              onChange={(e) =>
                setWinery({ ...winery, pool: e.target.checked })
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
              checked={winery.cable_car}
              onChange={(e) =>
                setWinery({ ...winery, cable_car: e.target.checked })
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
              checked={winery.kayak}
              onChange={(e) =>
                setWinery({ ...winery, kayak: e.target.checked })
              }
              className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
            />
            <span className="ml-3 text-gray-700 font-naveidRg">Kayak</span>
          </label>
        </div>
      </form>
      <button
        className="gradient text-white font-gilroyLt py-2 px-6 rounded-lg mt-8"
        onClick={handleEditVinicola}
      >
        Editar
      </button>
    </div>
  );
};

export default WineryEditForm;
