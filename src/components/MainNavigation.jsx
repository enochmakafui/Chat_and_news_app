import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="bg-slate-800 pt-4 pb-1">
      <ul className="flex w-full justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-100 border-b-2 border-slate font-bold text-lg"
                : "text-slate-100 font-bold text-lg"
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
                ? "text-slate-100 border-b-2 border-slate font-bold text-lg"
                : "text-slate-100 font-bold text-lg"
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
