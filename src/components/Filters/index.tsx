import { useEffect, useState } from "react";
import { Container } from "./Categories/Container";
import { IconType } from "react-icons";

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

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  vinicolas,
}: any) => {
  useEffect(() => {
    let filtered = vinicolas;

    if (activeCategory !== "all") {
      filtered = filtered.filter((item: any) => item[activeCategory] === 1);
    }

    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer md:w-1/4 lg:w-1/5 xl:w-1/6">
        <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${activeCategory ? "border-b-neutral-800" : "border-transparent"}
        ${activeCategory ? "text-neutral-800" : "text-neutral-500"}`}>
          <button
            className={activeCategory === "wine_tasting" ? "active" : ""}
            onClick={() => setActiveCategory("wine_tasting")}>
            <GiWineGlass size={26} />
            Degustação
          </button>
          <button
            className={activeCategory === "tour" ? "active" : ""}
            onClick={() => setActiveCategory("tour")}>
            <HiOutlineUserGroup size={26} />
            Tour
          </button>
          <button
            className={activeCategory === "restaurant" ? "active" : ""}
            onClick={() => setActiveCategory("restaurant")}>
            <IoRestaurantOutline size={26} />
            Restaurante
          </button>
          <button
            className={activeCategory === "hotel" ? "active" : ""}
            onClick={() => setActiveCategory("hotel")}>
            <MdOutlineHotel size={26} />
            Hotel
          </button>
          <button
            className={activeCategory === "bikes" ? "active" : ""}
            onClick={() => setActiveCategory("bikes")}>
            <MdOutlinePedalBike size={26} />
            Bikes
          </button>
          <button
            className={activeCategory === "trakking" ? "active" : ""}
            onClick={() => setActiveCategory("trakking")}>
            <TbTrekking size={26} />
            Trilhas
          </button>
          <button
            className={activeCategory === "viewpoint" ? "active" : ""}
            onClick={() => setActiveCategory("viewpoint")}>
            <RiLandscapeLine size={26} />
            Mirante
          </button>
          <button
            className={activeCategory === "cafeteria" ? "active" : ""}
            onClick={() => setActiveCategory("cafeteria")}>
            <TbCoffee size={26} />
            Cafeteria
          </button>
          <button
            className={activeCategory === "playground" ? "active" : ""}
            onClick={() => setActiveCategory("playground")}>
            <TbMoodKid size={26} />
            Playground
          </button>
          <button
            className={activeCategory === "acessibility" ? "active" : ""}
            onClick={() => setActiveCategory("acessibility")}>
            <BiAccessibility size={26} />
            Acessibilidade
          </button>
          <button
            className={activeCategory === "pool" ? "active" : ""}
            onClick={() => setActiveCategory("pool")}>
            <TbPool size={26} />
            Piscina
          </button>
          <button
            className={activeCategory === "cable_car" ? "active" : ""}
            onClick={() => setActiveCategory("cable_car")}>
            <BiCableCar size={26} />
            Teleférico
          </button>
          <button
            className={activeCategory === "kayak" ? "active" : ""}
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
