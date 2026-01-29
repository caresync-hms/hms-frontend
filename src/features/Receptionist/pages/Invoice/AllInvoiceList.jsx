
import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import Modal from "../../../../components/Modal/Modal";

import PayInvoiceModal from "./PayInvoiceModal";
import {
  useGetAllInvoicesQuery,
  useUpdateInvoiceStatusMutation,
  useMakePaymentMutation,
} from "../../../../services/receptionistApi";

function AllInvoiceList() {
  const [search, setSearch] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  const { data: invoices = [], isLoading, isError } =
    useGetAllInvoicesQuery();

  const [makePayment] = useMakePaymentMutation();
  const [updateInvoiceStatus] = useUpdateInvoiceStatusMutation();

  if (isLoading) return <div className="container mt-4">Loading invoices…</div>;
  if (isError) return <div className="container mt-4 text-danger">Failed to load invoices</div>;

  const filteredInvoices = invoices.filter((inv) =>
    `${inv.invoiceId} ${inv.patientName} ${inv.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "patientId", label: "Patient ID" },
    { key: "patientName", label: "Patient Name" },
    {
      key: "amount",
      label: "Amount",
      render: (row) => `₹${row.amount}`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span className={`badge ${row.status === "PAID" ? "bg-success" : "bg-warning text-dark"}`}>
          {row.status}
        </span>
      ),
    },
    { key: "createdDate", label: "Date" },
  ];

  // 💳 PAYMENT
  const handlePayment = async () => {
    try {
      await makePayment({
        invoiceId: selectedInvoice.invoiceId,
         patientId: selectedInvoice.patientId,
        amount: selectedInvoice.amount,
        method: paymentMethod.toUpperCase(),
      }).unwrap();

      await updateInvoiceStatus({
        invoiceId: selectedInvoice.invoiceId,
        status: "PAID",
      }).unwrap();

      alert("Payment successful ✅");
      setSelectedInvoice(null);
    } catch (err) {
      alert(err?.data?.message || "Payment failed");
    }
  };

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />
<Table
  columns={columns}
  data={filteredInvoices}
  actions={{
    custom: {
      label: "Pay Bill",
      className: "btn btn-success btn-sm",
      handler: (row) => {
        if (row.status === "PAID") return;
        setSelectedInvoice(row);
      },
    },
  }}
/>

      {/* PAYMENT MODAL */}
      {selectedInvoice && (
  <Modal
    title={`Pay Invoice #${selectedInvoice.invoiceId}`}
    onClose={() => setSelectedInvoice(null)}
  >
    <PayInvoiceModal
      invoice={selectedInvoice}
      onClose={() => setSelectedInvoice(null)}
    />
  </Modal>
)}
    </div>
  );
}

export default AllInvoiceList;
