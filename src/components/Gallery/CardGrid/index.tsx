import { MiniCard } from "../MiniCard"

const CardGrid = () => {
  return (
    <section className="text-gray-400 bg-[#F6f6f6] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl mb-4 paragraph font-naveidBd">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-gilroyLt">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Aqui irá o método map que irá pegar a quantidade necessária dos <Card /> que estão no banco de dados
          substituindo os minicards importados */}
          <MiniCard />
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
    </section>
  )
}

export { CardGrid }
