import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function AppointmentList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "doctorName", label: "Doctor" },
  ];

  const appointments = [
    {
      date: "30 Nov, 2025",
      patientName: "John Doe",
      doctorName: "Dr. Smith",
    },
    {
      date: "01 Dec, 2025",
      patientName: "Jane Doe",
      doctorName: "Dr. Gupta",
    },
    {
      date: "02 Dec, 2025",
      patientName: "Alice Johnson",
      doctorName: "Dr. Carter",
    },
  ];

  const filtered = appointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => alert("Edit Appointment for " + row.patientName),
          delete: (row) => alert("Cancel Appointment for " + row.patientName),
        }}
      />
    </div>
  );
}

export default AppointmentList;
