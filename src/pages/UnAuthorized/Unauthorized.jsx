import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons";

function UnAuthorized() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center p-5 rounded" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <span style={{ fontSize: "60px", color: "#ff5c5c" }}>⛔</span>
        </div>

        <h3 className="fw-bold mb-2">Access Denied</h3>
        <p className="text-muted mb-4">
          You don't have permission to view this page.
        </p>

        <div className="d-grid gap-2">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            ◀ Go Back
          </button>

          <Link className="btn btn-primary" to="/dashboard">
            {/* 🏠 Go to Dashboard */}
            {Icons.Home} Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UnAuthorized;
