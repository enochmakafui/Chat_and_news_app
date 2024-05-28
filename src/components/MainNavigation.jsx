import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="bg-slate-800 pt-4">
      <ul className="flex w-full justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-100 border-b-2 border-slate"
                : "text-slate-100"
            }
          >
            News{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "text-slate-100 border-b-2 border-slate"
                : "text-slate-100"
            }
          >
            Chat{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
