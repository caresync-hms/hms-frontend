// import { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
// import { useGetPrescriptionsByDoctorIdQuery } from "../../../../services/prescription";

// function PrescriptionList() {
//   const [search, setSearch] = useState("");

//   // Logged-in userId (doctor user)
//   const userId = localStorage.getItem("id");

//   // 1️⃣ Fetch doctor using userId
//   const {
//     data: currentDoctor,
//     isLoading: doctorLoading,
//     isError: doctorError,
//   } = useGetDoctorByUserIdQuery(userId, {
//     skip: !userId,
//   });

//   const doctorId = currentDoctor?.id;

//   // 2️⃣ Fetch prescriptions by doctorId
//   const {
//     data: prescriptions = [],
//     isLoading: prescriptionsLoading,
//     isError: prescriptionsError,
//     error,
//   } = useGetPrescriptionsByDoctorIdQuery(doctorId, {
//     skip: !doctorId,
//   });

//   // ✅ Table columns (ONLY REQUIRED FIELDS)
//   const columns = [
//     { key: "patientName", label: "Patient Name" },
//     { key: "medicine", label: "Medicine" },
//     { key: "notes", label: "Notes" },
//     { key: "dateIssued", label: "Date Issued" },
//   ];

//   // 🔁 Map backend DTO → table format
//   const mappedPrescriptions = prescriptions.map((p) => ({
//     patientName: p.patientName || "-",
//     medicine: p.medicine || "-",
//     notes: p.notes || "-",
//     dateIssued: p.dateIssued
//       ? new Date(p.dateIssued).toLocaleDateString()
//       : "-",
//   }));

//   // 🔍 Search by patient name
//   const filtered = mappedPrescriptions.filter((p) =>
//     p.patientName.toLowerCase().includes(search.toLowerCase())
//   );

//   // ⏳ Loading state
//   if (doctorLoading || prescriptionsLoading) {
//     return <p>Loading prescriptions...</p>;
//   }

//   // ❌ Error states
//   if (doctorError) {
//     return <p className="text-danger">Failed to load doctor info</p>;
//   }

//   if (prescriptionsError) {
//     return (
//       <p className="text-danger">
//         {error?.data?.message || "Failed to load prescriptions"}
//       </p>
//     );
//   }

//   // ✅ UI
//   return (
//     <div className="mt-3">
//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filtered}
//         actions={{
//           edit: (row) =>
//             alert("Edit Prescription for " + row.patientName),
//           delete: (row) =>
//             alert("Delete Prescription for " + row.patientName),
//         }}
//       />
//     </div>
//   );
// }

// export default PrescriptionList;

import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
import {
  useGetPrescriptionsByDoctorQuery,
  useDeletePrescriptionMutation,
} from "../../../../services/prescriptionApi";

function PrescriptionList() {
  const [search, setSearch] = useState("");

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
    prescriptionId: p.prescriptionId, // ✅ REQUIRED
    patientName: p.patientName || "-",
    medicine: p.medicine || "-",
    notes: p.notes || "-",
    dateIssued: p.dateIssued
      ? new Date(p.dateIssued).toLocaleDateString()
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

  // 8️⃣ UI
  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          delete: handleDelete, // 🗑️ dustbin works
        }}
        disabledActions={deleting}
      />
    </div>
  );
}

export default PrescriptionList;
