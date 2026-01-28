import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import {
  useGetPaymentsByPatientIdQuery,
  useGetPatientByUserIdQuery,
} from "../../../services/patientsApi";
import { useGetInvoicesByPatientQuery } from "../../../services/receptionistApi";

function PaymentHistory() {
  const [search, setSearch] = useState("");

  const storedId = localStorage.getItem("id");
  const userId = storedId ? Number(storedId) : null;

  const { data: patient } = useGetPatientByUserIdQuery(userId, {
    skip: !userId,
  });

  const patientId = patient?.patientId;

  const { data: payments = [], isLoading: loadingPayments } =
    useGetPaymentsByPatientIdQuery(patientId, {
      skip: !patientId,
    });

  const { data: invoices = [], isLoading: loadingInvoices } =
    useGetInvoicesByPatientQuery(patientId, {
      skip: !patientId,
    });

  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "method", label: "Method" },
    { key: "date", label: "Date" },
  ];

  const combinedData = useMemo(() => {
    const paid = payments.map((p) => ({
      invoiceId: p.invoiceId,
      amount: `₹${p.amount}`,
      status: "PAID",
      method: p.method,
      date: p.date,
    }));

    const unpaid = invoices
      .filter((i) => i.status === "PENDING")
      .map((i) => ({
        invoiceId: i.invoiceId,
        amount: `₹${i.totalAmount}`,
        status: "UNPAID",
        method: "-",
        date: "-",
      }));

    return [...paid, ...unpaid];
  }, [payments, invoices]);

  const filteredData = useMemo(() => {
    const text = search.toLowerCase();
    return combinedData.filter(
      (r) =>
        String(r.invoiceId).includes(text) ||
        r.status.toLowerCase().includes(text)
    );
  }, [search, combinedData]);

  if (!userId) return <div>User not logged in</div>;
  if (!patientId) return <div>Loading patient...</div>;
  if (loadingPayments || loadingInvoices)
    return <div>Loading data...</div>;

  return (
    <div className="container mt-4">
      <SearchBar
        placeholder="Search by invoice id or status"
        value={search}
        onChange={setSearch}
      />

      {filteredData.length === 0 ? (
        <div className="text-muted mt-3">No records found</div>
      ) : (
        <Table columns={columns} data={filteredData} />
      )}
    </div>
  );
}

export default PaymentHistory;
