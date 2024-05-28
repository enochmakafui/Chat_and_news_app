import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <ul className="flex w-full justify-evenly">
      <li>
        <NavLink to="/">News </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/chat">Chat </NavLink>
      </li>
    </ul>
  );
};

export default MainNavigation;
