import { useState } from "react";
import { useBookAppointmentMutation } from "../../../services/appointmentsApi";
import { useGetAllDoctorsQuery } from "../../../services/doctorsApi";
import { useGetPatientByUserIdQuery } from "../../../services/patientsApi";

function AddAppointment() {

  const storedId = localStorage.getItem("id");
  const userId = storedId ? Number(storedId) : null;

  const { data: patient, isLoading: patientLoading } =
    useGetPatientByUserIdQuery(userId, {
      skip: !userId,
    });

  const { data: doctors = [], isLoading: doctorsLoading } =
    useGetAllDoctorsQuery();

  const [form, setForm] = useState({
    doctorId: "",
    specialization: "",
    date: "",
    time: "",
  });

  const [bookAppointment, { isLoading }] =
    useBookAppointmentMutation();

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "doctorId") {
      const selectedDoctor = doctors.find(
        (doc) => doc.doctorId === Number(value)
      );

      setForm({
        ...form,
        doctorId: value,
        specialization: selectedDoctor?.specialization || "",
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patient?.id || !form.doctorId || !form.date || !form.time) {
      alert("Invalid data");
      return;
    }

    const payload = {
      doctorId: Number(form.doctorId),
      patientId: patient.id,
      dateOfAppointment: `${form.date}T${form.time}:00`,
    };

    try {
      await bookAppointment(payload).unwrap();
      alert("Appointment booked successfully");

      setForm({
        doctorId: "",
        specialization: "",
        date: "",
        time: "",
      });
    } catch (err) {
      alert(
        err?.data?.message ||
          err?.error ||
          "Failed to book appointment"
      );
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Book Appointment</h4>

      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm"
      >
        <div className="row g-3">

          {/* Doctor */}
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
              <option value="">Select Doctor</option>
              {doctors.map((doc) => (
                <option key={doc.doctorId} value={doc.doctorId}>
                  Dr. {doc.firstname} {doc.lastname}
                </option>
              ))}
            </select>
          </div>

          {/* Specialization */}
          <div className="col-md-6">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              className="form-control"
              value={form.specialization}
              disabled
            />
          </div>

          {/* Date */}
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time */}
          <div className="col-md-6">
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

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                isLoading ||
                patientLoading ||
                !patient?.id
              }
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
