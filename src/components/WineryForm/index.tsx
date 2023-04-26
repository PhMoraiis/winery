import { useState } from "react";
import { VinicolaFormProps, WineryFormProps } from "./type";

const WineryForm: React.FC<WineryFormProps> = () => {
  const [vinicola, setVinicola] = useState<VinicolaFormProps>({
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
    accessibility: false,
    pool: false,
    cable_car: false,
    kayak: false,
  });  

  function handleSubmitForm(event: any) {
    event.preventDefault();
    const categoriasSelecionadas = Array.from(
      event.target.categorias.selectedOptions
    ).map((option: any) => option.value);
    console.log(categoriasSelecionadas);
    console.log(vinicola);
  }

  return (
    <form
      onSubmit={handleSubmitForm}
      className="bg-[#f6f6f6] py-6 px-6 rounded-md md:w-2/3 lg:w-[70vw] mx-auto"
    >
      <div className="flex flex-col md:flex-row">
        <label className="block mb-4 text-gray-700 md:w-1/4 font-naveidRg items-center flex">
          Nome*:
        </label>
        <input
          type="text"
          className="block w-full border-gray-500 rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
          value={vinicola.name}
          onChange={(e) => setVinicola({ ...vinicola, name: e.target.value })}
        />

        <label className="block mb-4 ml-10 text-gray-700 md:w-2/4 font-naveidRg items-center flex">
          URL da imagem*:
        </label>
        <input
          type="text"
          className="block w-full border-gray-500 rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
          value={vinicola.image}
          onChange={(e) => setVinicola({ ...vinicola, image: e.target.value })}
        />
      </div>
      <label className="block mb-2 text-gray-700 font-naveidRg">Descrição*:</label>
      <textarea
        className="block w-full border-gray-500 rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] resize-none"
        rows={3}
        value={vinicola.description}
        onChange={(e) =>
          setVinicola({ ...vinicola, description: e.target.value })
        }
      ></textarea>

      <label className="block mb-2 text-gray-700 font-naveidRg">Categorias</label>
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="categorias"
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
            name="categorias"
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
            name="categorias"
            value="restaurant"
            checked={vinicola.restaurant}
            onChange={(e) =>
              setVinicola({ ...vinicola, restaurant: e.target.checked })
            }
            className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
          />
          <span className="ml-3 text-gray-700 font-naveidRg">Restaurante</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="categorias"
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
            name="categorias"
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
            name="categorias"
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
            name="categorias"
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
            name="categorias"
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
            name="categorias"
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
            name="categorias"
            value="accessibility"
            checked={vinicola.accessibility}
            onChange={(e) =>
              setVinicola({ ...vinicola, accessibility: e.target.checked })
            }
            className="rounded-md text-[#fc9f32] focus:ring-[#ae1b1e]"
          />
          <span className="ml-3 text-gray-700 font-naveidRg">Acessibilidade</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="categorias"
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
            name="categorias"
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
            name="categorias"
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

      <button
        type="submit"
        className="gradient text-white font-naveidEl py-2 px-4 rounded-md mt-4"
      >
        Salvar
      </button>
    </form>
  );
};

export default WineryForm;
