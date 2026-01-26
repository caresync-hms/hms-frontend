import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useLazyDownloadBackupQuery } from "../../../../services/backupApi";

function BackupPage() {
  const [search, setSearch] = useState("");

  const [triggerDownload, { isFetching }] = useLazyDownloadBackupQuery();

  const columns = [{ key: "data", label: "Data" }];

  const backups = [
    { data: "patient" },
    { data: "doctor" },
    { data: "appointment" },
    // { data: "all" },
    // { data: "payment" },
    // { data: "blood_bank" },
    // { data: "report" },
    // { data: "noticeboard" },
  ];

  const filtered = backups.filter((b) =>
    b.data.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDownload = async (row) => {
    try {
      const blob = await triggerDownload(row.data).unwrap();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = url;
      a.download = `${row.data}_backup.xlsx`;
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Backup download failed", err);
    }
  };

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
          download: handleDownload,
          delete: (row) => alert(`deleting ${row.data} data...`),
        }}
        loading={isFetching}
      />
    </div>
  );
}

export default BackupPage;
