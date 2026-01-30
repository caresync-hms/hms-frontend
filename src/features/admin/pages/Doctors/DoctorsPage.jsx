import { Icons } from "../../../../assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import DoctorsList from "./DoctorsList";
import AddDoctor from "./AddDoctor";
function DoctorsPage() {
  const tabsList = [
    {
      title: "View Doctors",
      icon: Icons.Menu,
      component: DoctorsList,
    },
    {
      title: "Add Doctor",
      icon: Icons.Add,
      component: AddDoctor,
    },
  ];

  return (
    <div>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default DoctorsPage;
