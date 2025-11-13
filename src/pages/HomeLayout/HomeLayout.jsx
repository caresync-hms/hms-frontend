import "./HomeLayout.css";
import SideBar from "./../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="horizontal-layout">
      <div className="horizontal-left">
        <SideBar />
      </div>
      <div className="horizontal-right">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
