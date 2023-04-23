import { useEffect, useState } from "react";
import { MiniCard } from "../MiniCard";
import { API } from "../../../api";
import { Vinicola } from "../../../types";
import { Filter } from "../../Filters";

interface Categoria {
  value: string;
}

const CardGrid = () => {
  const [vinicola, setVinicolas] = useState([]);
  const [filtro, setFiltro] = useState("null" as Categoria | "null");

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("/vinicolas");
      setVinicolas(response.data);
    };
    fetchData();
  }, []);

  const filterWinery = (winery: Vinicola): boolean => {
    if (filtro === "null") {
      return true;
    } else {
      return winery.toString() === filtro.toString();
    }
  };

  const options = [
    { value: "null" },
    { value: "wine_tasting" },
    { value: "tour" },
    { value: "restaurant" },
    { value: "hotel" },
    { value: "bikes" },
    { value: "trakking" },
    { value: "viewpoint" },
    { value: "cafeteria" },
    { value: "playground" },
    { value: "acessibility" },
    { value: "pool" },
    { value: "cable_car" },
    { value: "kayak" },
  ];

  return (
    <section className="text-gray-400 bg-[#F6f6f6] mt-16" id="vinicolas">
      <div className="px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl mb-4 paragraph font-naveidBd">
            Conheça as nossas vinícolas parceiras
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-gilroyLt">
            Nós estamos orgulhosos de trabalhar em conjunto com esses produtores
            de excelência e de trazer a você uma seleção cuidadosamente
            escolhida das melhores vinícolas disponíveis.
          </p>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Filter
            options={options}
            value={filtro}
            onChange={setFiltro}
          />
          <div className="flex flex-wrap -m-4">
            {vinicola.filter(filterWinery).map((winery: Vinicola) => (
              <MiniCard
                key={winery.id}
                id={winery.id}
                name={winery.name}
                description={winery.description}
                image={winery.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
