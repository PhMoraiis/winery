import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Filter = ({ setActiveCategory, activeCategory, setFiltered, vinicolas }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = vinicolas;

    if (activeCategory !== "all") {
      filtered = filtered.filter((item: any) => item[activeCategory] === 1);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item: any) =>
          item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }

    setFiltered(filtered);
  }, [activeCategory, searchTerm]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="filter-container flex justify-center items-center">
      <h1 className="text-black text-lg mt-8">Filtros:</h1>
      <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
        Todos
      </button>
      <button className={activeCategory === "pets" ? "active" : ""} onClick={() => setActiveCategory("pets")}>
        Pet-friendly
      </button>
      <button className={activeCategory === "wifi" ? "active" : ""} onClick={() => setActiveCategory("wifi")}>
        Wifi
      </button>
      <button className={activeCategory === "cafe" ? "active" : ""} onClick={() => setActiveCategory("cafe")}>
        Café da Manhã
      </button>
      <button className={activeCategory === "winetaste" ? "active" : ""} onClick={() => setActiveCategory("winetaste")}>
        Degustação de Vinhos
      </button>
      <div className="search-container flex justify-center items-center">
      <AiOutlineSearch className="text-3xl mr-4" /> <input type="text" placeholder="Pesquisar por nome" value={searchTerm} onChange={handleSearchInputChange} />
      </div>
    </div>
  );
};

export { Filter };