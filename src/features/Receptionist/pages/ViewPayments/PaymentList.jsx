
import { useMemo, useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetPaymentsByPatientQuery } from "../../../../services/receptionistApi";

function PaymentList({ patientId }) {
  const [search, setSearch] = useState("");

  const { data: payments = [], isLoading } =
    useGetPaymentsByPatientQuery(patientId);

  const downloadReceipt = async (paymentId) => {
    const response = await fetch(
      `http://localhost:9093/receptionist/payments/${paymentId}/receipt`
    );

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt_${paymentId}.pdf`;
    a.click();

    window.URL.revokeObjectURL(url);
  };

 
  const columns = [
    { key: "paymentId", label: "Payment ID" },
    { key: "invoiceId", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "paymentMethod", label: "Method" },
    { key: "paymentDate", label: "Date" },
    { key: "options", label: "Receipt" },
  ];

 
  const mappedPayments = useMemo(() => {
    return payments.map((p) => ({
      paymentId: p.id,                 
      invoiceId: p.invoiceId,
      amount: `₹${p.amount}`,
      paymentMethod: p.paymentMethod,
      paymentDate: p.paymentDate,
      options: (
        <button
          className="btn btn-sm btn-primary"
          onClick={() => downloadReceipt(p.id)}
        >
          View Bill
        </button>
      ),
    }));
  }, [payments]);

  const filteredPayments = useMemo(() => {
    const text = search.toLowerCase();
    return mappedPayments.filter(
      (p) =>
        String(p.invoiceId).includes(text) ||
        p.paymentMethod.toLowerCase().includes(text)
    );
  }, [search, mappedPayments]);

  if (isLoading) return <div>Loading payments...</div>;

  return (
    <div className="container mt-4">
      <SearchBar
        placeholder="Search by invoice or payment method"
        value={search}
        onChange={setSearch}
      />
      <Table columns={columns} data={filteredPayments} />
    </div>
  );
}

export default PaymentList;
