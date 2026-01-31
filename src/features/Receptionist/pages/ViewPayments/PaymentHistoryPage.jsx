import { useState } from "react";
import { Icons } from "@/assets/icons";
import Tabs from "../../../components/Tabs/Tabs";
import PaymentHistory from "./PaymentList";
import PatientSelector from "../../../components/PatientSelector";

function PaymentHistoryPage() {
  const [patientId, setPatientId] = useState(null);

  const tabsList = [
    {
      title: "Payment History",
      icon: Icons.PrescriptionListIcon,
      component: () => (
        <>
          {/* 🔹 Select Patient */}
          <PatientSelector onSelect={setPatientId} />

          {/* 🔹 Show payments only after patient selected */}
          {patientId && <PaymentHistory patientId={patientId} />}
        </>
      ),
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default PaymentHistoryPage;
