import "./SideBarListItem.css";

function SideBarListItem({ item }) {
  return (
    <div className="sidebar-list-item">
      <div>{item.icon}</div>
      <div>{item.title}</div>
    </div>
  );
}

export default SideBarListItem;
