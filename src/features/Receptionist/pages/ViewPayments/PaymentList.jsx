
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../../components/Table/Table";

function PaymentList({ patientId }) {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (!patientId) return;

    axios
      .get(
        `http://localhost:9093/receptionist/patients/${patientId}/payments`
      )
      .then((res) => {
        setPayments(
          res.data.map((p) => ({
            id: p.id,
            invoiceId: p.invoice?.id,
            amount: `₹${p.amount}`,
            method: p.paymentMethod,
            date: p.paymentDate,
          }))
        );
      })
      .catch(console.error);
  }, [patientId]);

  const columns = [
    { key: "id", label: "Payment ID" },
    { key: "invoiceId", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "method", label: "Method" },
    { key: "date", label: "Date" },
  ];

  return <Table columns={columns} data={payments} />;
}

export default PaymentList;

