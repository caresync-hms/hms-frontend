import { useState } from "react";

function AddDepartment() {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Department Added:", form);
    alert("Department added successfully!");

    setForm({ name: "", description: "" });
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Department</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Department Name */}
        <div className="mb-3">
          <label className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter department name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Enter department description"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Add Department
        </button>
      </form>
    </div>
  );
}

export default AddDepartment;
