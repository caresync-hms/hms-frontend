import { Outlet, useLocation } from "react-router-dom";

import "./RootLayout.css";
import NavBar from "./../../components/NavBar/NavBar";
import InfoBar from "./../../components/InfoBar/InfoBar";

const Layout = ({ TopComponent, BottomComponent }) => {
  const location = useLocation();

  const hideInfoBarPaths = ["/", "/register"];

  const shouldHideInfoBar = hideInfoBarPaths.includes(location.pathname);

  return (
    <div className="layout-container">
      <div className="layout-top">
        <NavBar />
        {!shouldHideInfoBar && <InfoBar />}
      </div>
      <div className="layout-bottom">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
