import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerNavs = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "#vinicolas",
      name: "Vinicolas",
    },
  ];

  return (
    <footer className="text-black bg-[#F6f6f6] px-4 pb-5 pt-20 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src="" className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px] font-gilroyLt">
        Não perca mais tempo! Cadastre-se hoje em nosso site e comece a desfrutar dos muitos benefícios de fazer parte de nossa comunidade de vinícolas.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 font-naveidLt">
        {footerNavs.map((item, idx) => (
          <li className="hover:text-[#ae1b1e]">
            <Link key={idx} to={item.to}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 font-naveidMd">
          &copy; 2023 Stellar. All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="">
              <BsFacebook className="hover:text-[#ae1b1e]" />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="">
                <BsInstagram className="hover:text-[#ae1b1e]" />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="">
                <BsTwitter className="hover:text-[#ae1b1e]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
    </footer>
  );
};
export { Footer };
