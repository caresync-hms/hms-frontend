import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import EditReceptionist from "./EditReceptionist";
import Modal from "../../../../components/Modal/Modal";
import {
  useGetAllUsersQuery,
  useGetUsersByRoleQuery,
  useUpdateUserStatusMutation,
} from "../../../../services/userApi";

function ReceptionistList() {
  const [search, setSearch] = useState("");
  const [selectedReceptionist, setSelectedReceptionist] = useState(null);

  const {
    data: receptionist = [],
    isLoading,
    isError,
    error,
  } = useGetUsersByRoleQuery("ROLE_RECEPTIONIST");

  const [updateUserStatus, { isLoading: isUpdating }] =
    useUpdateUserStatusMutation();

  const columns = [
    { key: "firstname", label: "First Name" },
    { key: "lastname", label: "Last Name" },
    { key: "phone", label: "Phone" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Address" },
    { key: "gender", label: "Gender" },
    { key: "status", label: "Status" },
  ];

  const filteredReceptionist = receptionist.filter((receptionist) =>
    `${receptionist.firstname} ${receptionist.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleSoftDelete = async (receptionist) => {
    const confirmed = window.confirm(
      `Deactivate receptionist ${receptionist.firstname} ${receptionist.lastname}?`,
    );

    if (!confirmed) return;

    try {
      await updateUserStatus({
        id: receptionist.id,
        status: "INACTIVE",
      }).unwrap();

      alert("receptionist deactivated successfully");
    } catch (err) {
      alert(err?.data?.message || "Failed to deactivate receptionist");
    }
  };

  if (isLoading) {
    return <div className="container mt-4">Loading receptionist...</div>;
  }

  if (isError) {
    return (
      <div className="container mt-4 text-danger">
        Failed to load receptionist: {error?.data?.message || "Unknown error"}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredReceptionist}
        actions={{
          edit: (row) => setSelectedReceptionist(row),
          delete: handleSoftDelete, // soft delete
        }}
        disabledActions={isUpdating}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedReceptionist && (
        <Modal
          title="Edit receptionist"
          onClose={() => setSelectedReceptionist(null)}
        >
          <EditReceptionist
            receptionist={selectedReceptionist}
            onClose={() => setSelectedReceptionist(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default ReceptionistList;
