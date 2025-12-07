import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function ViewBedAllotment() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "patientName", label: "Patient" },
    { key: "bedNumber", label: "Bed No." },
    { key: "ward", label: "Ward" },
    { key: "department", label: "Department" },
    { key: "doctorName", label: "Doctor" },
    { key: "status", label: "Status" },
  ];

  // All Bed Allotments - Admin View
  const bedAllotments = [
    {
      patientName: "Rahul Sharma",
      bedNumber: "B-101",
      ward: "ICU",
      department: "Cardiology",
      doctorName: "Dr. Smith",
      status: "Occupied",
    },
    {
      patientName: "Priya Verma",
      bedNumber: "B-205",
      ward: "General Ward",
      department: "Orthopedics",
      doctorName: "Dr. Gupta",
      status: "Occupied",
    },
    {
      patientName: "Amit Patel",
      bedNumber: "B-310",
      ward: "Private Ward",
      department: "Dermatology",
      doctorName: "Dr. Carter",
      status: "Discharged",
    },
  ];

  const filtered = bedAllotments.filter(
    (b) =>
      b.patientName.toLowerCase().includes(search.toLowerCase()) ||
      b.bedNumber.toLowerCase().includes(search.toLowerCase()) ||
      b.ward.toLowerCase().includes(search.toLowerCase()) ||
      b.department.toLowerCase().includes(search.toLowerCase()) ||
      b.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      b.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by patient, bed, ward, doctor..."
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          delete: (row) =>
            alert(
              `Discharge Patient: ${row.patientName} from Bed ${row.bedNumber}`
            ),
        }}
      />
    </div>
  );
}

export default ViewBedAllotment;
