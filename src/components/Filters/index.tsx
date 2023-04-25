import { useState, useEffect } from "react";
import { GiWineGlass } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineHotel, MdOutlinePedalBike } from "react-icons/md";
import {
  TbCoffee,
  TbKayak,
  TbMoodKid,
  TbPool,
  TbTrekking,
} from "react-icons/tb";
import { RiLandscapeLine } from "react-icons/ri";
import { BiAccessibility, BiCableCar } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { Container } from "./Categories/Container";

const Filter = ({ setFiltered, vinicolas }: any) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    let filteredVinicolas = vinicolas;

    if (activeCategory !== "all") {
      filteredVinicolas = filteredVinicolas.filter(
        (vinicola: any) => vinicola[activeCategory] === true);
    }

    setFiltered(filteredVinicolas);
  }, [activeCategory, setFiltered, vinicolas]);

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        <div className="flex items-center justify-center gap-6 p-3 hover:text-neutral-800 transition cursor-pointer">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            <TiThSmallOutline size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Todas
            </span>
          </button>
          <button
            className={activeCategory === "wine_tasting" ? "active" : ""}
            onClick={() => setActiveCategory("wine_tasting")}
          >
            <GiWineGlass size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Degustação
            </span>
          </button>
          <button
            className={activeCategory === "tour" ? "active" : ""}
            onClick={() => setActiveCategory("tour")}
          >
            <HiOutlineUserGroup size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Tour
            </span>
          </button>
          <button
            className={activeCategory === "restaurant" ? "active" : ""}
            onClick={() => setActiveCategory("restaurant")}
          >
            <IoRestaurantOutline size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Restaurante
            </span>
          </button>
          <button
            className={activeCategory === "hotel" ? "active" : ""}
            onClick={() => setActiveCategory("hotel")}
          >
            <MdOutlineHotel size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Hotel
            </span>
          </button>
          <button
            className={activeCategory === "bikes" ? "active" : ""}
            onClick={() => setActiveCategory("bikes")}
          >
            <MdOutlinePedalBike size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Bikes
            </span>
          </button>
          <button
            className={activeCategory === "trakking" ? "active" : ""}
            onClick={() => setActiveCategory("trakking")}
          >
            <TbTrekking size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Trihas
            </span>
          </button>
          <button
            className={activeCategory === "viewpoint" ? "active" : ""}
            onClick={() => setActiveCategory("viewpoint")}
          >
            <RiLandscapeLine size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Mirante
            </span>
          </button>
          <button
            className={activeCategory === "cafeteria" ? "active" : ""}
            onClick={() => setActiveCategory("cafeteria")}
          >
            <TbCoffee size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Cafeteria
            </span>
          </button>
          <button
            className={activeCategory === "playground" ? "active" : ""}
            onClick={() => setActiveCategory("playground")}
          >
            <TbMoodKid size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Playground
            </span>
          </button>
          <button
            className={activeCategory === "acessibility" ? "active" : ""}
            onClick={() => setActiveCategory("acessibility")}
          >
            <BiAccessibility size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Acessibilidade
            </span>
          </button>
          <button
            className={activeCategory === "pool" ? "active" : ""}
            onClick={() => setActiveCategory("pool")}
          >
            <TbPool size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Piscina
            </span>
          </button>
          <button
            className={activeCategory === "cable_car" ? "active" : ""}
            onClick={() => setActiveCategory("cable_car")}
          >
            <BiCableCar size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Teleférico
            </span>
          </button>
          <button
            className={activeCategory === "kayak" ? "active" : ""}
            onClick={() => setActiveCategory("kayak")}
          >
            <TbKayak size={26} className="mx-auto" />
            <span className="block text-center font-naveidLt text-sm">
              Kayak
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export { Filter };
