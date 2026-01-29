import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
import {
  useGetPrescriptionsByDoctorQuery,
  useDeletePrescriptionMutation,
} from "../../../../services/prescriptionApi";
import EditPrescription from "./EditPrescription";
import Modal from "./../../../../components/Modal/Modal";

function PrescriptionList() {
  const [search, setSearch] = useState("");
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const userId = localStorage.getItem("id");

  // 1️⃣ Get doctor
  const {
    data: currentDoctor,
    isLoading: doctorLoading,
    isError: doctorError,
  } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.doctorId;

  // 2️⃣ Get prescriptions by doctor
  const {
    data: prescriptions = [],
    isLoading: prescriptionsLoading,
    isError: prescriptionsError,
    error,
  } = useGetPrescriptionsByDoctorQuery(doctorId, {
    skip: !doctorId,
  });

  // 3️⃣ Delete mutation
  const [deletePrescription, { isLoading: deleting }] =
    useDeletePrescriptionMutation();

  // 4️⃣ Columns
  const columns = [
    { key: "patientName", label: "Patient Name" },
    { key: "medicine", label: "Medicine" },
    { key: "notes", label: "Notes" },
    { key: "dateIssued", label: "Date Issued" },
  ];

  // 5️⃣ Map backend → table (IMPORTANT: prescriptionId)
  const mappedPrescriptions = prescriptions.map((p) => ({
    prescriptionId: p.prescriptionId,
    patientName: p.patientName || "-",
    medicine: p.medicine || "-",
    notes: p.notes || "-",
    dateIssued: p.dateIssued
      ? new Date(p.dateIssued).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "-",
  }));

  const filtered = mappedPrescriptions.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase()),
  );

  // 6️⃣ Delete handler (🗑️)
  const handleDelete = async (row) => {
    const confirmed = window.confirm(
      `Delete prescription for ${row.patientName}?`,
    );

    if (!confirmed) return;

    try {
      await deletePrescription(row.prescriptionId).unwrap();
      alert("Prescription deleted successfully");
    } catch (err) {
      alert(err?.data?.message || "Failed to delete prescription");
    }
  };

  // 7️⃣ Loading & errors
  if (doctorLoading || prescriptionsLoading) {
    return <p>Loading prescriptions...</p>;
  }

  if (doctorError) {
    return <p className="text-danger">Failed to load doctor info</p>;
  }

  if (prescriptionsError) {
    return (
      <p className="text-danger">
        {error?.data?.message || "Failed to load prescriptions"}
      </p>
    );
  }

  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => setSelectedPrescription(row),
          delete: handleDelete,
        }}
        disabledActions={deleting}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedPrescription && (
        <Modal
          title="Edit Prescription"
          onClose={() => setSelectedPrescription(null)}
        >
          <EditPrescription
            prescription={selectedPrescription}
            onClose={() => setSelectedPrescription(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default PrescriptionList;
