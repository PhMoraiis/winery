import { IoBagCheckOutline } from 'react-icons/io5'

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <a href="/"> <img src="" alt=""/></a>
                </div>
                <div>
                    <a href="">Home</a>
                    <a href="">Vinicolas</a>
                    <a href="">Galeria</a>
                    <a href="">Eventos</a>
                    <a href="">Loja</a>
                </div>
                <div>
                    <button>Fale Conosco</button>
                    <IoBagCheckOutline />
                </div>
            </div>
        </nav>
    )
}

export { Navbar }