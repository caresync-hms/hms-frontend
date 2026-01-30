import { Icons } from "../../../../../assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AccountantsList from "./AccountantsList";
import AddAccountant from "./AddAccountant";

function AccountantsPage() {
  const tabsList = [
    {
      title: "View Receptionist",
      icon: Icons.Menu,
      component: AccountantsList,
    },
    {
      title: "Add Receptionist",
      icon: Icons.Add,
      component: AddAccountant,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default AccountantsPage;
