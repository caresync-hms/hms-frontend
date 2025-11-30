import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function PatientsList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Patient Name" },
    { key: "age", label: "Age" },
    { key: "phone", label: "Phone" },
  ];

  const patients = [
    { name: "Rohan Sharma", age: 25, phone: "9876543210" },
    { name: "Neha Kapoor", age: 32, phone: "9823654780" },
    { name: "Amit Verma", age: 45, phone: "9845123698" },
  ];

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
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

export default PatientsList;
