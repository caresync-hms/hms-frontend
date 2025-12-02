import { useState } from "react";
import Table from "../../../components/Table/Table";
import SearchBar from "../../../components/SearchBar/SearchBar";

function AdmitHistory() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "bedNumber", label: "Bed Number" },
    { key: "bedType", label: "Bed Type" },
    { key: "patient", label: "Patient" },
    { key: "allotment", label: "Allotment DateTime" },
    { key: "discharge", label: "Discharge DateTime" },
  ];

  const beds = [
    {
      bedNumber: "W1",
      bedType: "Ward",
      patient: "Kyle E. Moore",
      allotment: "2022-04-28",
      discharge: "2022-05-02",
    },
  ];

  const filteredData = beds.filter(
    (b) =>
      b.patient.toLowerCase().includes(search.toLowerCase()) ||
      b.bedNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by bed number or patient name"
        value={search}
        onChange={setSearch}
      />
      <Table
        columns={columns}
        data={filteredData}
        actions={{
          edit: (row) => alert(`View Bed ${row.bedNumber}`),
        }}
      />
    </div>
  );
}

export default AdmitHistory;
