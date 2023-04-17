const Main = () => {
  return (
    <div className="bg-[#F6f6f6]">
      <section className="relative">
        <div className="relative z-10 max-w-screen-[1400px] mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl paragraph font-extrabold mx-auto md:text-5xl">
            Descubra as melhores vinícolas do mundo. Junte-se a nós e explore o mundo dos vinhos!
            </h2>
            <p className="max-w-2xl mx-auto text-black">
            Se você é um proprietário ou representante de uma vinícola e está procurando uma maneira eficaz de alcançar mais clientes e expandir seus negócios, não perca a oportunidade de se cadastrar em nosso site!
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="justify-center items-center gap-x-3 sm:flex"
            >
              <input
                type="text"
                placeholder="Digite seu e-mail."
                className="w-full px-3 py-2.5 text-gray-700 bg-white focus:bg-white duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
              />
              <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium gradient duration-150 rounded-lg sm:mt-0 sm:w-auto">
                Cadastrar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
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

export { Main };