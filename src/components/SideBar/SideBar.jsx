import "./SideBar.css";
import { sidebarConfig } from "./sidebarConfig";
import SideBarListItem from "./SideBarListItem";
import RoleSelector from "./../InfoBar/RoleSelector";
import { useState } from "react";

function SideBar() {
  const [role, setRole] = useState("admin"); // fallback for now later add by localstorage
  let sideBarList = sidebarConfig[role] || [];

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const renderedSideBarList = sideBarList.map((item, idx) => {
    return <SideBarListItem key={idx} item={item} />;
  });
  return (
    <div className="container sidebar-container list-group">
      <div className="py-4">
        <RoleSelector onRoleChange={handleRoleChange} />
      </div>
      {renderedSideBarList}
    </div>
  );
}

export default SideBar;
