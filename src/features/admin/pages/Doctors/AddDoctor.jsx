import { useState } from "react";
import { useAddDoctorMutation } from "../../../../services/doctorsApi";
import { useGetAllDepartmentsQuery } from "../../../../services/departmentsApi";

function AddDoctor() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    specialization: "",
    departmentName: "",
    status: "ACTIVE",
  });

  const [addDoctor, { isLoading }] = useAddDoctorMutation();

  const { data = [], isError, error } = useGetAllDepartmentsQuery();

  if (isError) {
    alert(error?.data?.message || "Failed to load departments");
  }

  const departments = data.map((dept) => dept.departmentName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoctor(form).unwrap();
      alert("Doctor added successfully");

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        password: "",
        specialization: "",
        departmentName: "",
        status: "ACTIVE",
      });
    } catch (err) {
      alert(err?.data?.message || "Failed to add doctor");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Doctor</h4>

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
            className="form-control mb-3"
            name="password"
            placeholder="Temporary Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Specialization */}
        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <input
            type="text"
            className="form-control"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="form-label">Department</label>
          <select
            className="form-select"
            name="departmentName"
            value={form.departmentName}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Doctor"}
        </button>
      </form>
    </div>
  );
}

export default AddDoctor;
