import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAllDoctorsQuery } from "../../../../services/doctorsApi";

function DoctorsList() {
  const [search, setSearch] = useState("");

  const {
    data: doctors = [],
    isLoading,
    isError,
    error,
  } = useGetAllDoctorsQuery();

  const columns = [
    { key: "doctorName", label: "Doctor Name" },
    { key: "specialization", label: "Specialization" },
    { key: "doctorDepartment", label: "Department" },
    { key: "doctorPhoneNo", label: "Phone No" },
    { key: "doctorEmail", label: "Email" },
    { key: "gender", label: "Gender" },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.doctorName?.toLowerCase().includes(search.toLowerCase()),
  );

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
          edit: (row) => alert("Edit: " + row.doctorName),
          delete: (row) => alert("Delete: " + row.doctorName),
        }}
      />
    </div>
  );
}

export default DoctorsList;
