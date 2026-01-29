import { useState } from "react";
import { useGetAllDoctorsQuery } from "../../../../services/doctorsApi";
import { useGetAllPatientsQuery } from "../../../../services/patientsApi";
import { useBookAppointmentMutation } from "../../../../services/appointmentsApi";

function AddAppointment() {
  /* ---------- Queries ---------- */
  const { data: doctors = [], isLoading: doctorsLoading } =
    useGetAllDoctorsQuery();

  const { data: patients = [], isLoading: patientsLoading } =
    useGetAllPatientsQuery();

  /* ---------- Form State ---------- */
  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    specialization: "",
    date: "",
    time: "",
  });

  const [bookAppointment, { isLoading }] = useBookAppointmentMutation();

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Doctor selected → auto-fill specialization
    if (name === "doctorId") {
      const selectedDoctor = doctors.find(
        (doc) => doc.doctorId === Number(value),
      );

      setForm((prev) => ({
        ...prev,
        doctorId: value,
        specialization: selectedDoctor?.specialization || "",
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.patientId || !form.doctorId || !form.date || !form.time) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      patientId: Number(form.patientId),
      doctorId: Number(form.doctorId),
      dateOfAppointment: `${form.date}T${form.time}:00`,
    };

    try {
      await bookAppointment(payload).unwrap();
      alert("Appointment booked successfully");

      setForm({
        patientId: "",
        doctorId: "",
        specialization: "",
        date: "",
        time: "",
      });
    } catch (err) {
      alert(err?.data?.message || "Failed to book appointment");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Book Appointment</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="row g-3">
          {/* -------- Patient -------- */}
          <div className="col-md-6">
            <label className="form-label">Patient</label>
            <select
              className="form-select"
              name="patientId"
              value={form.patientId}
              onChange={handleChange}
              required
              disabled={patientsLoading}
            >
              <option value="">
                {patientsLoading ? "Loading patients..." : "Select Patient"}
              </option>
              {patients.map((p) => (
                <option key={p.patientId} value={p.patientId}>
                  {p.firstname} {p.lastname}
                </option>
              ))}
            </select>
          </div>

          {/* -------- Doctor -------- */}
          <div className="col-md-6">
            <label className="form-label">Doctor</label>
            <select
              className="form-select"
              name="doctorId"
              value={form.doctorId}
              onChange={handleChange}
              required
              disabled={doctorsLoading}
            >
              <option value="">
                {doctorsLoading ? "Loading doctors..." : "Select Doctor"}
              </option>
              {doctors.map((doc) => (
                <option key={doc.doctorId} value={doc.doctorId}>
                  Dr. {doc.firstname} {doc.lastname}
                </option>
              ))}
            </select>
          </div>

          {/* -------- Specialization -------- */}
          <div className="col-md-6">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              className="form-control"
              value={form.specialization}
              disabled
            />
          </div>

          {/* -------- Date -------- */}
          <div className="col-md-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* -------- Time -------- */}
          <div className="col-md-3">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* -------- Submit -------- */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading || doctorsLoading || patientsLoading}
            >
              {isLoading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAppointment;
