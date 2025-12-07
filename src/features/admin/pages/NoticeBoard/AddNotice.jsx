import { useState } from "react";

function AddNotice() {
  const [form, setForm] = useState({
    title: "",
    notice: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notice Added:", form);
    alert("Notice added successfully!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Notice</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter notice title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Notice */}
        <div className="mb-3">
          <label className="form-label">Notice</label>
          <textarea
            className="form-control"
            placeholder="Enter notice description"
            name="notice"
            value={form.notice}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-primary">
          Add Notice
        </button>
      </form>
    </div>
  );
}

export default AddNotice;
