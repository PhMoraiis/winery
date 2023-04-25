import { Card } from "flowbite-react";
import { MdOutlineHotel, MdOutlinePedalBike } from "react-icons/md";
import { BiAccessibility, BiCableCar } from "react-icons/bi";
import { GiWineGlass } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";
import { RiLandscapeLine } from "react-icons/ri";
import {
  TbTrekking,
  TbCoffee,
  TbMoodKid,
  TbPool,
  TbKayak,
} from "react-icons/tb";

const MiniCard = ({ vinicolas }: any) => {
  return (
    <div className="gap-10 mt-4 bg-[#f6f6f6]">
      <Card
        imgSrc={vinicolas.image}
        imgAlt={vinicolas.nome}
        className="items-center"
      >
        <h1 className="text-center uppercase text-2xl text-[#0B141A] max-w-[300px]">
          {vinicolas.nome}
        </h1>
        <p className="mt-2 text-gray-500 max-w-[400px]">
          {vinicolas.description}
        </p>
        <ul className="my-4 flex flex-wrap justify-center mx-auto">
          <div className="flex">
            {vinicolas.wine_tasting ? (
              <GiWineGlass size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.tour ? (
              <HiOutlineUserGroup size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.restaurant ? (
              <IoRestaurantOutline size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.hotel ? (
              <MdOutlineHotel size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.bikes ? (
              <MdOutlinePedalBike size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.trakking ? (
              <TbTrekking size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.viewpoint ? (
              <RiLandscapeLine size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.cafeteria ? (
              <TbCoffee size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.playground ? (
              <TbMoodKid size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.acessibility ? (
              <BiAccessibility size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.pool ? (
              <TbPool size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.cable_car ? (
              <BiCableCar size={26} className="text-[#0B141A] mr-2" />
            ) : null}
            {vinicolas.kayak ? (
              <TbKayak size={26} className="text-[#0B141A] mr-2" />
            ) : null}
          </div>
        </ul>
      </Card>
    </div>
  );
};

export { MiniCard };
