import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import ReceptionistList from "./ReceptionistList";
import AddReceptionist from "./AddReceptionist";

function ReceptionistsPage() {
  const tabsList = [
    {
      title: "View Receptionists",
      icon: Icons.Menu,
      component: ReceptionistList,
    },
    { title: "Add Receptionist", icon: Icons.Add, component: AddReceptionist },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default ReceptionistsPage;
