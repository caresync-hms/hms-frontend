import React, { useState } from "react";
import { useAddPrescriptionMutation } from "../../../../services/prescription";
import { useGetAllPatientsQuery } from "../../../../services/patientsApi";
import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
import { useGetAppointmentsByPatientQuery } from "../../../../services/appointmentsApi";

function AddPrescription() {
  const userId = localStorage.getItem("id");

  /* ---------- Doctor ---------- */
  const { data: currentDoctor } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.doctorId;

  /* ---------- Patients ---------- */
  const { data: patients = [] } = useGetAllPatientsQuery();

  /* ---------- Form ---------- */
  const [form, setForm] = useState({
    patientId: "",
    appointmentId: "",
    medicane: "",
    notes: "",
  });

  /* ---------- Appointments (dependent query) ---------- */
  const { data: appointments = [], isFetching } =
    useGetAppointmentsByPatientQuery(
      {
        patientId: form.patientId,
      },
      {
        skip: !doctorId || !form.patientId,
      },
    );

  /* ---------- Mutation ---------- */
  const [addPrescription, { isLoading }] = useAddPrescriptionMutation();

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctorId || !form.patientId || !form.appointmentId) {
      alert("Please select patient and appointment");
      return;
    }

    const payload = {
      doctorId: Number(doctorId),
      patientId: Number(form.patientId),
      appointmentId: Number(form.appointmentId),
      medicane: form.medicane,
      notes: form.notes,
      dateIssued: new Date().toISOString(),
    };

    try {
      await addPrescription(payload).unwrap();
      alert("Prescription added successfully!");

      setForm({
        patientId: "",
        appointmentId: "",
        medicane: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add prescription");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Prescription</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* -------- Patient -------- */}
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

        {/* -------- Appointment -------- */}
        {form.patientId && (
          <div className="mb-3">
            <label className="form-label">Appointment</label>
            <select
              className="form-select"
              name="appointmentId"
              value={form.appointmentId}
              onChange={handleChange}
              required
              disabled={isFetching}
            >
              <option value="">
                {isFetching ? "Loading appointments..." : "Select Appointment"}
              </option>

              {appointments
                .filter(
                  (a) =>
                    a.appointmentStatus === "SCHEDULED" ||
                    a.appointmentStatus === "COMPLETED",
                )
                .map((a) => (
                  <option key={a.appointmentId} value={a.appointmentId}>
                    {new Date(a.dateOfAppointment).toLocaleString()} (
                    {a.appointmentStatus})
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* -------- Medicane -------- */}
        <div className="mb-3">
          <label className="form-label">Medicane</label>
          <textarea
            className="form-control"
            name="medicane"
            rows="2"
            value={form.medicane}
            onChange={handleChange}
            required
          />
        </div>

        {/* -------- Notes -------- */}
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            rows="2"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Prescription"}
        </button>
      </form>
    </div>
  );
}

export default AddPrescription;
