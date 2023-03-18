import { Cards } from "../Cards"
import { Filter } from "../Filter"

import { useEffect, useState } from "react"
import axios from "axios"

const GridCards = () => {
  const [vinicolas, setVinicolas] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState(1)

  const getVinicolas = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setVinicolas(res.data.sort((a: any, b: any) => (a.price > b.price ? 1 : -1)))
      setFiltered(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVinicolas()
  }, [])

  return (
    <div id="props">
      <Filter vinicolas={vinicolas} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <div className="grid grid-cols-2 gap-8 px-8">
        {filtered.map((item: any) => (
          <Cards vinicolas={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export { GridCards }
