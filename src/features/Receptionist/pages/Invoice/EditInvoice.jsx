// import { useState } from "react";
// import {
//   useUpdateInvoiceStatusMutation,
// } from "../../../../services/receptionistApi";
// import jsPDF from "jspdf";

// function EditInvoice({ invoice, onClose }) {
//   const [amount, setAmount] = useState(invoice.amount);
//   const [status, setStatus] = useState(invoice.status);
//   const [paymentMethod, setPaymentMethod] = useState(
//     invoice.paymentMethod || "CASH"
//   );

//   const [updateInvoice, { isLoading }] = useUpdateInvoiceStatusMutation();

//   const handleUpdateInvoice = async () => {
//     if (!amount) {
//       alert("Please enter amount");
//       return;
//     }

//     try {
//       const updatedInvoice = await updateInvoice({
//         invoiceId: invoice.invoiceId,
//         amount: Number(amount),
//         status,
//         paymentMethod,
//       }).unwrap();

//       generatePDF(updatedInvoice);
//       alert("Invoice updated successfully ✅");
//       onClose();
//     } catch (err) {
//       alert(err?.data?.message || "Failed to update invoice");
//     }
//   };

//   const generatePDF = (inv) => {
//     const doc = new jsPDF();

//     doc.text("Hospital Invoice", 20, 20);
//     doc.text(`Patient: ${inv.patientName}`, 20, 30);
//     doc.text(`Patient ID: ${inv.patientId}`, 20, 40);
//     doc.text(`Invoice ID: ${inv.invoiceId}`, 20, 50);
//     doc.text(`Amount: ₹${inv.amount}`, 20, 60);
//     doc.text(`Status: ${inv.status}`, 20, 70);
//     doc.text(`Date: ${inv.createdDate}`, 20, 80);

//     doc.save(`invoice_${inv.invoiceId}.pdf`);
//   };

//   return (
//     <div>
//       {/* 💰 Amount */}
//       <div className="mb-3">
//         <label className="form-label">Amount</label>
//         <input
//           type="number"
//           className="form-control"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           disabled={invoice.status === "PAID"}
//         />
//       </div>

//       {/* 💳 Payment Method */}
//       <select
//         className="form-select mb-3"
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//         disabled={invoice.status === "PAID"}
//       >
//         <option value="CASH">Cash</option>
//         <option value="CARD">Card</option>
//         <option value="UPI">UPI</option>
//       </select>

//       {/* 📌 Status */}
//       <div className="mb-3">
//         <label className="form-label">Status</label>
//         <select
//           className="form-select"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         >
//           <option value="PENDING">PENDING</option>
//           <option value="PAID">PAID</option>
//         </select>
//       </div>

//       {/* 🎯 Actions */}
//       <div className="d-flex justify-content-end gap-2">
//         <button className="btn btn-secondary" onClick={onClose}>
//           Cancel
//         </button>
//         <button
//           className="btn btn-primary"
//           onClick={handleUpdateInvoice}
//           disabled={isLoading}
//         >
//           {isLoading ? "Updating..." : "Update Invoice"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EditInvoice;

// import { useState } from "react";
// import {
//   useUpdateInvoiceMutation,
//   useGetAllPatientsQuery,
// } from "../../../../services/receptionistApi";
// import jsPDF from "jspdf";

// function EditInvoice({ invoice, onClose }) {
//   const [patientId, setPatientId] = useState(invoice.patientId);
//   const [amount, setAmount] = useState(invoice.amount);
//   const [status, setStatus] = useState(invoice.status);
//   const [paymentMethod, setPaymentMethod] = useState(
//     invoice.paymentMethod || "CASH"
//   );

//   const { data: patients = [] } = useGetAllPatientsQuery();
//   const [updateInvoice, { isLoading }] = useUpdateInvoiceMutation();

//   const selectedPatient = patients.find(
//     (p) => p.patientId === patientId
//   );

//   const handleUpdateInvoice = async () => {
//     if (!amount || !patientId) {
//       alert("Patient and amount are required");
//       return;
//     }

//     try {
//       const updatedInvoice = await updateInvoice({
//         invoiceId: invoice.invoiceId,
//         patientId,
//         amount: Number(amount),
//         status,
//         paymentMethod,
//       }).unwrap();

//       generatePDF(updatedInvoice);
//       alert("Invoice updated successfully ✅");
//       onClose();
//     } catch (err) {
//       alert(err?.data?.message || "Failed to update invoice");
//     }
//   };

//   const generatePDF = (inv) => {
//     const doc = new jsPDF();

//     doc.text("Hospital Invoice", 20, 20);
//     doc.text(
//       `Patient: ${selectedPatient?.firstname} ${selectedPatient?.lastname}`,
//       20,
//       30
//     );
//     doc.text(`Patient ID: ${inv.patientId}`, 20, 40);
//     doc.text(`Invoice ID: ${inv.invoiceId}`, 20, 50);
//     doc.text(`Amount: ₹${inv.amount}`, 20, 60);
//     doc.text(`Status: ${inv.status}`, 20, 70);
//     doc.text(`Date: ${inv.createdDate}`, 20, 80);

//     doc.save(`invoice_${inv.invoiceId}.pdf`);
//   };

//   return (
//     <div>
//       {/* 👤 Patient */}
//       <div className="mb-3">
//         <label className="form-label">Patient</label>
//         <select
//           className="form-select"
//           value={patientId}
//           onChange={(e) => setPatientId(Number(e.target.value))}
//         >
//           <option value="">Select Patient</option>
//           {patients.map((p) => (
//             <option key={p.patientId} value={p.patientId}>
//               {p.firstname} {p.lastname}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* 💰 Amount */}
//       <div className="mb-3">
//         <label className="form-label">Amount</label>
//         <input
//           type="number"
//           className="form-control"
//           value={amount}
          
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>

//       {/* 💳 Payment Method */}
//       <select
//         className="form-select mb-3"
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//       >
//         <option value="CASH">Cash</option>
//         <option value="CARD">Card</option>
//         <option value="UPI">UPI</option>
//       </select>

//       {/* 📌 Status */}
//       <div className="mb-3">
//         <label className="form-label">Status</label>
//         <select
//           className="form-select"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         >
//           <option value="PENDING">PENDING</option>
//           <option value="PAID">PAID</option>
//         </select>
//       </div>

//       {/* 🎯 Buttons */}
//       <div className="d-flex justify-content-end gap-2">
//         <button className="btn btn-secondary" onClick={onClose}>
//           Cancel
//         </button>
//         <button
//           className="btn btn-primary"
//           onClick={handleUpdateInvoice}
//           disabled={isLoading}
//         >
//           {isLoading ? "Updating..." : "Update Invoice"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EditInvoice;

import { useState } from "react";
import { useUpdateInvoiceStatusMutation } from "../../../../services/receptionistApi";
import jsPDF from "jspdf";

function EditInvoice({ invoice, onClose }) {
  const [amount, setAmount] = useState(invoice.amount);
  const [status, setStatus] = useState(invoice.status);
  const [paymentMethod, setPaymentMethod] = useState(
    invoice.paymentMethod || "CASH"
  );

  const [updateInvoice, { isLoading }] = useUpdateInvoiceStatusMutation();

  const handleUpdateInvoice = async () => {
    try {
      await updateInvoice({
        invoiceId: invoice.invoiceId,
        amount: Number(amount),
        status,
        paymentMethod,
      }).unwrap();

      alert("Invoice updated ✅");
      onClose();
    } catch (err) {
      alert(err?.data?.message || "Update failed");
    }
  };

  return (
    <div>
      {/* 💰 AMOUNT (FULLY EDITABLE) */}
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* 💳 Payment Method */}
      <select
        className="form-select mb-3"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
        <option value="UPI">UPI</option>
      </select>

      {/* 📌 Status */}
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
          onClick={handleUpdateInvoice}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Invoice"}
        </button>
      </div>
    </div>
  );
}

export default EditInvoice;


