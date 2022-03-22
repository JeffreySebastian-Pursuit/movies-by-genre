import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          Films
        </NavLink>
        <NavLink exact to="/films">
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
