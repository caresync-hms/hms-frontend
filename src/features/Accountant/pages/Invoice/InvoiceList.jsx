import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function InvoiceList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "patient", label: "Patient" },
    { key: "title", label: "Title" },
    { key: "amount", label: "Amount" },
    { key: "description", label: "Description" },
    { key: "status", label: "Status" },
  ];

  // Appointments for logged-in patient
  const invoices = [
    {
      patient: "Jane Doe",
      title: "Cardiology Consultation",
      amount: "$200",
      description: "Cardiology",
      status: "Paid",
    },
    {
      patient: "Alice Johnson",
      title: "eyes Consultation",
      amount: "$250",
      description: "Eyes Checkup",
      status: "Unpaid",
    },
    {
      patient: "John Doe",
      title: "Orthopedic Consultation",
      amount: "$300",
      description: "Legs checkup",
      status: "paid",
    },
  ];

  const filtered = invoices.filter(
    (a) =>
      a.patient.toLowerCase().includes(search.toLowerCase()) ||
      a.title.toLowerCase().includes(search.toLowerCase())||
      a.amount.toLowerCase().includes(search.toLowerCase())||
      a.status.toLowerCase().includes(search.toLowerCase())||
      a.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by invoice or patient name"
        value={search}
        onChange={setSearch}
      />

      <Table 
      columns={columns}
       data={filtered} 
       actions={{
          delete: (row) => alert("Cancel Appointment for " + row.patient),
        }}/>
      
    </div>
  );
}

export default InvoiceList;

