import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAllPaymentsQuery } from "../../../../services/receptionistApi";

function AllPayments() {
  const [search, setSearch] = useState("");

  // 🔹 RTK Query hook
  const { data: payments = [], isLoading, isError } = useGetAllPaymentsQuery();

  if (isLoading) return <p>Loading payments...</p>;
  if (isError) return <p className="text-danger">Failed to load payments</p>;

  // 🔍 Search filter
  const filtered = payments.filter(
    (p) =>
      String(p.paymentId ?? "").includes(search) ||
      String(p.patientName ?? "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(p.method ?? "")
        .toLowerCase()
        .includes(search.toLowerCase()),
  );

  // 🧾 Table columns
  const columns = [
    { key: "paymentId", label: "Payment ID" },
    { key: "invoiceId", label: "Invoice ID" },
    { key: "patientId", label: "Patient ID" },
    { key: "patientName", label: "Patient Name" },
    {
      key: "amount",
      label: "Amount",
      render: (row) => `₹${row.amount}`,
    },
    { key: "method", label: "Method" },
    { key: "date", label: "Date" },
  ];

  return (
    <>
      <SearchBar
        placeholder="Search payment"
        value={search}
        onChange={setSearch}
      />

      <Table columns={columns} data={filtered} />
    </>
  );
}

export default AllPayments;
