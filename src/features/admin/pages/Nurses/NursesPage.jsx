import { Icons } from "@/assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import NursesList from "./NursesList";
import AddNurse from "./AddNurse";

function NursesPage() {
  const tabsList = [
    { title: "View Nurses", icon: Icons.Menu, component: NursesList },
    { title: "Add Nurse", icon: Icons.Add, component: AddNurse },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default NursesPage;
