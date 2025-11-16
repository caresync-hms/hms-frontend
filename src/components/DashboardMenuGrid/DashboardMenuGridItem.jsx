import { useNavigate } from "react-router-dom";
import "./DashboardMenuGrid.css";

function DashboardMenuGridItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-menu-item" onClick={() => navigate(item.navigateTo)}>
      <div className="dashboard-icon">{item.icon}</div>
      <div className="dashboard-title">{item.title}</div>
    </div>
  );
}

export default DashboardMenuGridItem;
