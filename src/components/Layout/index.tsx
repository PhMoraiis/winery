import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <body className="bg-white max-w-screen-[1400px]">
      <Header />
        <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;