import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { Icons } from "../../../../assets/Icons";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, email, password });
  };

  const temporaryNavigate = () => {
    console.log("Asdafasf");

    navigate("/dashboard");
  };

  return (
    <div className="login-page-container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="card shadow" style={{ width: "400px" }}>
          <div className="card-header bg-secondary text-white text-center">
            <h5 className="m-0">Login</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Patient</option>
                  <option>Doctor</option>
                  <option>Admin</option>
                </select>
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text">{Icons.Email}</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text">{Icons.Key}</span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
        <div
          className="text-center mt-2"
          style={{
            visibility: role == "Patient" ? "visible" : "hidden",
          }}
        >
          <small>
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Sign up!
            </Link>
          </small>
        </div>
        <button
          onClick={() => temporaryNavigate()}
          className="btn btn-success w-10 m-2"
        >
          bypass
        </button>
      </div>
    </div>
  );
};

export default Login;
