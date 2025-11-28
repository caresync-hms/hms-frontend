import { useState } from "react";
import SearchBar from "./../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";

const Departments = () => {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Department Name" },
    { key: "description", label: "Description" },
  ];

  const departments = [
    { name: "Anesthesiology", description: "Anesthesiology" },
    {
      name: "Bacteriological Laboratory",
      description: "Bacteriological Laboratory",
    },
    { name: "Physical Therapy", description: "Physical Therapy" },
    { name: "Plastic Surgery", description: "Plastic Surgery" },
  ];

  const filteredDepartments = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredDepartments}
        actions={{
          edit: (row) => alert("Edit: " + row.name),
          delete: (row) => alert("Delete: " + row.name),
        }}
      />
    </div>
  );
};

export default Departments;
