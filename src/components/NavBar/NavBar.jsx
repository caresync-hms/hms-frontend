import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const location = useLocation();

  const hideNavBarPaths = ["/", "/register"];

  const shouldHideNavBarComponents = hideNavBarPaths.includes(
    location.pathname
  );

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand link" to="#">
            Hospital Management System
          </Link>
        </div>
        {!shouldHideNavBarComponents && (
          <div className="right-section">
            <Link>
              <button className="btn-panel">
                <i class="bi bi-person-fill-gear"></i>
                Admin Panel
              </button>
            </Link>
            <Link>
              <button className="btn-account">
                <i class="bi bi-person-circle"></i>
                Account
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
