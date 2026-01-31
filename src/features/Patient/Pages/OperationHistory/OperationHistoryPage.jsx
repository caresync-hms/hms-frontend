import React from "react";
import { Icons } from "@/assets/icons";
import OperationHistory from "./OperationHistory";
import Tabs from "../../../../components/Tabs/Tabs";
function OperationHistoryPage() {
  const tabsList = [
    {
      title: "Operation History",
      icon: Icons.PrescriptionListIcon,
      component: OperationHistory,
    },
  ];
  return <Tabs tabsList={tabsList} />;
}

export default OperationHistoryPage;
