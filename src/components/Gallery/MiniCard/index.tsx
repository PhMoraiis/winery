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
import React from "react";

const MiniCard = ({ vinicolas }: any) => {
  return (
    <div className="lg:w-1.5/3 sm:w-2/4 max-xl:w-screen p-4 bg-[#f6f6f6]">
      <div className="flex relative shadow-lg shadow-gray-300 h-full">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={vinicolas.image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-[#F7f7f7] bg-[#F6f6f6] opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-[1rem] title-font font-naveidBd paragraph2 mb-1">
            {vinicolas.name}
          </h2>
          <p className="leading-relaxed font-gilroyLt">{vinicolas.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;