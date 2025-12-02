import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import bloodDonorConfig from "./bloodDonorConfig";

function BloodBankDonorList() {
  const [search, setSearch] = useState("");

  const columns = bloodDonorConfig.columns || [];
  const data = bloodDonorConfig.data || [];

  const filteredData = data.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      d.gender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by name, blood group or gender"
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filteredData}
        actions={{
          view: (row) =>
            alert(
              `Name: ${row.name}
Age: ${row.age}
Gender: ${row.gender}
Blood Group: ${row.bloodGroup}
Last Donation: ${row.lastDonationDate}`
            ),
        }}
      />
    </div>
  );
}

export default BloodBankDonorList;
