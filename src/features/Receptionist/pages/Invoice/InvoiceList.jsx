// import { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";

// function InvoiceList() {
//   const [search, setSearch] = useState("");

//   const columns = [
//     { key: "patient", label: "Patient" },
//     { key: "title", label: "Title" },
//     { key: "amount", label: "Amount" },
//     { key: "description", label: "Description" },
//     { key: "status", label: "Status" },
//   ];

//   // Appointments for logged-in patient
//   const invoices = [
//     {
//       patient: "Jane Doe",
//       title: "Cardiology Consultation",
//       amount: "$200",
//       description: "Cardiology",
//       status: "Paid",
//     },
//     {
//       patient: "Alice Johnson",
//       title: "eyes Consultation",
//       amount: "$250",
//       description: "Eyes Checkup",
//       status: "Unpaid",
//     },
//     {
//       patient: "John Doe",
//       title: "Orthopedic Consultation",
//       amount: "$300",
//       description: "Legs checkup",
//       status: "paid",
//     },
//   ];

//   const filtered = invoices.filter(
//     (a) =>
//       a.patient.toLowerCase().includes(search.toLowerCase()) ||
//       a.title.toLowerCase().includes(search.toLowerCase())||
//       a.amount.toLowerCase().includes(search.toLowerCase())||
//       a.status.toLowerCase().includes(search.toLowerCase())||
//       a.description.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="mt-3">
//       <SearchBar
//         placeholder="Search by invoice or patient name"
//         value={search}
//         onChange={setSearch}
//       />

//       <Table 
//       columns={columns}
//        data={filtered} 
//        actions={{
//           delete: (row) => alert("Cancel Appointment for " + row.patient),
//         }}/>
      
//     </div>
//   );
// }

// export default InvoiceList;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";

// function InvoiceList({ patientId, refreshTrigger }) {
//   const [search, setSearch] = useState("");
//   const [invoices, setInvoices] = useState([]);

//   const columns = [
//     { key: "invoiceId", label: "Invoice ID" },
//     { key: "patient", label: "Patient ID" },
//     { key: "amount", label: "Amount" },
//     { key: "status", label: "Status" },
//     { key: "createdDate", label: "Date" },
//   ];

//   // 🔹 Fetch invoices from backend
//   const fetchInvoices = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8080/api/receptionist/patients/${patientId}/invoices`
//       );

//       // Map backend → table format
//       const mapped = res.data.map((inv) => ({
//         invoiceId: inv.invoiceId,
//         patient: patientId,
//         amount: `₹${inv.totalAmount}`,
//         status: inv.status,
//         createdDate: inv.createdDate,
//       }));

//       setInvoices(mapped);
//     } catch (err) {
//       console.error("Failed to load invoices", err);
//     }
//   };

//   // 🔄 Load invoices on mount & refresh
//   useEffect(() => {
//     if (patientId) {
//       fetchInvoices();
//     }
//   }, [patientId, refreshTrigger]);

//   // 🔍 Search filter
//   const filtered = invoices.filter(
//     (i) =>
//       i.patient.toString().includes(search) ||
//       i.invoiceId.toString().includes(search) ||
//       i.amount.toLowerCase().includes(search.toLowerCase()) ||
//       i.status.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="mt-3">
//       <SearchBar
//         placeholder="Search invoice, patient or status"
//         value={search}
//         onChange={setSearch}
//       />

//       <Table
//         columns={columns}
//         data={filtered}
//         actions={{
//           delete: (row) =>
//             alert(`Delete Invoice ID ${row.invoiceId} (not implemented)`),
//         }}
//       />
//     </div>
//   );
// }

// export default InvoiceList;
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function InvoiceList({ patientId, refreshTrigger, onPaymentSuccess }) {
  const [search, setSearch] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  const loadInvoices = async () => {
    if (!patientId) return;

    const res = await axios.get(
      `http://localhost:9093/receptionist/patients/${patientId}/invoices`
    );

    setInvoices(
      res.data.map((inv) => ({
        id: inv.id,
        amount: inv.totalAmount,
        status: inv.status,
        date: inv.createdDate,
      }))
    );
  };

  useEffect(() => {
    loadInvoices();
  }, [patientId, refreshTrigger]);

  const payInvoice = async (row) => {
    try {
      await axios.post("http://localhost:9093/receptionist/payments", {
        invoiceId: row.id,
        amount: row.amount,
        paymentMethod,
      });

      alert("Payment successful ✅");
      loadInvoices();
      onPaymentSuccess?.();
    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
    }
  };

  const filtered = invoices.filter(
    (i) =>
      i.id.toString().includes(search) ||
      i.status.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { key: "id", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
  ];

  return (
    <>
      <SearchBar
        placeholder="Search invoice"
        value={search}
        onChange={setSearch}
      />

      {/* Payment method selector */}
      <select
        className="form-select form-select-sm mb-2"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <Table
        columns={columns}
        data={filtered}
        actions={{ pay: payInvoice }}
      />
    </>
  );
}

export default InvoiceList;




