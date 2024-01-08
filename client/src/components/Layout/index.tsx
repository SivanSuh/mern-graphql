import Navbar from "../Navbar";
import LayoutProps from "./props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="layout">
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
