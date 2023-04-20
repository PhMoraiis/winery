import { TbPool, TbTrekking, TbCoffee, TbMoodKid, TbKayak } from "react-icons/tb";
import { GiWineGlass} from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineHotel, MdOutlinePedalBike } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { RiLandscapeLine } from "react-icons/ri";
import { BiAccessibility, BiCableCar } from "react-icons/bi";


import { CategoryBox } from "./categoryBox";
import { Container } from "./Container";

export const categories = [
  {
    label: "Degustação",
    icon: GiWineGlass,
  },
  {
    label: "Tour",
    icon: HiOutlineUserGroup,
  },
  {
    label: "Restaurante",
    icon: IoRestaurantOutline,
  },
  {
    label: "Hotel",
    icon: MdOutlineHotel,
  },
  {
    label: "Bikes",
    icon: MdOutlinePedalBike,
  },
  {
    label: "Trilhas",
    icon: TbTrekking,
  },
  {
    label: "Mirante",
    icon: RiLandscapeLine,
  },
  {
    label: "Cafeteria",
    icon: TbCoffee,
  },
  {
    label: "Kids",
    icon: TbMoodKid,
  },
  {
    label: "Acessibilidade",
    icon: BiAccessibility,
  },
  {
    label: "Piscinas",
    icon: TbPool,
  },
  {
    label: "Teleféricos",
    icon: BiCableCar,
  },
  {
    label: "Kayaks",
    icon: TbKayak,
  },
];

const Categories = () => {
  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
          bg-[#f6f6f6]
        "
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export { Categories };
