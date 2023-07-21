const Main = () => {
  return (
    <div className="bg-[#F6f6f6]">
      <section className="relative">
        <div className="relative z-10 max-w-screen-[1400px] mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl paragraph font-extrabold mx-auto md:text-5xl font-naveidExbd">
              Descubra as melhores vinícolas do mundo. Junte-se a nós e explore
              o mundo dos vinhos!
            </h2>
            <p className="max-w-2xl mx-auto text-black font-gilroyLt">
              Se você é um proprietário ou representante de uma vinícola e está
              procurando uma maneira eficaz de alcançar mais clientes e expandir
              seus negócios, não perca a oportunidade de se cadastrar em nosso
              site!
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, #5d5d3c 15.73%, #fc9f32 15.74%, #ae1b1e 56.49%, #1a2766 115.91%)",
            opacity: 0.6,
          }}
        ></div>
      </section>
    </div>
  );
};

export default Main;
