import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"} className="link">
        Graphql
      </Link>
    </nav>
  );
};

export default Navbar;
