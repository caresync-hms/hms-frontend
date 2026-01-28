import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAllInvoicesQuery } from "../../../../services/receptionistApi";

function AllInvoiceList() {
  const [search, setSearch] = useState("");

  // 🔹 RTK Query hook
  const {
    data: invoices = [],
    isLoading,
    isError,
  } = useGetAllInvoicesQuery();

  if (isLoading) return <p>Loading invoices...</p>;
  if (isError) return <p>Failed to load invoices</p>;

  // 🔍 Search filter
  const filtered = invoices.filter(
    (inv) =>
      String(inv.invoiceId ?? "").includes(search) ||
      String(inv.patientName ?? "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(inv.status ?? "")
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // 🧾 Table columns
  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "patientId", label: "Patient ID" },
    { key: "patientName", label: "Patient Name" },
    {
      key: "amount",
      label: "Amount",
      render: (row) => `₹${row.amount}`,
    },
    { key: "status", label: "Status" },
    { key: "createdDate", label: "Date" },
  ];

  return (
    <>
      <SearchBar
        placeholder="Search invoice"
        value={search}
        onChange={setSearch}
      />

      <Table columns={columns} data={filtered} />
    </>
  );
}

export default AllInvoiceList;
