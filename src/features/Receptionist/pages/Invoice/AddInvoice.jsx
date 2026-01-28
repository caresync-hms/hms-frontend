import { useState } from "react";
import { useCreateInvoiceMutation } from "../../../../services/receptionistApi";

function AddInvoice({ patientId }) {
  const [amount, setAmount] = useState("");
  const [createInvoice, { isLoading }] =
    useCreateInvoiceMutation();

  const submitInvoice = async () => {
    if (!amount) return alert("Enter amount");

    await createInvoice({
      patientId,
      amount: Number(amount),
    }).unwrap();

    alert("Invoice created ✅");
    setAmount("");
  };

  return (
    <div className="card p-3">
      <h5>Create Invoice</h5>

      <input
        className="form-control mb-2"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={submitInvoice}
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Generate Invoice"}
      </button>
    </div>
  );
}

export default AddInvoice;
