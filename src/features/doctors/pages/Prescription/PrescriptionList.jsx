// import React, { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";

// function PrescriptionList() {
//   const [search, setSearch] = useState("");

//   const columns = [
//     { key: "date", label: "Date" },
//     { key: "patientName", label: "Patient Name" },
//     { key: "doctorName", label: "Doctor" },
//   ];

//   const prescriptions = [
//     {
//       date: "28 Apr, 2022",
//       patientName: "Chester H. Smith",
//       doctorName: "Zoila C. Vicini",
//     },
//     {
//       date: "28 Apr, 2022",
//       patientName: "Kyle E. Moore",
//       doctorName: "Sandra T. Carter",
//     },
//     {
//       date: "29 Apr, 2022",
//       patientName: "Sara Ali",
//       doctorName: "Dr. Gupta",
//     },
//   ];

//   const filtered = prescriptions.filter((p) =>
//     p.patientName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="mt-3">
//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filtered}
//         actions={{
//           edit: (row) => alert("Edit Prescription for " + row.patientName),
//           delete: (row) => alert("Delete Prescription for " + row.patientName),
//         }}
//       />
//     </div>
//   );
// }

// export default PrescriptionList;

// import { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
// // import {useGetDoctorByUserIdQuery} from "../../../../services/doctorsApi";
// // import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";
// import { useGetPrescriptionsByDoctorIdQuery } from "../../../../services/prescription";


// function PrescriptionList() {
//   const [search, setSearch] = useState("");

//   const userId = localStorage.getItem("id");

//   // 1️⃣ Get logged-in doctor
//   const {
//     data: currentDoctor,
//     isLoading: doctorLoading,
//     isError: doctorError,
//   } = useGetDoctorByUserIdQuery(userId, {
//     skip: !userId,
//   });

//   const doctorId = currentDoctor?.id;

//   // 2️⃣ Get prescriptions by doctorId
//   const {
//     data: prescriptions = [],
//     isLoading: prescriptionsLoading,
//     isError: prescriptionsError,
//     error,
//   } = useGetPrescriptionsByDoctorIdQuery(doctorId, {
//     skip: !doctorId,
//   });

//   const columns = [
//     { key: "date", label: "Date" },
//     { key: "patientName", label: "Patient Name" },
//     { key: "doctorName", label: "Doctor" },
//   ];

//   // 🔁 Map backend DTO → table format
//   const mappedPrescriptions = prescriptions.map((p) => ({
//     date: p.dateIssued
//       ? new Date(p.dateIssued).toLocaleDateString()
//       : "-",
//     patientName: p.patientName,
//     doctorName: p.doctorName,
//   }));

//   const filtered = mappedPrescriptions.filter((p) =>
//     p.patientName.toLowerCase().includes(search.toLowerCase())
//   );

//   // 🧠 Loading & error handling
//   if (doctorLoading || prescriptionsLoading) {
//     return <p>Loading prescriptions...</p>;
//   }

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
import { useGetPrescriptionsByDoctorIdQuery } from "../../../../services/prescription";

function PrescriptionList() {
  const [search, setSearch] = useState("");

  // Logged-in userId (doctor user)
  const userId = localStorage.getItem("id");

  // 1️⃣ Fetch doctor using userId
  const {
    data: currentDoctor,
    isLoading: doctorLoading,
    isError: doctorError,
  } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.id;

  // 2️⃣ Fetch prescriptions by doctorId
  const {
    data: prescriptions = [],
    isLoading: prescriptionsLoading,
    isError: prescriptionsError,
    error,
  } = useGetPrescriptionsByDoctorIdQuery(doctorId, {
    skip: !doctorId,
  });

  // ✅ Table columns (ONLY REQUIRED FIELDS)
  const columns = [
    { key: "patientName", label: "Patient Name" },
    { key: "medicine", label: "Medicine" },
    { key: "notes", label: "Notes" },
    { key: "dateIssued", label: "Date Issued" },
  ];

  // 🔁 Map backend DTO → table format
  const mappedPrescriptions = prescriptions.map((p) => ({
    patientName: p.patientName || "-",
    medicine: p.medicine || "-",
    notes: p.notes || "-",
    dateIssued: p.dateIssued
      ? new Date(p.dateIssued).toLocaleDateString()
      : "-",
  }));

  // 🔍 Search by patient name
  const filtered = mappedPrescriptions.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase())
  );

  // ⏳ Loading state
  if (doctorLoading || prescriptionsLoading) {
    return <p>Loading prescriptions...</p>;
  }

  // ❌ Error states
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

  // ✅ UI
  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) =>
            alert("Edit Prescription for " + row.patientName),
          delete: (row) =>
            alert("Delete Prescription for " + row.patientName),
        }}
      />
    </div>
  );
}

export default PrescriptionList;
