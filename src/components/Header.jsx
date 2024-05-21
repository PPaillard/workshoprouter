import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Frontend</NavLink>
        <NavLink to="/html">HTML</NavLink>
        <NavLink to="/articles">Articles</NavLink>
      </nav>
    </header>
  );
};

export default Header;
