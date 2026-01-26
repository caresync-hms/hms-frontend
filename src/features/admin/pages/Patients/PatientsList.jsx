import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetAllPatientsQuery,
  useUpdatePatientStatusMutation,
} from "../../../../services/patientsApi";
import EditPatient from "./EditPatient";
import Modal from "../../../../components/Modal/Modal";

function PatientsList() {
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

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
          edit: (row) => setSelectedPatient(row),
          delete: handleSoftDelete, // soft delete
        }}
        disabledActions={isUpdating}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedPatient && (
        <Modal title="Edit Patient" onClose={() => setSelectedPatient(null)}>
          <EditPatient
            patient={selectedPatient}
            onClose={() => setSelectedPatient(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default PatientsList;
