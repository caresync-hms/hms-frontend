import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import { useGetAllDoctorsQuery } from "../../../services/doctorsApi";

function DoctorsList() {
  const [search, setSearch] = useState("");

  const {
    data: doctors = [],
    isLoading,
    isError,
    error,
  } = useGetAllDoctorsQuery();

  const columns = [
    { key: "name", label: "Doctor Name" },
    { key: "specialization", label: "Specialization" },
    { key: "experience", label: "Experience (Years)" },
  ];

  const mappedDoctors = doctors.map((doctor) => ({
    name: `Dr. ${doctor.firstname} ${doctor.lastname}`,
    specialization: doctor.specialization,
    experience: doctor.experience,
  }));

  const filteredDoctors = mappedDoctors.filter((doctor) => {
    const searchText = search.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(searchText) ||
      doctor.specialization.toLowerCase().includes(searchText) ||
      doctor.experience.toString().includes(searchText)
    );
  });

  if (isLoading) {
    return <div className="container mt-4">Loading doctors...</div>;
  }

  if (isError) {
    return (
      <div className="container mt-4 text-danger">
        Failed to load doctors: {error?.data?.message || "Server error"}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table columns={columns} data={filteredDoctors} />
    </div>
  );
}

export default DoctorsList;
