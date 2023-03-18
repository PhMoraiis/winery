import { Cards } from "./components/Cards"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Rodape } from "./components/Rodape"
{/*import { Filter } from "./components/Filter" */}

const App = () => {
  return (
    <div className="">
      <Header />
      <Main />
      {/* <Filter /> */}
      <div className="flex justify-center mt-16 px-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Rodape />
    </div>
  )
}

export default App
