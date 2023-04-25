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
    <div className="lg:w-1/3 sm:w-2/4 max-xl:w-screen p-4 bg-[#f6f6f6]">
      <div className="flex relative shadow-lg shadow-gray-300">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={vinicolas.image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-[#F7f7f7] bg-[#F6f6f6] opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-[1rem] title-font font-naveidBd paragraph mb-1">
            {vinicolas.nome}
          </h2>
          <p className="leading-relaxed font-gilroyLt">{vinicolas.description}</p>
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
        </div>
      </div>
    </div>
  );
};

export { MiniCard };