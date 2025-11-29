import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";

function ManageAppointments() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "doctorName", label: "Doctor" },
    { key: "status", label: "Status" },
  ];

  const appointments = [
    {
      date: "2025-01-12",
      patientName: "Rohan Sharma",
      doctorName: "Dr. Mehta",
      status: "Confirmed",
    },
    {
      date: "2025-01-14",
      patientName: "Neha Kapoor",
      doctorName: "Dr. Roy",
      status: "Pending",
    },
    {
      date: "2025-01-16",
      patientName: "Amit Verma",
      doctorName: "Dr. Gupta",
      status: "Cancelled",
    },
    {
      date: "2025-01-18",
      patientName: "Sara Ali",
      doctorName: "Dr. Mehta",
      status: "Confirmed",
    },
  ];

  const filteredAppointments = appointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredAppointments}
        actions={{
          edit: (row) => alert("Edit appointment of: " + row.patientName),
          delete: (row) => alert("Delete appointment of: " + row.patientName),
        }}
      />
    </div>
  );
}

export default ManageAppointments;
