import { Navbar } from "flowbite-react"
import { FaWineGlassAlt } from "react-icons/fa"

const Header = () => {
  return (
    <Navbar
      fluid={false}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white uppercase">
          Winery House
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="bg-[#11412B] rounded-lg px-4 py-2 text-white uppercase">
          Fale Conosco
        </button>
        <FaWineGlassAlt className="text-[#5E2129] text-2xl ml-2 mt-2" />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <a
          href="/"
          className="text-[#11412B] duration-300 uppercase "
        >
          Home
        </a>
        <a href="/#props" className="text-[#666] hover:text-[#11412B] duration-300 uppercase">
          Vinícolas
        </a>
        <a href="/" className="text-[#666] hover:text-[#11412B] duration-300 uppercase">
          Galeria
        </a>
        <a href="/" className="text-[#666] hover:text-[#11412B] duration-300 uppercase">
          Eventos
        </a>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { Header }