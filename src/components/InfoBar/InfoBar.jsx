import { Icons } from "../../assets/icons";
import "./InfoBar.css";

function InfoBar() {
  return (
    <div className="info-bar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2 info-left">
            <div>{Icons.InfoCircle}</div>
            <div>Admin Dashboard</div>
          </div>

          <div className="d-flex align-items-center info-menu">
            <div className="info-item">
              <span className="info-link">Doctors</span>
              <span className="info-count">8</span>
            </div>

            <div className="separator"></div>

            <div className="info-item">
              <span className="info-link">Patients</span>
              <span className="info-count">6</span>
            </div>

            <div className="separator"></div>

            <div className="info-item">
              <span className="info-link">Nurses</span>
              <span className="info-count">4</span>
            </div>

            <div className="separator"></div>

            <div className="info-item">
              <span className="info-link">Accountants</span>
              <span className="info-count">2</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default InfoBar;
