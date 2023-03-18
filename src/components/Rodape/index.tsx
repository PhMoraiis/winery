import { Footer } from 'flowbite-react'

const Rodape = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="#"
        by="Winery House™"
        year={2023}
        className="text-black"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          Sobre
        </Footer.Link>
        <Footer.Link href="#">
          Politica de Privacidade
        </Footer.Link>
        <Footer.Link href="#">
          Licença
        </Footer.Link>
        <Footer.Link href="#">
          Contato
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export { Rodape }	