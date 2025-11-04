import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav-container">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#808080",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hospital Management System
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
