

import { Icons } from "../../../../assets/icons";
import InvoiceList from "./InvoiceList";
import AddInvoice from "./AddInvoice";
import PaymentHistory from "../ViewPayments/PaymentList";
import Tabs from "../../../../components/Tabs/Tabs";
import { useState } from "react";

function ManageInvoice({ patientId }) {
  const [refresh, setRefresh] = useState(false);

  if (!patientId) return <p>Select a patient first</p>;

  const tabsList = [
 
    {
      title: "Invoices",
      icon: Icons.PrescriptionListIcon,
      component: () => (
        <InvoiceList
          patientId={patientId}
          refreshTrigger={refresh}
        />
      ),
    },
    {
      title: "Add Invoice",
      icon: Icons.Add,
      component: () => (
        <AddInvoice
          patientId={patientId}
          onSuccess={() => setRefresh(!refresh)}
        />
      ),
    },
    {
      title: "Payment History",
      icon: Icons.Cash,
      component: () => (
        <PaymentHistory patientId={patientId} />
      ),
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default ManageInvoice;

