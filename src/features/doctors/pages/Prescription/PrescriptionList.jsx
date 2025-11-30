import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function PrescriptionList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "doctorName", label: "Doctor" },
  ];

  const prescriptions = [
    {
      date: "28 Apr, 2022",
      patientName: "Chester H. Smith",
      doctorName: "Zoila C. Vicini",
    },
    {
      date: "28 Apr, 2022",
      patientName: "Kyle E. Moore",
      doctorName: "Sandra T. Carter",
    },
    {
      date: "29 Apr, 2022",
      patientName: "Sara Ali",
      doctorName: "Dr. Gupta",
    },
  ];

  const filtered = prescriptions.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
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

export default PrescriptionList;
