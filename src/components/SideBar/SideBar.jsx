import "./SideBar.css";
import { sidebarConfig } from "./sidebarConfig";
import SideBarListItem from "./SideBarListItem";
import RoleSelector from "./../InfoBar/RoleSelector";

import { useSelector } from "react-redux";

function SideBar() {
  const role = useSelector((state) => state.userRole.role);

  let sideBarList = sidebarConfig[role] || [];

  const renderedSideBarList = sideBarList.map((item, idx) => {
    return <SideBarListItem key={idx} item={item} />;
  });
  return (
    <div className="container sidebar-container list-group">
      <div className="py-4">
        <RoleSelector />
      </div>
      {renderedSideBarList}
    </div>
  );
}

export default SideBar;
