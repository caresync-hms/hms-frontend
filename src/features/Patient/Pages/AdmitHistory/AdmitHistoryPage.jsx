import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AdmitHistory from "./AdmitHistory";

const tabsList = [
  {
    title: "Admit History",
    icon: Icons.PrescriptionListIcon,
    component: AdmitHistory,
  },
];


function AdmitHistoryPage() {
  return <Tabs tabsList={tabsList} />;
}

export default AdmitHistoryPage;
