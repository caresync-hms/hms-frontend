import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../../../../services/userApi";

function EditReceptionist({ receptionist, onClose }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
    status: "",
  });

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  /* -------- Populate form when receptionist changes -------- */
  useEffect(() => {
    if (receptionist) {
      setForm({
        firstname: receptionist.firstname || "",
        lastname: receptionist.lastname || "",
        phone: receptionist.phone || "",
        gender: receptionist.gender || "",
        address: receptionist.address || "",
        dob: receptionist.dob || "",
        status: receptionist.status || "",
      });
    }
  }, [receptionist]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUser({
        id: receptionist.id,
        ...form,
      }).unwrap();

      alert("Receptionist updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update receptionist");
    }
  };

  if (!receptionist) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Receptionist</h4>

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

        {/* Status */}
        <div className="mb-4">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="BLOCKED">BLOCKED</option>
          </select>
        </div>

        {/* Actions */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Receptionist"}
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

export default EditReceptionist;
