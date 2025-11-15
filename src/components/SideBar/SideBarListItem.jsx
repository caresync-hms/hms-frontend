import { useNavigate } from "react-router-dom";
import "./SideBarListItem.css";

function SideBarListItem({ item }) {
  const navigate = useNavigate();

  const handleSideBarItemClick = () => {
    navigate(item.navigateTo);
  };
  return (
    <div className="sidebar-list-item" onClick={handleSideBarItemClick}>
      <div>{item.icon}</div>
      <div>{item.title}</div>
    </div>
  );
}

export default SideBarListItem;
