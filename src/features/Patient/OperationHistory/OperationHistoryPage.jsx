import React from "react";
import OperationHistory from "./OperationHistory";
import Tabs from "../../../components/Tabs/Tabs";
import { Icons } from "@/assets/icons";
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
