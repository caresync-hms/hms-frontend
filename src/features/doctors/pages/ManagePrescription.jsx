import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";

function ManagePrescription() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient" },
    { key: "doctorName", label: "Doctor" },
    { key: "medicine", label: "Medicine" },
  ];

  const prescriptions = [
    {
      date: "2025-01-15",
      patientName: "Rohan Sharma",
      doctorName: "Dr. Mehta",
      medicine: "Paracetamol 500mg",
    },
    {
      date: "2025-01-17",
      patientName: "Neha Kapoor",
      doctorName: "Dr. Carter",
      medicine: "Amoxicillin 250mg",
    },
  ];

  const filtered = prescriptions.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => alert("Edit Prescription for " + row.patientName),
          delete: (row) => alert("Delete Prescription for " + row.patientName),
        }}
      />
    </div>
  );
}

export default ManagePrescription;
