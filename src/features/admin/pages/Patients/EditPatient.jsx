import { useEffect, useState } from "react";
import { useUpdatePatientMutation } from "../../../../services/patientsApi";

function EditPatient({ patient, onClose }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    medicalHistory: "",
    status: "",
  });

  const [updatePatient, { isLoading }] = useUpdatePatientMutation();

  /* -------- Populate form when patient changes -------- */
  useEffect(() => {
    if (patient) {
      setForm({
        firstname: patient.firstname || "",
        lastname: patient.lastname || "",
        phone: patient.phone || "",
        gender: patient.gender || "",
        dob: patient.dob || "",
        bloodGroup: patient.bloodGroup || "",
        medicalHistory: patient.medicalHistory || "",
        status: patient.status || "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePatient({
        id: patient.patientId,
        ...form,
      }).unwrap();

      alert("Patient updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update patient");
    }
  };

  if (!patient) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Patient</h4>

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

        {/* Blood Group */}
        <div className="mb-3">
          <label className="form-label">Blood Group</label>
          <select
            className="form-select"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A_POSITIVE">A+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_POSITIVE">B+</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="AB_NEGATIVE">AB-</option>
            <option value="O_POSITIVE">O+</option>
            <option value="O_NEGATIVE">O-</option>
          </select>
        </div>

        {/* Medical History */}
        <div className="mb-3">
          <label className="form-label">Medical History</label>
          <textarea
            className="form-control"
            name="medicalHistory"
            rows="3"
            value={form.medicalHistory}
            onChange={handleChange}
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
            {isLoading ? "Updating..." : "Update Patient"}
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

export default EditPatient;
