import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand link" to="#">
            Hospital Management System
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
