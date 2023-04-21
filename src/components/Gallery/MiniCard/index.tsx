import { MiniCardProps } from "../types";

const MiniCard = ({ name, description, image, category }: MiniCardProps) => {
  return (
    <div className="lg:w-1/3 sm:w-2/4 max-xl:w-screen p-4 bg-[#f6f6f6]">
      <div className="flex relative shadow-lg shadow-gray-300">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-[#F7f7f7] bg-[#F6f6f6] opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-[1rem] title-font font-naveidBd paragraph mb-1">
            {name}
          </h2>
          <p className="leading-relaxed font-gilroyLt text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export { MiniCard };
