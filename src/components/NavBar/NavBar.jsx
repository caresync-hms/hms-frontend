import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Icons } from "@/assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const hideNavBarPaths = ["/", "/unauthorized", "/login", "/register"];
  const shouldHideNavBarComponents = hideNavBarPaths.includes(
    location.pathname,
  );

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand fw-bold ms-4"
            href="/"
            style={{ color: "#014448" }}
          >
            <img
              src="/CareSync_img.png"
              alt=""
              style={{ height: "24px", marginRight: "6px" }}
            />
            CareSync
          </a>
          {shouldHideNavBarComponents && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
        </div>

        {!shouldHideNavBarComponents && (
          <div className="right-section">
            <button
              className="btn-account"
              onClick={() => navigate("/profile")}
            >
              <div>{Icons.PersonCircle}</div>
              Account
            </button>

            <button onClick={onLogout} className="btn-account">
              <div>{Icons.Logout}</div>
              Logout
            </button>
          </div>
        )}
        {shouldHideNavBarComponents && (
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
