

import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import CreatePatient from "./CreatePatient";
import PatientList from "./PatientList";

const tabsList = [
  {
    title: "Create Patient",
    icon: Icons.Add,
    component: CreatePatient,
  },
  {
    title: "Manage Billing",
    icon: Icons.Invoice,
    component: PatientList, // THIS is where patient selection happens
  },
];

function ManagePatients() {
  return <Tabs tabsList={tabsList} />;
}

export default ManagePatients;


