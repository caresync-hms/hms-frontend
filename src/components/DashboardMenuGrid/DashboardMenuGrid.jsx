
import { dashboardMenuGridConfig } from "./dashboardMenuGridConfig";
import DashboardMenuGridItem from "./DashboardMenuGridItem";

function DashboardMenuGrid() {
  return (
    <div className="row g-3 p-3">
      {dashboardMenuGridConfig.map((item, idx) => (
        <div
          key={idx}
          className="col-6 col-sm-4 col-md-3 col-lg-2"
        >
          <DashboardMenuGridItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default DashboardMenuGrid;

