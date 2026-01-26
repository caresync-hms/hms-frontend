// import { useState } from "react";

// function AddInvoice() {
//   const [form, setForm] = useState({
//     patient: "",
//     title: "",
//     amount: "",
//     description: "",
//     status: "",
//   });

  
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Invoice Submitted:", form);
//     alert("Invoice added successfully!");
//     setForm({
//       patient: "",
//       title: "",
//       amount: "",
//       description: "",
//       status: "",
//     });
//   };

//   return (
//     <div className="card p-4 shadow-sm">
//       <h5 className="text mb-3">Add Invoice</h5>

//       <form onSubmit={handleSubmit}>
//         <div className="row g-3">
          
//           {/* Patient */}
//           <div className="col-md-12">
//             <label className="form-label">Patient</label>
//             <input
//               type="text"
//               name="patient"
//               className="form-control"
//               value={form.patient}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Title */}
//           <div className="col-md-6">
//             <label className="form-label">Title</label>
//             <input
//               type="text"
//               name="title"
//               className="form-control"
//               value={form.title}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Amount */}
//           <div className="col-md-6">
//             <label className="form-label">Amount</label>
//             <input
//               type="number"
//               name="amount"
//               className="form-control"
//               value={form.amount}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Description */}
//          <div className="col-12">
//   <label className="form-label">Description</label>
//   <textarea
//     name="description"
//     rows="3"
//     className="form-control"
//     value={form.description}
//     onChange={handleChange}
//     required
//   />
// </div>


//           {/* Status */}
//           <div className="mb-3">
//           <label className="form-label">Status</label>
//             <select
//   className="form-select"
//   name="status"
//   value={form.status}
//   onChange={handleChange}
//   required
// >
  
//   <option value="Paid">Paid</option>
//   <option value="Unpaid">Unpaid</option>
// </select>

//         </div>

//           <div className="col-12 text-start">
//             <button type="submit" className="btn btn-primary">
//               Add Invoice
//             </button>
//           </div>

//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddInvoice;


// import { useState } from "react";
// import axios from "axios";

// function AddInvoice() {
//   const [form, setForm] = useState({
//     patientId: "",
//     totalAmount: "",
//     status: "PENDING"
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/receptionist/invoices",
//         {
//           patientId: Number(form.patientId),
//           totalAmount: Number(form.totalAmount),
//           status: form.status
//         }
//       );

//       setMessage(`✅ Invoice created (ID: ${response.data.invoiceId})`);

//       setForm({
//         patientId: "",
//         totalAmount: "",
//         status: "PENDING"
//       });
//     } catch (error) {
//       setMessage("❌ Failed to create invoice");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="card p-4 shadow-sm">
//       <h5 className="mb-3">Add Invoice</h5>

//       <form onSubmit={handleSubmit}>
//         <div className="row g-3">

//           {/* Patient ID */}
//           <div className="col-md-6">
//             <label className="form-label">Patient ID</label>
//             <input
//               type="number"
//               name="patientId"
//               className="form-control"
//               value={form.patientId}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Total Amount */}
//           <div className="col-md-6">
//             <label className="form-label">Total Amount</label>
//             <input
//               type="number"
//               name="totalAmount"
//               className="form-control"
//               value={form.totalAmount}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Status Dropdown */}
//           <div className="col-md-6">
//             <label className="form-label">Invoice Status</label>
//             <select
//               name="status"
//               className="form-select"
//               value={form.status}
//               onChange={handleChange}
//               required
//             >
//               <option value="PENDING">Pending</option>
//               <option value="PAID">Paid</option>
//             </select>
//           </div>

       

//           <div className="col-12 text-start">
//             <button type="submit" className="btn btn-primary">
//               Create Invoice
//             </button>
//           </div>

//         </div>
//       </form>

//       {message && (
//         <div className="mt-3 alert alert-info">
//           {message}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddInvoice;

import { useState } from "react";
import axios from "axios";

function AddInvoice({ patientId, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false); // 🔑 KEY FIX

  const submitInvoice = async () => {
    if (!patientId) {
      alert("Patient not selected");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (loading) return; // 🔥 PREVENT DOUBLE CALL

    try {
      setLoading(true); // 🔒 LOCK

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
      setLoading(false); // 🔓 UNLOCK
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

