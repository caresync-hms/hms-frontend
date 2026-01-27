import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function AllInvoiceList() {
  const [search, setSearch] = useState("");
  const [invoices, setInvoices] = useState([]);

  const loadInvoices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9093/receptionist/invoices"
      );

      setInvoices(
        res.data.map((inv) => ({
          id: inv.invoiceId,
          patientId: inv.patientId,
          patientName: inv.patientName,
          amount: `₹${inv.amount}`,
          status: inv.status,
          date: inv.createdDate,
        }))
      );
    } catch (err) {
      console.error("Failed to load invoices", err);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const filtered = invoices.filter(
    (i) =>
    String(i.id ?? "").includes(search) ||
       String(i.patientName ?? "").toLowerCase().includes(search.toLowerCase()) ||
     String(i.status ?? "").toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { key: "id", label: "Invoice ID" },
    { key: "patientId", label: "Patient ID" },
    { key: "patientName", label: "Patient Name" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
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
