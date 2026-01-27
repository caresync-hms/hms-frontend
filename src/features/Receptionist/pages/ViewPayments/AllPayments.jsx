import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function AllPayments() {
  const [payments, setPayments] = useState([]);
    const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:9093/receptionist/payments")
      .then((res) => {
        setPayments(
          res.data.map((p) => ({
            paymentId: p.paymentId,
            invoiceId: p.invoiceId,
            patientId: p.patientId,
              patientName: p.patientName,
            amount: `₹${p.amount}`,
            method: p.method,
            date: p.date,
          }))
        );
      })
      .catch(console.error);
  }, []);

const filtered = payments.filter(
    (p) =>
      String(p.paymentId).includes(search) ||
      String(p.patientName).toLowerCase().includes(search.toLowerCase()) ||
      String(p.method).toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { key: "paymentId", label: "Payment ID" },
    { key: "invoiceId", label: "Invoice ID" },
    { key: "patientId", label: "Patient ID" },
      { key: "patientName", label: "Patient Name" },
    { key: "amount", label: "Amount" },
    { key: "method", label: "Method" },
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

export default AllPayments;
