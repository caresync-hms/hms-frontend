import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";

function DoctorsList() {
  const [search, setSearch] = useState("");

  // const [doctors, setDoctors] = useState([]);

  //   const handleAddDoctor = (doc) => {
  //     setDoctors([...doctors, doc]);
  //   };

  const columns = [
    { key: "name", label: "Doctor Name" },
    { key: "specialization", label: "Specialization" },
    { key: "experience", label: "Experience (Years)" },
  ];

  const doctors = [
    {
      name: "Dr. Rajesh Patel",
      specialization: "Cardiologist",
      experience: 12,
    },
    { name: "Dr. Priya Sharma", specialization: "Neurologist", experience: 9 },
    {
      name: "Dr. Aman Gupta",
      specialization: "Orthopedic Surgeon",
      experience: 15,
    },
    {
      name: "Dr. Sneha Kulkarni",
      specialization: "Pediatrician",
      experience: 7,
    },
    {
      name: "Dr. Anil Verma",
      specialization: "General Physician",
      experience: 6,
    },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())||
    doctor.specialization.toLowerCase().includes(search.toLowerCase())||
    doctor.experience.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredDoctors}
      />
    </div>
  );
}

export default DoctorsList;
