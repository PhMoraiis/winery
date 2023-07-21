import MiniCard from "../MiniCard";

import { useEffect, useState, useCallback } from "react";
import { API } from "../../../api";

type Vinicola = {
  id: string;
};

const CardGrid = (): JSX.Element => {
  const [vinicolas, setVinicolas] = useState<Vinicola[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const getVinicolas = useCallback(async (): Promise<void> => {
    try {
      const response = await API.get("/vinicolas");
      setVinicolas(vinicolas);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getVinicolas();
  }, [getVinicolas]);

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
            {noResults ? (
              <div className=" mx-auto space-y-3 text-center py-16">
                <h3 className="paragraph text-4xl font-naveidBd sm:text-5xl">
                  Nenhuma vinicola foi encontrada.
                </h3>
                <p className="text-black text-lg font-gilroyLt">
                  Desculpe, por favor tente novamente com outro filtro.
                </p>
              </div>
            ) : (
              vinicolas.map((item: Vinicola) => (
                <MiniCard vinicolas={item} key={item.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
