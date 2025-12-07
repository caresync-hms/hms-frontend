import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBarListItem.css";
import { Icons } from "../../assets/icons";

function SideBarListItem({ item }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open); // Toggle submenu
    } else {
      navigate(item.navigateTo); // Navigate only if no children
    }
  };

  return (
    <div>
      <div className="sidebar-list-item" onClick={handleClick}>
        <div>{item.icon}</div>
        <div>{item.title}</div>
        {hasChildren && <div>{open ? Icons.ArrowDown : Icons.ArrowRight}</div>}
      </div>

      {hasChildren && open && (
        <div className="sidebar-nested">
          {item.children.map((child, idx) => (
            <SideBarListItem key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SideBarListItem;
