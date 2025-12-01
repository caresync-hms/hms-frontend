import { Icons } from "../../../assets/icons";
import Tabs from "../../../components/Tabs/Tabs";
import AdmitHistoryPage from "./AdmitHistory";

const tabsList = [
  {
    title: "Admit History",
    icon: Icons.History,
    component: AdmitHistoryPage,
  },
 
];

function AdmitHistoryPage() {
  return <Tabs tabsList={tabsList} />;
}

export default AdmitHistoryPage;
