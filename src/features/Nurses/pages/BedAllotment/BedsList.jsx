import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function BedsList() {
  const [search, setSearch] = useState("");

  const columns = [
 
    { key: "patientName", label: "Patient Name" },
    { key: "bedNumber", label: "Bed Number" },
    { key: "wardType", label: "Wards" },
  ];

  const bedsList = [
    {
      patientName: "Rohan Sharma",
      bedNumber: "EM1",
      wardType: "Emergency Ward",
    },
    {
      patientName: "Neha Kapoor",
      bedNumber: "MW2",
      wardType: "Maternity Ward",
    },
    {
      patientName: "Amit Verma",
      bedNumber: "ICU2",
      wardType: "ICU",
    },
  ];

  const filtered = bedsList.filter((a) =>
    a.bedNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => alert("Edit Appointment for " + row.bedNumber),
          delete: (row) => alert("Cancel Appointment for " + row.bedNumber),
        }}
      />
    </div>
  );
}

export default BedsList;

