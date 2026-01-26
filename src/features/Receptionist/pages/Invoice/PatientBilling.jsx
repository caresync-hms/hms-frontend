import AddInvoice from "./AddInvoice";
import InvoiceList from "./InvoiceList";
import PaymentHistory from "../ViewPayments/PaymentList";

function PatientBilling({ patient }) {
  return (
    <div className="card mt-4 p-3">
      <h5 className="text-primary">
        Billing for {patient.firstName} (Patient ID: {patient.patientId})
      </h5>

      {/* 1️⃣ Generate Invoice */}
      <AddInvoice patientId={patient.patientId} />

      <hr />

      {/* 2️⃣ View Invoices */}
      <InvoiceList patientId={patient.patientId} />

      <hr />

      {/* 3️⃣ Payment History */}
      <PaymentHistory patientId={patient.patientId} />
    </div>
  );
}

export default PatientBilling;
