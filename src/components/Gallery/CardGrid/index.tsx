import { MiniCard } from "../MiniCard"
import { Filter } from "../../Filters"

import { useEffect, useState } from "react"
import { API } from "../../../api"

const CardGrid = () => {
  const [vinicolas, setVinicolas] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState(1)

  const getVinicolas = async () => {
    try {
      const res = await API.get("/vinicolas")
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
          <MiniCard vinicolas={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export { CardGrid }
