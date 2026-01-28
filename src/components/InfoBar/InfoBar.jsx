import { Icons } from "../../assets/icons";
import { useGetDashboardStatsQuery } from "../../services/dashboardApi";
import "./InfoBar.css";

function InfoItem({ label, value, loading }) {
  return (
    <div className="info-item">
      <span className="info-link">{label}</span>
      <span className="info-count">{loading ? "…" : (value ?? 0)}</span>
    </div>
  );
}

function Separator() {
  return <div className="separator"></div>;
}

function InfoBar() {
  const { data, isLoading, isError } = useGetDashboardStatsQuery();

  const role = localStorage.getItem("role");

  console.log("stats", data);

  function formatRole(role) {
    return role
      .replace(/^ROLE_/, "")
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <div className="info-bar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left */}
          <div className="d-flex align-items-center gap-2 info-left">
            <div>{Icons.InfoCircle}</div>
            <div>{`${formatRole(role)} Dashboard`}</div>
          </div>

          {/* Right */}
          {role == "ROLE_ADMIN" && (
            <div className="d-flex align-items-center info-menu">
              <InfoItem
                label="Doctors"
                value={data?.doctors}
                loading={isLoading}
              />
              <Separator />

              <InfoItem
                label="Patients"
                value={data?.patients}
                loading={isLoading}
              />
              <Separator />

              <InfoItem
                label="Receptionists"
                value={data?.receptionists}
                loading={isLoading}
              />
              <Separator />

              <InfoItem
                label="Admins"
                value={data?.admins}
                loading={isLoading}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default InfoBar;
