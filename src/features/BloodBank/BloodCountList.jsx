import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import { useGetBloodGroupCountQuery } from "../../services/bloodApi";

function BloodBankList() {
  const [search, setSearch] = useState("");

  const {
    data: counts = [],
    isLoading,
    isError,
  } = useGetBloodGroupCountQuery();

  const columns = [
    { key: "bloodGroup", label: "Blood Group" },
    { key: "count", label: "Total Donors" },
  ];

  const mappedCounts = counts.map((c) => ({
    bloodGroup: c.bloodGroup,
    count: c.count,
  }));

  const filtered = mappedCounts.filter(
    (c) =>
      c.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      c.count.toString().includes(search)
  );

  if (isLoading) return <p>Loading blood count...</p>;
  if (isError) return <p className="text-danger">Failed to load blood count</p>;

  return (
    <div className="container mt-4">
      <SearchBar
        placeholder="Search by blood group or count"
        value={search}
        onChange={setSearch}
      />
      <Table columns={columns} data={filtered} />
    </div>
  );
}

export default BloodBankList;
