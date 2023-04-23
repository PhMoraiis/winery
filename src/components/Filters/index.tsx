import { useEffect, useState } from "react";
import { Container } from "./Categories/Container";

import {
    TbPool,
    TbTrekking,
    TbCoffee,
    TbMoodKid,
    TbKayak,
} from "react-icons/tb";
import { GiWineGlass } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineHotel, MdOutlinePedalBike } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { RiLandscapeLine } from "react-icons/ri";
import { BiAccessibility, BiCableCar } from "react-icons/bi";
import { Vinicola } from "../../types";

const Filter = ({
  vinicolas,
  setActiveCategory,
  activeCategory,
  setFiltered
}: {
  vinicolas: Vinicola[];
  setActiveCategory: (category: string) => void;
  activeCategory: string;
  setFiltered: React.Dispatch<React.SetStateAction<Vinicola[]>>;
}) => {
  const [filtered, setFilteredState] = useState(vinicolas);

  useEffect(() => {
    let filtered = vinicolas;
    if (activeCategory !== "null") {
      filtered = filtered.filter((item) => item[activeCategory] === 1);
    }
    setFilteredState(filtered);
  }, [activeCategory, vinicolas]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer md:w-1/4 lg:w-1/5 xl:w-1/6">
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
          <button
            className={activeCategory === "wine_tasting" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("wine_tasting")}>
            <GiWineGlass size={26} />
            Degustação
          </button>
          <button
            className={activeCategory === "tour" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("tour")}>
            <HiOutlineUserGroup size={26} />
            Tour
          </button>
          <button
            className={activeCategory === "restaurant" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("restaurant")}>
            <IoRestaurantOutline size={26} />
            Restaurante
          </button>
          <button
            className={activeCategory === "hotel" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("hotel")}>
            <MdOutlineHotel size={26} />
            Hotel
          </button>
          <button
            className={activeCategory === "bikes" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("bikes")}>
            <MdOutlinePedalBike size={26} />
            Bikes
          </button>
          <button
            className={activeCategory === "trakking" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("trakking")}>
            <TbTrekking size={26} />
            Trilhas
          </button>
          <button
            className={activeCategory === "viewpoint" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("viewpoint")}>
            <RiLandscapeLine size={26} />
            Mirante
          </button>
          <button
            className={activeCategory === "cafeteria" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("cafeteria")}>
            <TbCoffee size={26} />
            Cafeteria
          </button>
          <button
            className={activeCategory === "playground" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("playground")}>
            <TbMoodKid size={26} />
            Playground
          </button>
          <button
            className={activeCategory === "acessibility" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("acessibility")}>
            <BiAccessibility size={26} />
            Acessibilidade
          </button>
          <button
            className={activeCategory === "pool" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("pool")}>
            <TbPool size={26} />
            Piscina
          </button>
          <button
            className={activeCategory === "cable_car" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("cable_car")}>
            <BiCableCar size={26} />
            Teleférico
          </button>
          <button
            className={activeCategory === "kayak" ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}
            onClick={() => setActiveCategory("kayak")}>
            <TbKayak size={26} />
            Kayak
          </button>
        </div>
      </div>
    </Container>
  );
};

export { Filter };
