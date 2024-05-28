import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div className="bg-newsBackground">
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
