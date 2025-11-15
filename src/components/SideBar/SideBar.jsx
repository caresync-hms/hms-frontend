import "./SideBar.css";
import { sidebarConfig } from "./sidebarConfig";
import SideBarListItem from "./SideBarListItem";

function SideBar() {
  const role = "admin"; // fallback for now later add by localstorage
  const sideBarList = sidebarConfig[role] || [];
  const renderedSideBarList = sideBarList.map((item, idx) => {
    return <SideBarListItem key={idx} item={item} />;
  });
  return (
    <div className="container sidebar-container list-group">
      {renderedSideBarList}
    </div>
  );
}

export default SideBar;
