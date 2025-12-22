import { useState } from "react";

function AddAccountant() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Accountant added!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Accountant</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Salary</label>
          <input
            className="form-control"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Add Accountant</button>
      </form>
    </div>
  );
}

export default AddAccountant;
