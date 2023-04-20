import { Categories } from "../../Filters/Categories";
import { MiniCard } from "../MiniCard";

const CardGrid = () => {
  return (
    <section className="text-gray-400 bg-[#F6f6f6] mt-16">
      <div className="px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl mb-4 paragraph font-naveidBd">
            Conheça as nossas vinicolas parceiras
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-gilroyLt">
          Nós estamos orgulhosos de trabalhar em conjunto com esses produtores de excelência e de trazer a você uma seleção cuidadosamente escolhida das melhores vinicolas disponíveis.
          </p>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -m-4">
            {/* Aqui irá o método map que irá pegar a quantidade necessária dos <Card /> que estão no banco de dados
        substituindo os minicards importados */}
            <Categories />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
