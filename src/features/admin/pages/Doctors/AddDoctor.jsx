import React, { useState } from "react";

const AddDoctor = ({ onAdd }) => {
  const departments = [
    "Anesthesiology",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Radiology",
    "Surgery",
  ];

  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    department: departments[0],
    profile: "",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(doctor);

    // reset
    setDoctor({
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      department: departments[0],
      profile: "",
    });
  };

  return (
    <div className="container mt-1" style={{ maxWidth: "420px" }}>
      <form onSubmit={handleSubmit} className="doctor-form">
        <div className="form-group mb-3">
          <label className="form-label small-text">Name</label>
          <input
            className="form-control custom-input"
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label small-text">Email</label>
          <input
            className="form-control custom-input"
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label small-text">Password</label>
          <input
            className="form-control custom-input"
            type="password"
            name="password"
            value={doctor.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label small-text">Address</label>
          <input
            className="form-control custom-input"
            type="text"
            name="address"
            value={doctor.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label small-text">Phone</label>
          <input
            className="form-control custom-input"
            type="text"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label small-text">Department</label>
          <select
            className="form-select custom-input"
            name="department"
            value={doctor.department}
            onChange={handleChange}
          >
            {departments.map((dep, i) => (
              <option key={i} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-4">
          <label className="form-label small-text">Profile</label>
          <input
            className="form-control custom-input"
            type="text"
            name="profile"
            value={doctor.profile}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn add-btn w-100">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
