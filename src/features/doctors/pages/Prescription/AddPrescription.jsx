import React, { useState } from "react";

import { useAddPrescriptionMutation } from "../../../../services/prescription";
import { useGetAllPatientsQuery } from "../../../../services/patientsApi";
import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";

function AddPrescription() {
  const [form, setForm] = useState({
    patientId: "",
    medicane: "", // 🔹 must match backend
    notes: "",
  });

  const userId = localStorage.getItem("id");

  // Get doctor
  const { data: currentDoctor } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.doctorId;

  const { data: patients = [] } = useGetAllPatientsQuery();

  const [addPrescription, { isLoading }] = useAddPrescriptionMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctorId) {
      alert("Doctor info not loaded yet");
      return;
    }
    console.log("hasjjashdhfhahdfh:", patients);

    // Payload exactly as per PrescriptionReqDTO
    const payload = {
      doctorId: Number(doctorId),
      patientId: Number(form.patientId),
      medicane: form.medicane, // 🔹 spelling must match DTO
      notes: form.notes,
      appointmentId: 3, // 🔹 dummy for now
      dateIssued: new Date().toISOString(), // 🔹 send current datetime
    };

    console.log("Payload being sent:", payload);

    try {
      await addPrescription(payload).unwrap();
      alert("Prescription added successfully!");

      setForm({
        patientId: "",
        medicane: "",
        notes: "",
      });
    } catch (err) {
      console.error("Add prescription failed:", err);
      alert("Failed to save prescription");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Prescription</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Patient */}
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <select
            className="form-select"
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            required
          >
            <option value="">Select Patient</option>
            {patients.map((p) => (
              <option key={p.patientId} value={p.patientId}>
                {p.firstname} {p.lastname}
              </option>
            ))}
          </select>
        </div>

        {/* Medicane */}
        <div className="mb-3">
          <label className="form-label">Medicane</label>
          <textarea
            className="form-control"
            name="medicane"
            rows="2"
            placeholder="Enter prescribed medicane"
            value={form.medicane}
            onChange={handleChange}
            required
          />
        </div>

        {/* Notes */}
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            rows="2"
            placeholder="Enter advice / notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading || !doctorId}
        >
          {isLoading ? "Saving..." : "Save Prescription"}
        </button>
      </form>
    </div>
  );
}

export default AddPrescription;
