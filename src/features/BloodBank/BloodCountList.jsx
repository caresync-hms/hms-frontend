import Table from "../../components/Table/Table";
import bloodBankConfig from "./bloodBankConfig";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

function BloodBankList() {
  const [search, setSearch] = useState("");

  const columns = bloodBankConfig.columns|| [];
  const data = bloodBankConfig.data|| [];

 const filtered = data.filter(
  (a) =>
    a.bloodGroup
      ?.toLowerCase()
      .includes(search.trim().toLowerCase())
);


  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by blood group"
        value={search}
        onChange={setSearch}
      />

        <Table columns={columns} 
        data={filtered} />
      
    </div>
  );
}

export default BloodBankList;
