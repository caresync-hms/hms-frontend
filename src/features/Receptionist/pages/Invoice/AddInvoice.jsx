

import { useState } from "react";
import axios from "axios";

function AddInvoice({ patientId, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false); 

  const submitInvoice = async () => {
    if (!patientId) {
      alert("Patient not selected");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (loading) return; //PREVENT DOUBLE CALL

    try {
      setLoading(true); //LOCK

      await axios.post("http://localhost:9093/receptionist/invoices", {
        patientId: patientId,
        amount: Number(amount),
      });

      alert("Invoice created successfully");
      setAmount("");
      onSuccess && onSuccess();

    } catch (err) {
      console.error(err);
      alert("Failed to create invoice");
    } finally {
      setLoading(false); //UNLOCK
    }
  };

  return (
    <div className="card p-3">
      <h5>Create Invoice</h5>

      <input
        className="form-control mb-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />

      <button
        className="btn btn-primary"
        onClick={submitInvoice}
        disabled={loading}
      >
        {loading ? "Creating..." : "Generate Invoice"}
      </button>
    </div>
  );
}

export default AddInvoice;

