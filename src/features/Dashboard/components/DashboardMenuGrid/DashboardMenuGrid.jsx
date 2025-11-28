import DashboardMenuGridItem from "./DashboardMenuGridItem";
import { dashboardConfig } from "./../../dashboardConfig";
import { useSelector } from "react-redux";

function DashboardMenuGrid() {
  const role = useSelector((state) => state.userRole.role);
  const menuGridItemList = dashboardConfig[role] || [];
  return (
    <div className="row g-3 p-3">
      {menuGridItemList.map((item, idx) => (
        <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
          <DashboardMenuGridItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default DashboardMenuGrid;
