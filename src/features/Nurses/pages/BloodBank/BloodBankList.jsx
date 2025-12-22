import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function BloodBank() {
  const [search, setSearch] = useState("");

  const columns = [
 
    { key: "bloodGroup", label: "Blood Groups" },
    { key: "units", label: "Units" },
  ];

  const groupList = [
    {
     
      bloodGroup: "A+",
      units: "55",
    },
    {
    
      bloodGroup: "A-",
      units: "40",
    },
    {
    
      bloodGroup: "B+",
      units: "35",
    },
    {
     
      bloodGroup: "B-",
      units: "55",
    },
    {
    
      bloodGroup: "O+",
      units: "40",
    },
    {
    
      bloodGroup: "O-",
      units: "35",
    },
    {
     
      bloodGroup: "AB+",
      units: "55",
    },
    {
    
      bloodGroup: "AB-",
      units: "40",
    },
   

  ];

  const filtered = groupList.filter((a) =>
    a.bloodGroup.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => alert("Edit Appointment for " + row.bloodGroup),
          delete: (row) => alert("Cancel Appointment for " + row.bloodGroup),
        }}
      />
    </div>
  );
}

export default BloodBank ;

