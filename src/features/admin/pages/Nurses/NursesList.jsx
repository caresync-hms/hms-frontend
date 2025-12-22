import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function NursesList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Nurse Name" },
    { key: "shift", label: "Shift" },
    { key: "ward", label: "Assigned Ward" },
  ];

  const nurses = [
    { name: "Anita Desai", shift: "Morning", ward: "Ward 3" },
    { name: "Ritika Sen", shift: "Night", ward: "Ward 1" },
    { name: "Meera Patil", shift: "Evening", ward: "Ward 5" },
    { name: "Simran Kaur", shift: "Morning", ward: "Ward 2" },
  ];

  const filteredNurses = nurses.filter((n) =>
    n.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredNurses}
        actions={{
          edit: (row) => alert("Edit: " + row.name),
          delete: (row) => alert("Delete: " + row.name),
        }}
      />
    </div>
  );
}

export default NursesList;
