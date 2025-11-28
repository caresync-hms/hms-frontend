import "./SideBar.css";
import { sidebarConfig } from "./sidebarConfig";
import SideBarListItem from "./SideBarListItem";
import RoleSelector from "./../InfoBar/RoleSelector";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setRole } from "../../features/auth/userRoleSlice";

function SideBar() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userRole.role);

  let sideBarList = sidebarConfig[role] || [];

  const handleRoleChange = (newRole) => {
    dispatch(setRole(newRole));
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
