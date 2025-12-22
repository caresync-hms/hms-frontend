import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function AccountantsList() {
  const [search, setSearch] = useState("");

  const columns = [
    { key: "name", label: "Accountant Name" },
    { key: "email", label: "Email" },
    { key: "salary", label: "Salary" },
  ];

  const accountants = [
    { name: "Arun Kumar", email: "arunk@example.com", salary: "₹50,000" },
    { name: "Nisha Pandey", email: "nisha.p@example.com", salary: "₹45,000" },
    {
      name: "Sandeep Rao",
      email: "sandeep.rao@example.com",
      salary: "₹55,000",
    },
  ];

  const filtered = accountants.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
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

export default AccountantsList;
