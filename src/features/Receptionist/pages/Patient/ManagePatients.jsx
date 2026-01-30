import { Icons } from "@/assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AddPatient from "../../../admin/pages/Patients/AddPatient";
import PatientList from "./PatientList";

const tabsList = [
  {
    title: "View Patients",
    icon: Icons.Menu,
    component: PatientList,
  },
  {
    title: "Add Patient",
    icon: Icons.Add,
    component: AddPatient,
  },
];

function ManagePatients() {
  return <Tabs tabsList={tabsList} />;
}

export default ManagePatients;
