import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import {
  useGetPaymentsByPatientIdQuery,
  useGetPatientByUserIdQuery,
} from "../../../services/patientsApi";

function PaymentHistory() {
  const [search, setSearch] = useState("");

  const storedId = localStorage.getItem("id");
  const userId = storedId ? Number(storedId) : null;

  const { data: patient } = useGetPatientByUserIdQuery(userId, {
    skip: !userId,
  });

  const patientId = patient?.patientId;

  const {
    data: payments = [],
    isLoading,
    isError,
    error,
  } = useGetPaymentsByPatientIdQuery(patientId, {
    skip: !patientId,
  });

  const downloadReceipt = async (paymentId) => {
    const response = await fetch(
      `http://localhost:9093/patient/payments/${paymentId}/receipt`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
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
    { key: "invoiceId", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "method", label: "Method" },
    { key: "date", label: "Date" },
    { key: "options", label: "Receipt" },
  ];

  const mappedPayments = useMemo(() => {
    return payments.map((p) => ({
      invoiceId: p.invoiceId,
      amount: `₹${p.amount}`,
      method: p.method,
      date: p.date,
      options: (
        <button
          className="btn btn-sm btn-primary"
          onClick={() => downloadReceipt(p.paymentId)}
        >
          Download
        </button>
      ),
    }));
  }, [payments]);

  const filteredPayments = useMemo(() => {
    const text = search.toLowerCase();
    return mappedPayments.filter(
      (p) =>
        String(p.invoiceId).includes(text) ||
        p.method.toLowerCase().includes(text)
    );
  }, [search, mappedPayments]);

  if (!userId) return <div>User not logged in</div>;
  if (!patientId) return <div>Loading patient...</div>;
  if (isLoading) return <div>Loading payments...</div>;
  if (isError)
    return (
      <div className="text-danger">
        {error?.data?.message || "Unable to fetch payments"}
      </div>
    );

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

export default PaymentHistory;
