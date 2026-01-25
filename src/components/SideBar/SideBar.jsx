import "./SideBar.css";
import { sidebarConfig } from "./sidebarConfig";
import SideBarListItem from "./SideBarListItem";

import { useSelector } from "react-redux";

function SideBar() {
  const role = useSelector((state) => state.auth.role);
  let sideBarList = sidebarConfig[role] || [];

  const renderedSideBarList = sideBarList.map((item, idx) => {
    return <SideBarListItem key={idx} item={item} />;
  });
  return (
    <div className="container sidebar-container list-group">
      <div className="py-1"></div>
      {renderedSideBarList}
    </div>
  );
}

export default SideBar;
