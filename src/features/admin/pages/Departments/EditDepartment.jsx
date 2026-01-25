import { useEffect, useState } from "react";
import { useUpdateDepartmentMutation } from "../../../../services/departmentsApi";

function EditDepartment({ department, onClose }) {
  const [form, setForm] = useState({
    departmentName: "",
    description: "",
  });

  const [updateDepartment, { isLoading }] = useUpdateDepartmentMutation();

  /* -------- Populate form when department changes -------- */
  useEffect(() => {
    if (department) {
      setForm({
        departmentName: department.departmentName || "",
        description: department.description || "",
      });
    }
  }, [department]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDepartment({
        departmentId: department.id,
        ...form,
      }).unwrap();

      alert("Department updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update department");
    }
  };

  if (!department) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Department</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Department Name */}
        <div className="mb-3">
          <label className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            name="departmentName"
            value={form.departmentName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Actions */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Department"}
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

export default EditDepartment;
