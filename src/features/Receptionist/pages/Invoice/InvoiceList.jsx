
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

function InvoiceList({ patientId, refreshTrigger, onPaymentSuccess }) {
  const [search, setSearch] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  const loadInvoices = async () => {
    if (!patientId) return;

    const res = await axios.get(
      `http://localhost:9093/receptionist/patients/${patientId}/invoices`
    );

    setInvoices(
      res.data.map((inv) => ({
        id: inv.id,
        amount: inv.totalAmount,
        status: inv.status,
        date: inv.createdDate,
      }))
    );
  };

  useEffect(() => {
    loadInvoices();
  }, [patientId, refreshTrigger]);

  const payInvoice = async (row) => {
    try {
      await axios.post("http://localhost:9093/receptionist/payments", {
        invoiceId: row.id,
        amount: row.amount,
        paymentMethod,
      });

      alert("Payment successful ✅");
      loadInvoices();
      onPaymentSuccess?.();
    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
    }
  };

  const filtered = invoices.filter(
    (i) =>
      i.id.toString().includes(search) ||
      i.status.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { key: "id", label: "Invoice ID" },
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

      {/* Payment method selector */}
      <select
        className="form-select form-select-sm mb-2"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <Table
        columns={columns}
        data={filtered}
        actions={{ pay: payInvoice }}
      />
    </>
  );
}

export default InvoiceList;




