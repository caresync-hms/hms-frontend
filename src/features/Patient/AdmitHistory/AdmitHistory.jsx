import { useState } from "react";
import Table from "../../../components/Table/Table";

function AdmitHistoryPage() {
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
      bedType: <span className="badge bg-primary">ward</span>,
      patient: "Kyle E. Moore",
      allotment: "2022-04-28",
      discharge: "2022-05-02",
    },
  ];

  const filteredData = beds.filter(
    (b) =>
      b.patient.toLowerCase().includes(search.toLowerCase()) ||
      String(b.bedNumber).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card shadow-sm">
      <div className="card-header fw-semibold">Bed Allotment List</div>

      <div className="card-body">
        {/* Search */}
        <div className="mb-3">
          <label className="fw-semibold me-2">Search:</label>
          <input
            type="text"
            className="form-control d-inline-block w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={filteredData}
          actions={{
            edit: (row) => alert(`View ${row.bedNumber}`),
          }}
        />

        {/* Footer Info */}
        <div className="mt-2 text-muted">
          Showing 1 to {filteredData.length} of {filteredData.length} entries
        </div>
      </div>
    </div>
  );
}

export default AdmitHistoryPage;
