import { useState } from "react";

import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function BackupPage() {
  const [search, setSearch] = useState("");

  const columns = [{ key: "data", label: "Data" }];

  // All Appointments - Admin View
  const backups = [
    { data: "patient" },
    { data: "nurse" },
    { data: "accountant" },
    { data: "appointment" },
    { data: "payment" },
    { data: "blood_bank" },
    { data: "report" },
    { data: "noticeboard" },
    { data: "all" },
  ];

  const filtered = backups.filter((a) =>
    a.data.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search here..."
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          download: () => alert(`downloading ${row.data} data...`),
          delete: (row) => alert(`deleting ${row.data} data...`),
        }}
      />
    </div>
  );
}

export default BackupPage;
