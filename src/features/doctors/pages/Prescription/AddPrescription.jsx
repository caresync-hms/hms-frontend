import React, { useState } from "react";

function AddPrescription() {
  const [form, setForm] = useState({
    doctor: "",
    patient: "",
    caseHistory: "",
    medication: "",
    pharmacyMedication: "",
    advice: "",
    date: "",
  });

  const doctors = [
    "Dr. Mehta",
    "Dr. Gupta",
    "Dr. Carter",
    "Dr. Roy"
  ];

  const patients = [
    "Rohan Sharma",
    "Neha Kapoor",
    "Amit Verma",
    "Sara Ali"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prescription Saved:", form);
    alert("Prescription saved successfully!");
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Prescription</h4>

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

        {/* Case History */}
        <div className="mb-3">
          <label className="form-label">Case History</label>
          <textarea
            className="form-control"
            name="caseHistory"
            rows="3"
            placeholder="Enter case history"
            value={form.caseHistory}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Medication */}
        <div className="mb-3">
          <label className="form-label">Medication</label>
          <textarea
            className="form-control"
            name="medication"
            rows="2"
            placeholder="Enter prescribed medication"
            value={form.medication}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Medication From Pharmacy */}
        <div className="mb-3">
          <label className="form-label">Medication (From Pharmacy)</label>
          <textarea
            className="form-control"
            name="pharmacyMedication"
            rows="2"
            placeholder="Enter pharmacy medication"
            value={form.pharmacyMedication}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Advice */}
        <div className="mb-3">
          <label className="form-label">Advice</label>
          <textarea
            className="form-control"
            name="advice"
            rows="2"
            placeholder="Enter advice"
            value={form.advice}
            onChange={handleChange}
          ></textarea>
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

        {/* Save Button */}
        <button type="submit" className="btn btn-primary">
          Save Prescription
        </button>
      </form>
    </div>
  );
}

export default AddPrescription;
