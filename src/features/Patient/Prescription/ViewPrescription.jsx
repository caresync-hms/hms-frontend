import { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import { useNavigate } from "react-router-dom";

function ViewPrescription() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const columns = [
    { key: "date", label: "Date" },
    { key: "doctor", label: "Doctor" },
    { key: "action", label: "Options" },
  ];

  const prescriptions = [
    { id: 1, date: "28 Apr, 2022", doctor: "Sandra T. Carter" },
    { id: 2, date: "30 Nov, 2025", doctor: "Dr. Smith" },
  ];

  const filtered = prescriptions.filter((p) =>
    p.doctor.toLowerCase().includes(search.toLowerCase())||
    p.date.toLowerCase().includes(search.toLowerCase())||
    p.id.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by doctor name"
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered.map((p) => ({
          ...p,
          action: (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(`/patient/viewprescriptions/${p.id}`)}
            >
              View Prescription
            </button>
          ),
        }))}
      />
    </div>
  );
}

export default ViewPrescription;
