import { Carousel } from 'flowbite-react'

const Main = () => {
  return (<>
    <div className="h-[80vh] sm:h-[90vh] xl:h-[90vh] 2xl:h-96">
      <Carousel
        indicators={true}
        slideInterval={7000}
        leftControl={true}
        rightControl={true}
      >
        <img
          src="https://gastronomium.com.br/wp-content/uploads/2020/09/vinicolas-brasil.jpg"
          alt="..."
        />
        <img
          src="http://s2.glbimg.com/gvdbcoWjOqRRa2W5DrVkdOcv6Rg=/1200x630/s.glbimg.com/jo/g1/f/original/2013/12/02/suzin.jpg"
          alt="..."
        />
        <img
          src="https://infinityturismo.tur.br/wp-content/uploads/2019/06/vale_vinhedos_uva_vinho-13.png"
          alt="..."
        />
        <img
          src="https://i1.wp.com/quegostoso.tur.br/wp-content/uploads/2021/07/Louveira-SP-Vinhos-Micheletto-2021-3-Foto-Claudio-Schapochnik-Que-Gostoso.jpg?fit=1280%2C576"
          alt="..."
        />
        <img
          src="https://blog.grandcru.com.br/wp-content/uploads/2016/07/norte-vale-do-rhone-vinhos-franca.jpg?x80643"
          alt="..."
        />
      </Carousel>
    </div>
  </>
  )
}

export { Main }