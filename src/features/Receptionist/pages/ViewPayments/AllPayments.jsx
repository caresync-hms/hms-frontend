
import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAllPaymentsQuery } from "../../../../services/receptionistApi";

function AllPayments() {
  const [search, setSearch] = useState("");
  const { data: payments = [], isLoading, isError } = useGetAllPaymentsQuery();

  if (isLoading) return <p>Loading payments...</p>;
  if (isError) return <p className="text-danger">Failed to load payments</p>;

  const filtered = payments.filter(
    (p) =>
      String(p.id).includes(search) ||
      p.patientName?.toLowerCase().includes(search.toLowerCase())
  );

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

  // ✅ DOWNLOAD RECEIPT
  const downloadReceipt = async (row) => {
    const response = await fetch(
      `http://localhost:9093/receptionist/payments/${row.paymentId}/receipt`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (!response.ok) {
      alert("Failed to download receipt");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt_${row.id}.pdf`;
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <SearchBar
        placeholder="Search payment"
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          download: downloadReceipt, //  THIS IS THE KEY
        }}
      />
    </>
  );
}

export default AllPayments;
