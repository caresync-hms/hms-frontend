import { useGetPaymentsByPatientQuery } from "../../../../services/receptionistApi";
import Table from "../../../../components/Table/Table";

function PaymentList({ patientId }) {
  const { data: payments = [] } =
    useGetPaymentsByPatientQuery(patientId);

  const columns = [
    { key: "id", label: "Payment ID" },
    { key: "invoiceId", label: "Invoice ID" },
    { key: "amount", label: "Amount" },
    { key: "paymentMethod", label: "Method" },
    { key: "paymentDate", label: "Date" },
  ];

  return <Table columns={columns} data={payments} />;
}

export default PaymentList;


