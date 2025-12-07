import { useState } from "react";

function AddAppointment() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    doctorName: "",
    department: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", form);
    alert("Appointment booked successfully!");
    setForm({
      date: "",
      time: "",
      doctorName: "",
      department: "",
      reason: "",
    });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5 className="text mb-3">Book Appointment</h5>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Time</label>
            <input
              type="time"
              name="time"
              className="form-control"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Doctor</label>
            <input
              type="text"
              name="doctorName"
              className="form-control"
              placeholder="Dr. Smith"
              value={form.doctorName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Department</label>
            <select
              name="department"
              className="form-select"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
              <option>Neurology</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Reason</label>
            <textarea
              name="reason"
              rows="3"
              className="form-control"
              value={form.reason}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              Book Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAppointment;
