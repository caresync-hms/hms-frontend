import { Icons } from "@/assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import DepartmentsList from "./DepartmentsList";
import AddDepartment from "./AddDepartment";

function DepartmentsPage() {
  const tabsList = [
    { title: "View Departments", icon: Icons.Menu, component: DepartmentsList },
    {
      title: "Add Department",
      icon: Icons.Add,
      component: AddDepartment,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default DepartmentsPage;
