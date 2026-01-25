import { useEffect, useState } from "react";
import { useUpdateNoticeMutation } from "../../../../services/noticesApi";

function EditNotice({ notice, onClose }) {
  const [form, setForm] = useState({
    title: "",
    notice: "",
    date: "",
  });

  const [updateNotice, { isLoading }] = useUpdateNoticeMutation();

  /* -------- Populate form when notice changes -------- */
  useEffect(() => {
    if (notice) {
      setForm({
        title: notice.title || "",
        notice: notice.notice || "",
        date: notice.date || "",
      });
    }
  }, [notice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateNotice({
        noticeId: notice.id,
        ...form,
      }).unwrap();

      alert("Notice updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update notice");
    }
  };

  if (!notice) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Notice</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Title */}
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

        {/* Notice */}
        <div className="mb-3">
          <label className="form-label">Notice</label>
          <textarea
            className="form-control"
            name="notice"
            rows="4"
            value={form.notice}
            onChange={handleChange}
            required
          ></textarea>
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

        {/* Actions */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Notice"}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNotice;
