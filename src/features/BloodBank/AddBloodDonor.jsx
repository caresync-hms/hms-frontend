import React, { useState } from "react";
import{useAddDonorMutation} from "../../services/bloodApi";

function AddBloodDonor() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    city: "",
  });

  const [addBloodDonor, { isLoading }] = useAddDonorMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (form.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }
    e.preventDefault();
    await addBloodDonor(form).unwrap();
    setForm({ name: "", phone: "", bloodGroup: "", city: "" });
    alert("Donor added successfully");
  };

  return (
    <div className="container mt-4">
      <h4>Add Blood Donor</h4>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-12">
          <input
            name="name"
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <select
            name="bloodGroup"
            className="form-select"
            value={form.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="col-md-6">
          <input
            name="city"
            className="form-control"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading ? "Saving..." : "Add Donor"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBloodDonor;
