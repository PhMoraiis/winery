import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Home",
    },
    {
      href: "javascript:void()",
      name: "Vinicolas",
    },
  ];

  return (
    <footer className="text-black bg-[#F6f6f6] px-4 pb-5 pt-20 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src="" className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
        Não perca mais tempo! Cadastre-se hoje em nosso site e comece a desfrutar dos muitos benefícios de fazer parte de nossa comunidade de vinícolas.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="hover:text-[#ae1b1e]">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Stellar. All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="javascript:void()">
              <BsFacebook className="hover:text-[#ae1b1e]" />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <BsInstagram className="hover:text-[#ae1b1e]" />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <BsTwitter className="hover:text-[#ae1b1e]" />
              </a>
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
