import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
        <main>{children}</main>;
      <Footer />
    </div>
  );
};

export default Layout;