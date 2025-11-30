import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function DepartmentsList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Department Name" },
    { key: "description", label: "Description" },
  ];

  const departments = [
    { name: "Cardiology", description: "Heart and vascular care" },
    { name: "Neurology", description: "Brain and spinal disorders" },
    { name: "Orthopedics", description: "Bones, joints and muscles" },
    { name: "Pediatrics", description: "Child health care" },
  ];

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => alert("Edit: " + row.name),
          delete: (row) => alert("Delete: " + row.name),
        }}
      />
    </div>
  );
}

export default DepartmentsList;
