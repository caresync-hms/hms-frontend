import { useState } from "react";

function AddNurse() {
  const [form, setForm] = useState({
    name: "",
    shift: "",
    phone: "",
    assignedWard: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nurse added!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Nurse</h4>

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
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shift</label>
          <select
            className="form-select"
            name="shift"
            value={form.shift}
            onChange={handleChange}
          >
            <option value="">Select Shift</option>
            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Assigned Ward</label>
          <input
            className="form-control"
            name="assignedWard"
            value={form.assignedWard}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Add Nurse</button>
      </form>
    </div>
  );
}

export default AddNurse;
