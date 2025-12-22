import React, { useState } from "react";

function AddBeds() {
  const [form, setForm] = useState({
    patientName: "",
    bedNumber: "",
    type: "",
    capacity: "",
    description: "",
  });

 
  const wardTypes = ["General Ward",
  "ICU",
  "MICU",
  "SICU",
  "NICU",
  "PICU",
  "CCU (Cardiac Care Unit)",
  "Emergency Ward",
  "Maternity Ward",
  "Pediatric Ward",
  "Surgical Ward",
  "Orthopedic Ward",
  "Oncology Ward",
  "Isolation Ward",
  "Burn Ward",
  "Cardiology Ward",
  "Neurology Ward",
  "Dialysis Ward",
  "Private Ward",
  "Semi-Private Ward"];

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
      <h4 className="mb-3">Add Beds</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
      {/* Patient Name */}
          <div className="mb-3">
  <label className="form-label">Patient Name</label>
  <input
    type="text"
    className="form-control"
    name="patientName"
    value={form.patientName}
    onChange={handleChange}
    placeholder="Enter Patient Name"
    required
  />
</div>

        {/* Bed Number */}
          <div className="mb-3">
  <label className="form-label">Bed Number</label>
  <input
    type="text"
    className="form-control"
    name="bedNumber"
    value={form.bedNumber}
    onChange={handleChange}
    placeholder="Enter Bed Number"
    required
  />
</div>

       

        {/* wardType */}
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="patient"
            value={form.wardTypes}
            onChange={handleChange}
            required
          >
            <option value="">Select Types</option>
            {wardTypes.map((pat, idx) => (
              <option key={idx} value={pat}>
                {pat}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
       
        {/* Time */}
       

        {/* Save Button */}
        <button type="submit" className="btn btn-primary">
          Save Appointment
        </button>
      </form>
    </div>
  );
}

export default AddBeds;
