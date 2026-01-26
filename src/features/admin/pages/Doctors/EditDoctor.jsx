import { useEffect, useState } from "react";
import { useUpdateDoctorMutation } from "../../../../services/doctorsApi";

function EditDoctor({ doctor, onClose }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    dob: "",
    specialization: "",
    departmentName: "",
    status: "",
  });

  const [updateDoctor, { isLoading }] = useUpdateDoctorMutation();

  /* -------- Populate form when doctor changes -------- */
  useEffect(() => {
    if (doctor) {
      setForm({
        firstname: doctor.firstname || "",
        lastname: doctor.lastname || "",
        phone: doctor.phone || "",
        gender: doctor.gender || "",
        dob: doctor.dob || "",
        specialization: doctor.specialization || "",
        departmentName: doctor.department || "",
        status: doctor.status || "",
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoctor({
        id: doctor.doctorId,
        ...form,
      }).unwrap();

      alert("Doctor updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update doctor");
    }
  };

  if (!doctor) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Doctor</h4>

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
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="departmentName"
            value={form.departmentName}
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
            {isLoading ? "Updating..." : "Update Doctor"}
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

export default EditDoctor;
