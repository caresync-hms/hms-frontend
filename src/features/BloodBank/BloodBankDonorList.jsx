import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import { useGetAllDonorsQuery } from "../../services/bloodApi";

function BloodBankDonorList() {
  const [search, setSearch] = useState("");

  const {
    data: donors = [],
    isLoading,
    isError,
  } = useGetAllDonorsQuery();


  const columns = [
    { key: "donorId", label: "ID" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "bloodGroup", label: "Blood Group" },
    { key: "city", label: "City" },
    { key: "createdAt", label: "Created At" },
  ];

 
  const mappedDonors = donors.map((d) => ({
    donorId: d.donorId,
    name: d.name,
    phone: d.phone,
    bloodGroup: d.bloodGroup,
    city: d.city,
    createdAt: new Date(d.createdAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  }));

  const filtered = mappedDonors.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      d.city.toLowerCase().includes(search.toLowerCase()) ||
      d.phone.includes(search)
  );

  if (isLoading) return <p>Loading donors...</p>;
  if (isError)
    return <p className="text-danger">Failed to load donors</p>;

  return (
    <div className="container mt-4">
      <SearchBar
        placeholder="Search by name, blood group, city or phone"
        value={search}
        onChange={setSearch}
      />

      <Table columns={columns} data={filtered} />
    </div>
  );
}

export default BloodBankDonorList;
