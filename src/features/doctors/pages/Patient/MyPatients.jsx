// import React, { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";

// function MyPatients() {
//   const [search, setSearch] = useState("");

//   const columns = [
//     { key: "name", label: "Patient Name" },
//     { key: "age", label: "Age" },
//     { key: "Gender", label: "Gender" },
//     { key: "bloodGroup", label: "Blood Group" },
//     { key: "birthDate", label: "Birth Date" },
//     { key: "bedAllocated", label: "Bed Allocated" },  // ✅ NEW COLUMN
//   ];

//   const patients = [
//     {
//       name: "Rohan Sharma",
//       age: 32,
//       Gender: "Male",
//       bloodGroup: "A+",
//       birthDate: "1992-04-18",
//       bedAllocated: "Ward-12 / Bed-5",              // ✅ NEW FIELD
//     },
//     {
//       name: "Neha Kapoor",
//       age: 27,
//       Gender: "Female",
//       bloodGroup: "B+",
//       birthDate: "1997-01-09",
//       bedAllocated: "Ward-03 / Bed-2",
//     },
//     {
//       name: "Amit Verma",
//       age: 45,
//       Gender: "Male",
//       bloodGroup: "O+",
//       birthDate: "1979-07-22",
//       bedAllocated: "Ward-07 / Bed-9",
//     },
//     {
//       name: "Sara Ali",
//       age: 19,
//       Gender: "Female",
//       bloodGroup: "AB+",
//       birthDate: "2005-11-12",
//       bedAllocated: "Ward-01 / Bed-1",
//     },
//   ];

//   const filteredPatients = patients.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <SearchBar value={search} onChange={setSearch} />
//       <Table
//         columns={columns}
//         data={filteredPatients}
//         actions={{
//           edit: (row) => alert("Edit patient: " + row.name),
//           delete: (row) => alert("Delete patient: " + row.name),
//         }}
//       />
//     </div>
//   );
// }

// export default MyPatients;

// import React, { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import { useGetPatientsByDoctorIdQuery } from "../../../../services/doctorsApi";

// function MyPatients() {
//   const [search, setSearch] = useState("");

//   const doctorId = 1; // 🔴 replace with logged-in doctorId later

//   const {
//     data: patients = [],
//     isLoading,
//     isError,
//     error,
//   } = useGetPatientsByDoctorIdQuery(doctorId);

//   const columns = [
//     {
//       key: "fullname",
//       label: "Patient Name",
//     },
//     {
//       key: "gender",
//       label: "Gender",
//     },
//     {
//       key: "phone",
//       label: "Phone",
//     },
//     {
//       key: "appointmentDate",
//       label: "Appointment Date",
//     },
//     {
//       key: "appointmentStatus",
//       label: "Status",
//     },
//   ];

//   // 🔁 Transform backend DTO → table-friendly format
//   const mappedPatients = patients.map((p) => ({
//     ...p,
//     fullname: `${p.firstname} ${p.lastname}`,
//     appointmentDate: p.appointmentDate
//       ? new Date(p.appointmentDate).toLocaleDateString()
//       : "-",
//   }));

//   const filteredPatients = mappedPatients.filter((p) =>
//     p.fullname.toLowerCase().includes(search.toLowerCase())
//   );

//   if (isLoading) return <div className="container mt-4">Loading...</div>;

//   if (isError)
//     return (
//       <div className="container mt-4 text-danger">
//         {error?.data?.message || "Failed to load patients"}
//       </div>
//     );

//   return (
//     <div className="container mt-4">
//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filteredPatients}
//         actions={{
//           edit: (row) => alert("Edit patient: " + row.fullname),
//           delete: (row) => alert("Delete patient: " + row.fullname),
//         }}
//       />
//     </div>
//   );
// }

// export default MyPatients;

import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetDoctorByUserIdQuery,
  useGetPatientsByDoctorIdQuery,
} from "../../../../services/doctorsApi";

function MyPatients() {
  const [search, setSearch] = useState("");

  const { data: currentDoctorUser = [] } = useGetDoctorByUserIdQuery(
    localStorage.getItem("id"),
  );

  const {
    data: patients = [],
    isLoading,
    isError,
    error,
  } = useGetPatientsByDoctorIdQuery(currentDoctorUser.doctorId);

  const columns = [
    {
      key: "patientName",
      label: "Patient Name",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "dob",
      label: "DOB",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "medicalHistory",
      label: "Medical History",
    },
    {
      key: "admitDate",
      label: "Admit Date",
    },
    {
      key: "dischargeDate",
      label: "Discharge Date",
    },
  ];

  // 🔁 format dates only (NO data mutation)
  const mappedPatients = patients.map((p) => ({
    ...p,
    dob: p.dob ? new Date(p.dob).toLocaleDateString() : "-",
    admitDate: p.admitDate ? new Date(p.admitDate).toLocaleDateString() : "-",
    dischargeDate: p.dischargeDate
      ? new Date(p.dischargeDate).toLocaleDateString()
      : "-",
  }));

  const filteredPatients = mappedPatients.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <div className="container mt-4">Loading...</div>;

  if (isError)
    return (
      <div className="container mt-4 text-danger">
        {error?.data?.message || "Failed to load patients"}
      </div>
    );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table columns={columns} data={filteredPatients} />
    </div>
  );
}

export default MyPatients;
