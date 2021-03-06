import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/movies">
          Films
        </NavLink>
        <NavLink exact to="/movies/new">
          Post
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
