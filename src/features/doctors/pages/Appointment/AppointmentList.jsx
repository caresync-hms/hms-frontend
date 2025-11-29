import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function AppointmentList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "doctorName", label: "Doctor" },
    { key: "options", label: "Options" },
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
        data={filtered.map((appointment) => ({
          ...appointment,
          options: (
            <div className="flex gap-2">
              <button
                onClick={() => alert("Edit Appointment for " + appointment.patientName)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => alert("Cancel Appointment for " + appointment.patientName)}
                className="text-red-500"
              >
                Cancel
              </button>
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default AppointmentList;
