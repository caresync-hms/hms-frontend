import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

function PatientRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    phone: "",
    subject: "Subject 1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="register-page-container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
        }}
      >
        <div
          className="bg-white p-5 pb-4 rounded shadow-lg"
          style={{
            width: "90%",
            maxWidth: "700px",
          }}
        >
          <h3 className="text-center mb-4 fw-semibold">Registration Form</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3 d-flex align-items-center">
                <label className="me-3 fw-semibold">Gender:</label>
                <div className="form-check me-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Female</label>
                </div>
                <div className="form-check me-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Other</label>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mb-4">
                <label className="form-label">Choose option</label>
                <select
                  className="form-select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    boxShadow: "0px 4px 8px rgba(37,99,235,0.3)",
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-2">
            <small>
              Already have an account?{" "}
              <Link to="/" className="text-decoration-none">
                Login!
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
