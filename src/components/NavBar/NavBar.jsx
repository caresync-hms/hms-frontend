import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { Icons } from "../../assets/Icons";
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
                <div>{Icons.PersonFillGear}</div>
                Admin Panel
              </button>
            </Link>
            <Link>
              <button className="btn-account">
                <div>{Icons.PersonCircle}</div>
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
