import React, { useState } from "react";

function AddAppointment() {
  const [form, setForm] = useState({
    doctor: "",
    patient: "",
    date: "",
    time: "",
  });

  const doctors = ["Dr. Mehta", "Dr. Gupta", "Dr. Carter", "Dr. Roy"];
  const patients = ["Rohan Sharma", "Neha Kapoor", "Amit Verma", "Sara Ali"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Saved:", form);
    alert("Appointment saved successfully!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Appointment</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

        {/* Doctor */}
        <div className="mb-3">
          <label className="form-label">Doctor</label>
          <select
            className="form-select"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc, idx) => (
              <option key={idx} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>

        {/* Patient */}
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <select
            className="form-select"
            name="patient"
            value={form.patient}
            onChange={handleChange}
            required
          >
            <option value="">Select Patient</option>
            {patients.map((pat, idx) => (
              <option key={idx} value={pat}>
                {pat}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="mb-3">
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

        {/* Time */}
        <div className="mb-3">
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

        {/* Save Button */}
        <button type="submit" className="btn btn-primary">
          Save Appointment
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;
