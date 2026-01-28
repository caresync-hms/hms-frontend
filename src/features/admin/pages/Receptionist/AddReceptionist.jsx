import { useState } from "react";
import { useAddUserMutation } from "../../../../services/userApi";

function AddReceptionist() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
    password: "",
    status: "ACTIVE",
    role: "ROLE_RECEPTIONIST",
  });

  const [addUser, { isLoading }] = useAddUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUser(form).unwrap();
      alert("Receptionist added successfully");

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        address: "",
        dob: "",
        password: "",
        status: "ACTIVE",
        role: "ROLE_RECEPTIONIST",
      });
    } catch (err) {
      alert(err?.data?.message || "Failed to add Receptionist");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Receptionist</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* First Name */}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={form.lastname}
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
            name="email"
            value={form.email}
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
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            rows="2"
            placeholder="Enter address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={form.dob}
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
            name="password"
            placeholder="Temporary Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Receptionist"}
        </button>
      </form>
    </div>
  );
}

export default AddReceptionist;
