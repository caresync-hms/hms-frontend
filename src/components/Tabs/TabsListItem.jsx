import { useNavigate } from "react-router-dom";

function TabsListItem({ item, index, activeIndex, onClick }) {
  const isActive = index === activeIndex;

  return (
    <div
      className={`d-flex gap-2 nav-item nav-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div>{item.icon}</div>
      <div>{item.title}</div>
    </div>
  );
}

export default TabsListItem;
