import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function NoticeBoardList() {
  const [search, setSearch] = useState("");

  // const [doctors, setDoctors] = useState([]);

  //   const handleAddDoctor = (doc) => {
  //     setDoctors([...doctors, doc]);
  //   };

  const columns = [
    { key: "title", label: "Title" },
    { key: "notice", label: "Notice" },
    { key: "date", label: "Date" },
  ];

  const notices = [
    {
      id: 1,
      title: "Testing HMS - CI",
      date: "20 Apr",
      notice: "This is a sample notice for Testing HMS - CI.",
    },
    {
      id: 2,
      title: "Demo Notice Two",
      date: "01 Apr",
      notice: "This is a sample notice for Demo Notice Two.",
    },
    {
      id: 3,
      title: "Demo Notice One",
      date: "15 Apr",
      notice: "This is a sample notice for Demo Notice One.",
    },
  ];

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredNotices}
        actions={{
          edit: (row) => alert("Edit: " + row.name),
          delete: (row) => alert("Delete: " + row.name),
        }}
      />
    </div>
  );
}

export default NoticeBoardList;
