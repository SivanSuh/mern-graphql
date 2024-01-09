import Navbar from "../Navbar";
import LayoutProps from "./props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="layout">
      <Navbar />
      <div className="children">{children}</div>
    </main>
  );
};

export default Layout;
