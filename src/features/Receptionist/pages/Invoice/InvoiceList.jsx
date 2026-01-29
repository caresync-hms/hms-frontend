import { useState } from "react";
import {
  useGetInvoicesByPatientQuery,
  useMakePaymentMutation,
} from "../../../../services/receptionistApi";
import Table from "../../../../components/Table/Table";

function InvoiceList({ patientId }) {
  const { data: invoices = [] } =
    useGetInvoicesByPatientQuery(patientId);

  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [payInvoice] = useMakePaymentMutation();

  const pay = async (row) => {
    await payInvoice({
      invoiceId: row.id,
      amount: row.amount,
      paymentMethod,
    }).unwrap();

    alert("Payment successful ✅");
  };

  const columns = [
    { key: "id", label: "Invoice ID" },
    { key: "totalAmount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "createdDate", label: "Date" },
  ];

  return (
    <>
      <select
        className="form-select mb-2"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <Table
        columns={columns}
        data={invoices}
        actions={{ pay }}
      />
    </>
  );
}

export default InvoiceList;




