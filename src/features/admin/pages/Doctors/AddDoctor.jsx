import { useState } from "react";

function AddDoctor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    department: "",
    profile: "",
  });

  const departments = [
    "Anesthesiology",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Radiology",
    "Surgery",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Added:", form);
    alert("Doctor added successfully!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Doctor</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter doctor's name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department */}
        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            className="form-select"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep, idx) => (
              <option key={idx} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>

        {/* Profile */}
        <div className="mb-4">
          <label className="form-label">Profile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Job title (e.g., Senior Surgeon)"
            name="profile"
            value={form.profile}
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-primary">
          Add Doctor
        </button>
      </form>
    </div>
  );
}

export default AddDoctor;
