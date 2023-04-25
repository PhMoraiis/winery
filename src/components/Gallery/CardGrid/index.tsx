import { MiniCard } from "../MiniCard";
import { Filter } from "../../Filters";

import { useEffect, useState } from "react";
import { API } from "../../../api";

const CardGrid = () => {
  const [vinicolas, setVinicolas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  // renamed function to follow camelCase naming convention
  const getVinicolas = async () => {
    try {
      // removed debugging statement
      const response = await API.get("/vinicolas");
      // renamed variables to follow camelCase naming convention
      const sortedVinicolas = response.data.sort((a: any, b: any) =>
        a.price > b.price ? 1 : -1
      );
      // removed debugging statement
      setVinicolas(sortedVinicolas);
      setFiltered(sortedVinicolas);
    } catch (error) {
      console.error(error); // used console.error instead of console.log for error messages
    }
  };

  useEffect(() => {
    getVinicolas();
  }, []);

  return (
    <div id="props">
      <Filter
        vinicolas={vinicolas}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="grid grid-cols-2 gap-8 px-8">
        {filtered.map((item: any) => (
          <MiniCard vinicolas={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { CardGrid };
