import { useEffect, useState } from "react";
import { MiniCard } from "../MiniCard";
import { API } from "../../../api";
import { Vinicola } from "../../../types";
import { Filter } from "../../Filters";


const CardGrid = () => {
  const [vinicola, setVinicolas] = useState<Vinicola[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("/vinicolas");
      setVinicolas(response.data);
    };
    fetchData();
  }, []);

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
          <Filter />
          <div className="flex flex-wrap -m-4">
            {vinicola.map((winery: Vinicola) => (
                <MiniCard
                  key={winery.id}
                  id={winery.id}
                  name={winery.name}
                  description={winery.description}
                  image={winery.image}
                  category={winery.category}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
