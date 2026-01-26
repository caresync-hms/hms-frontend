import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetAllDoctorsQuery,
  useUpdateDoctorStatusMutation,
} from "../../../../services/doctorsApi";
import EditDoctor from "./EditDoctor";
import Modal from "../../../../components/Modal/Modal";

function DoctorsList() {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    isError,
    error,
  } = useGetAllDoctorsQuery();

  const [updateDoctorStatus, { isLoading: isUpdating }] =
    useUpdateDoctorStatusMutation();

  const columns = [
    { key: "firstname", label: "First Name" },
    { key: "lastname", label: "Last Name" },
    { key: "specialization", label: "Specialization" },
    { key: "department", label: "Department" },
    { key: "phone", label: "Phone No" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.firstname} ${doctor.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleSoftDelete = async (doctor) => {
    const confirmed = window.confirm(
      `Deactivate doctor ${doctor.firstname} ${doctor.lastname}?`,
    );

    if (!confirmed) return;

    try {
      await updateDoctorStatus({
        doctorId: doctor.doctorId, // must exist in DTO
        status: "INACTIVE",
      }).unwrap();

      alert("Doctor deactivated successfully");
    } catch (err) {
      alert(err?.data?.message || "Failed to deactivate doctor");
    }
  };

  if (isLoading) {
    return <div className="container mt-4">Loading doctors...</div>;
  }

  if (isError) {
    return (
      <div className="container mt-4 text-danger">
        Failed to load doctors: {error?.data?.message || "Unknown error"}
      </div>
    );
  }

  console.log(doctors);

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredDoctors}
        actions={{
          edit: (row) => setSelectedDoctor(row),
          delete: handleSoftDelete, // soft delete
        }}
        disabledActions={isUpdating}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedDoctor && (
        <Modal title="Edit Doctor" onClose={() => setSelectedDoctor(null)}>
          <EditDoctor
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default DoctorsList;
