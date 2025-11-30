import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AccountantsList from "./AccountantsList";
import AddAccountant from "./AddAccountant";

function AccountantsPage() {
  const tabsList = [
    { title: "View Accountants", icon: Icons.Menu, component: AccountantsList },
    {
      title: "Add Accountant",
      icon: Icons.Appointment,
      component: AddAccountant,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default AccountantsPage;
