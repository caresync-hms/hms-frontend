const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            HMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
      </nav> */}

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Hospital Management System</h1>
          <p className="lead text-muted mt-3">
            Manage patients, doctors, appointments, and billing efficiently from
            one unified platform.
          </p>
          <div className="mt-4">
            <a
              href="/login"
              className="btn btn-primary btn-lg me-3"
              //   style={{ backgroundColor: "#cbf1f5" }}
            >
              Get Started
            </a>
            <a href="/about" className="btn btn-outline-secondary btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Core Features</h2>
            <p className="text-muted">
              Everything you need to manage hospital operations
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Patient Management</h5>
                  <p className="card-text">
                    Maintain complete patient records including medical history,
                    reports, and treatments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Doctor Scheduling</h5>
                  <p className="card-text">
                    Manage doctor availability, appointments, and workload
                    efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Billing & Reports</h5>
                  <p className="card-text">
                    Generate bills, invoices, and operational reports with
                    accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h2 className="fw-bold">500+</h2>
              <p>Patients Managed</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold">100+</h2>
              <p>Doctors Registered</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold">1K+</h2>
              <p>Appointments Handled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">
            © {new Date().getFullYear()} Hospital Management System
          </p>
          <small className="text-muted">Built with React & Bootstrap</small>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
