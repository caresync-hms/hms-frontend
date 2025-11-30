import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import DepartmentsList from "./DepartmentsList";
import AddDepartment from "./AddDepartment";

function DepartmentsPage() {
  const tabsList = [
    { title: "View Departments", icon: Icons.Menu, component: DepartmentsList },
    {
      title: "Add Department",
      icon: Icons.Appointment,
      component: AddDepartment,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default DepartmentsPage;
