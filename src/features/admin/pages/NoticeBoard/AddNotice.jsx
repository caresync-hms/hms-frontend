import { useState } from "react";
import { useAddNoticeMutation } from "../../../../services/noticesApi";

function AddNotice() {
  const [form, setForm] = useState({
    title: "",
    notice: "",
    date: "",
  });

  const [addNotice, { isLoading }] = useAddNoticeMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNotice(form).unwrap();
      alert("Notice added successfully");

      setForm({
        title: "",
        notice: "",
        date: "",
      });
    } catch (err) {
      alert(err?.data?.message || "Failed to add notice");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Notice</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Notice</label>
          <textarea
            className="form-control"
            name="notice"
            value={form.notice}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

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

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Notice"}
        </button>
      </form>
    </div>
  );
}

export default AddNotice;
