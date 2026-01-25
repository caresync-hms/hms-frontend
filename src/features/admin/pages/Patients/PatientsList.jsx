import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetAllPatientsQuery,
  useUpdatePatientStatusMutation,
} from "../../../../services/patientsApi";

function PatientsList() {
  const [search, setSearch] = useState("");

  const {
    data: patients = [],
    isLoading,
    isError,
    error,
  } = useGetAllPatientsQuery();

  const [updatePatientStatus, { isLoading: isUpdating }] =
    useUpdatePatientStatusMutation();

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
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleSoftDelete = async (patient) => {
    const confirmed = window.confirm(
      `Deactivate patient ${patient.firstname} ${patient.lastname}?`,
    );

    if (!confirmed) return;

    try {
      await updatePatientStatus({
        patientId: patient.patientId,
        status: "INACTIVE",
      }).unwrap();

      alert("Patient deactivated successfully");
    } catch (err) {
      alert(err?.data?.message || "Failed to deactivate patient");
    }
  };

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
          delete: handleSoftDelete, // soft delete
        }}
        disabledActions={isUpdating}
      />
    </div>
  );
}

export default PatientsList;
