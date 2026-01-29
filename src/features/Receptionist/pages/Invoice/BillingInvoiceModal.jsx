
// import { useState } from "react";
// import { useCreateInvoiceMutation } from "../../../../services/receptionistApi";
// import InvoiceList from "./InvoiceList";

// function BillingInvoiceModal({ patient, onClose }) {
//   const [amount, setAmount] = useState("");
//   const [status, setStatus] = useState("PENDING");

//   const [createInvoice, { isLoading }] = useCreateInvoiceMutation();

//   const submitInvoice = async () => {
//     if (!amount) {
//       alert("Enter invoice amount");
//       return;
//     }

//     try {
//       await createInvoice({
//         patientId: patient.patientId,
//         amount: Number(amount),
//         status,
//       }).unwrap();

//       alert("Invoice created successfully ✅");
//       setAmount("");
//       setStatus("PENDING");
//     } catch (err) {
//       alert(err?.data?.message || "Failed to create invoice");
//     }
//   };

//   return (
//     <>
//       <h6 className="mb-3">Create Invoice</h6>

//       <input
//         type="number"
//         className="form-control mb-2"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />

//       <select
//         className="form-select mb-3"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option value="PENDING">PENDING</option>
//         <option value="PAID">PAID</option>
//       </select>

//       <button
//         className="btn btn-success w-100 mb-4"
//         onClick={submitInvoice}
//         disabled={isLoading}
//       >
//         {isLoading ? "Creating..." : "Create Invoice"}
//       </button>

//       <hr />

//       {/* ✅ Show invoice list INSIDE modal */}
//       {/* <InvoiceList patientId={patient.patientId} /> */}
//     </>
//   );
// }

// export default BillingInvoiceModal;


import { useState } from "react";
import { useCreateInvoiceMutation } from "../../../../services/receptionistApi";
import jsPDF from "jspdf";

function BillingInvoiceModal({ patient, onClose }) {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  const [createInvoice, { isLoading }] = useCreateInvoiceMutation();

  const handleCreateInvoice = async () => {
    if (!amount) {
      alert("Please enter amount");
      return;
    }

    try {
      const invoice = await createInvoice({
        patientId: patient.patientId,
        amount: Number(amount),
        status,
      }).unwrap();

      generatePDF(invoice);
      alert("Invoice created successfully ✅");
      onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to create invoice");
    }
  };

  const generatePDF = (invoice) => {
    const doc = new jsPDF();

    doc.text("Hospital Invoice", 20, 20);
    doc.text(`Patient: ${patient.firstname} ${patient.lastname}`, 20, 30);
    doc.text(`Patient ID: ${patient.patientId}`, 20, 40);
    doc.text(`Invoice ID: ${invoice.invoiceId}`, 20, 50);
    doc.text(`Amount: ₹${invoice.amount}`, 20, 60);
    doc.text(`Status: ${invoice.status}`, 20, 70);
    doc.text(`Date: ${invoice.date}`, 20, 80);

    doc.save(`invoice_${invoice.invoiceId}.pdf`);
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
       {/* ✅ Payment Method */}
      <select
        className="form-select mb-3"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="PENDING">PENDING</option>
          <option value="PAID">PAID</option>
        </select>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={handleCreateInvoice}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Invoice"}
        </button>
      </div>
    </div>
  );
}

export default BillingInvoiceModal;
