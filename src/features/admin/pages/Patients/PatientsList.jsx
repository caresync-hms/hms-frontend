import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAllPatientsQuery } from "../../../../services/patientsApi";

function PatientsList() {
  const [search, setSearch] = useState("");

  const {
    data: patients = [],
    isLoading,
    isError,
    error,
  } = useGetAllPatientsQuery();

  const columns = [
    { key: "firstname", label: "First Name" },
    { key: "lastname", label: "Last Name" },
    { key: "phone", label: "Phone" },
    { key: "gender", label: "Gender" },
    { key: "bloodGroup", label: "Blood Group" },
    { key: "status", label: "Status" },
  ];

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstname} ${patient.lastname}`
      ?.toLowerCase()
      .includes(search.toLowerCase()),
  );

  if (isLoading) {
    return <div className="container mt-4">Loading patients...</div>;
  }

  if (isError) {
    return (
      <div className="container mt-4 text-danger">
        Failed to load patients: {error?.data?.message || "Unknown error"}
      </div>
    );
  }

  console.log(patients);

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredPatients}
        actions={{
          edit: (row) => alert(`Edit: ${row.firstname} ${row.lastname}`),
          delete: (row) => alert(`Delete: ${row.firstname} ${row.lastname}`),
        }}
      />
    </div>
  );
}

export default PatientsList;
