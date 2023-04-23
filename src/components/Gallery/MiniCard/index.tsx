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
    <div className="gap-10 mt-10 bg-[#f6f6f6]">
      <Card
        imgSrc={vinicolas.image}
        imgAlt={vinicolas.nome}
        className="items-center"
      >
        <h1 className="text-center uppercase text-2xl text-[#0B141A] max-w-[300px]">
          {vinicolas.nome}
        </h1>
        <h3 className="text-center uppercase font-bold text-[#0B141A] max-w-[300px]">
          {vinicolas.local}
        </h3>
        <p className="mt-2 text-gray-500 max-w-[400px]">
          {vinicolas.description}
        </p>
        <ul className="my-4 flex flex-wrap justify-center mx-auto">
          <div className="flex">
            {vinicolas.wine_tasting ? (
              <GiWineGlass className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.tour ? (
              <HiOutlineUserGroup className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.restaurant ? (
              <IoRestaurantOutline className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.hotel ? (
              <MdOutlineHotel className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.bikes ? (
              <MdOutlinePedalBike className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.trakking ? (
              <TbTrekking className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.viewpoint ? (
              <RiLandscapeLine className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.cafeteria ? (
              <TbCoffee className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.playground ? (
              <TbMoodKid className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.acessibility ? (
              <BiAccessibility className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.pool ? (
              <TbPool className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.cable_car ? (
              <BiCableCar className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
            {vinicolas.kayak ? (
              <TbKayak className="text-[#0B141A] mr-2 text-2xl" />
            ) : null}
          </div>
        </ul>
      </Card>
    </div>
  );
};

export { MiniCard };
