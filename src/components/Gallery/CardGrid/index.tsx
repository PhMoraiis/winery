import MiniCard from "../MiniCard";
import { useEffect, useState } from "react";
import { API } from "../../../api";

type Vinicola = {
  id: string;
};

const CardGrid = (): JSX.Element => {
  const [vinicolas, setVinicolas] = useState<Vinicola[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVinicolas = async (): Promise<void> => {
      try {
        const response = await API.get("/vinicolas");
        setVinicolas(response.data); // Assuming the response data is an array of Vinicola objects
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Error fetching data. Please try again later.");
      }
    };
    getVinicolas();
  }, []);

  return (
    <section id="vinicolas" className="text-gray-600 bg-[#F6f6f6] mt-16">
      <div className="px-4 py-2 mx-auto">
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
          <div className="flex flex-wrap -m-4">
            {loading ? (
              <div className="mx-auto space-y-3 text-center py-16">
                <h3 className="paragraph text-4xl font-naveidBd sm:text-5xl">
                  Carregando...
                </h3>
              </div>
            ) : error ? (
              <div className="mx-auto space-y-3 text-center py-16">
                <h3 className="paragraph text-4xl font-naveidBd sm:text-5xl">
                  Erro ao carregar vinícolas.
                </h3>
                <p className="text-black text-lg font-gilroyLt">{error}</p>
              </div>
            ) : vinicolas.length === 0 ? (
              <div className="mx-auto space-y-3 text-center py-16">
                <h3 className="paragraph text-4xl font-naveidBd sm:text-5xl">
                  Nenhuma vinícola foi encontrada.
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
