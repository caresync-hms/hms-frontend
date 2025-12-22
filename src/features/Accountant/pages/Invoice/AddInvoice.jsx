import { useState } from "react";

function AddInvoice() {
  const [form, setForm] = useState({
    patient: "",
    title: "",
    amount: "",
    description: "",
    status: "",
  });

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invoice Submitted:", form);
    alert("Invoice added successfully!");
    setForm({
      patient: "",
      title: "",
      amount: "",
      description: "",
      status: "",
    });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5 className="text mb-3">Add Invoice</h5>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          
          {/* Patient */}
          <div className="col-md-12">
            <label className="form-label">Patient</label>
            <input
              type="text"
              name="patient"
              className="form-control"
              value={form.patient}
              onChange={handleChange}
              required
            />
          </div>

          {/* Title */}
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Amount */}
          <div className="col-md-6">
            <label className="form-label">Amount</label>
            <input
              type="number"
              name="amount"
              className="form-control"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
         <div className="col-12">
  <label className="form-label">Description</label>
  <textarea
    name="description"
    rows="3"
    className="form-control"
    value={form.description}
    onChange={handleChange}
    required
  />
</div>


          {/* Status */}
          <div className="mb-3">
          <label className="form-label">Status</label>
            <select
  className="form-select"
  name="status"
  value={form.status}
  onChange={handleChange}
  required
>
  
  <option value="Paid">Paid</option>
  <option value="Unpaid">Unpaid</option>
</select>

        </div>

          <div className="col-12 text-start">
            <button type="submit" className="btn btn-primary">
              Add Invoice
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddInvoice;
