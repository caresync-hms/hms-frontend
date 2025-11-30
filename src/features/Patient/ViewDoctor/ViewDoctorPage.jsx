import { Icons } from "../../../assets/icons";
import Tabs from "../../../components/Tabs/Tabs";
import DoctorsList from "./DoctorsList";

function ViewDoctorPage() {
  const tabsList = [
    {
      title: "View Doctors",
      icon: Icons.Menu,
      component: DoctorsList,
    },
  ];

  return (
    <div>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default ViewDoctorPage;
