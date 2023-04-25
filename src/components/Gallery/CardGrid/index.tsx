import { MiniCard } from "../MiniCard";
import { Filter } from "../../Filters";

import { useEffect, useState } from "react";
import { API } from "../../../api";

const CardGrid = () => {
  const [vinicolas, setVinicolas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  // renamed function to follow camelCase naming convention
  const getVinicolas = async () => {
    try {
      // removed debugging statement
      const response = await API.get("/vinicolas");
      // renamed variables to follow camelCase naming convention
      const sortedVinicolas = response.data.sort((a: any, b: any) =>
        a.price > b.price ? 1 : -1
      );
      // removed debugging statement
      setVinicolas(sortedVinicolas);
      setFiltered(sortedVinicolas);
    } catch (error) {
      console.error(error); // used console.error instead of console.log for error messages
    }
  };

  useEffect(() => {
    getVinicolas();
  }, []);

  return (
    <section id="vinicolas" className="text-gray-600 bg-[#F6f6f6] mt-16">
      <div className="px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl mb-4 paragraph font-naveidBd">
            Conheça as nossas vinicolas parceiras
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-gilroyLt">
            Nós estamos orgulhosos de trabalhar em conjunto com esses produtores
            de excelência e de trazer a você uma seleção cuidadosamente
            escolhida das melhores vinicolas disponíveis.
          </p>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -m-4">
            <Filter
              vinicolas={vinicolas}
              setFiltered={setFiltered}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {filtered.map((item: any) => (
              <MiniCard vinicolas={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
