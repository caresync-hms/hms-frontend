import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";

function MyPatients() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Patient Name" },
    { key: "age", label: "Age" },
    { key: "Gender", label: "Gender" },
    { key: "bloodGroup", label: "Blood Group" },
    { key: "birthDate", label: "Birth Date" },
  ];

  const patients = [
    { name: "Rohan Sharma", age: 32, Gender : "Male", bloodGroup: "A+", birthDate: "1992-04-18" },
    { name: "Neha Kapoor", age: 27, Gender : "Female", bloodGroup: "B+", birthDate: "1997-01-09" },
    { name: "Amit Verma", age: 45, Gender : "Male", bloodGroup: "O+", birthDate: "1979-07-22" },
    { name: "Sara Ali", age: 19, Gender : "Female", bloodGroup: "AB+", birthDate: "2005-11-12" },
  ];

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />
      <Table
        columns={columns}
        data={filteredPatients}
        actions={{
          edit: (row) => alert("Edit patient: " + row.name),
          delete: (row) => alert("Delete patient: " + row.name),
        }}
      />
    </div>
  );
}

export default MyPatients;

