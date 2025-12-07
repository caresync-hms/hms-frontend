import { useState } from "react";

import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function ViewAppointments() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "patientName", label: "Patient" },
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "doctorName", label: "Doctor" },
    { key: "department", label: "Department" },
    { key: "status", label: "Status" },
  ];

  // All Appointments - Admin View
  const appointments = [
    {
      patientName: "Rahul Sharma",
      date: "30 Nov, 2025",
      time: "10:30 AM",
      doctorName: "Dr. Smith",
      department: "Cardiology",
      status: "Confirmed",
    },
    {
      patientName: "Priya Verma",
      date: "01 Dec, 2025",
      time: "12:00 PM",
      doctorName: "Dr. Gupta",
      department: "Orthopedics",
      status: "Pending",
    },
    {
      patientName: "Amit Patel",
      date: "02 Dec, 2025",
      time: "09:15 AM",
      doctorName: "Dr. Carter",
      department: "Dermatology",
      status: "Cancelled",
    },
  ];

  const filtered = appointments.filter(
    (a) =>
      a.patientName.toLowerCase().includes(search.toLowerCase()) ||
      a.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      a.department.toLowerCase().includes(search.toLowerCase()) ||
      a.status.toLowerCase().includes(search.toLowerCase()) ||
      a.date.toLowerCase().includes(search.toLowerCase()) ||
      a.time.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by patient, doctor, department..."
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          delete: (row) =>
            alert(
              `Cancel Appointment for ${row.patientName} with ${row.doctorName}`
            ),
        }}
      />
    </div>
  );
}

export default ViewAppointments;
