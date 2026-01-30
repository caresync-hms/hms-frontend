import { Icons } from "../../../../../assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import PatientsList from "./PatientsList";
import AddPatient from "./AddPatient";

function PatientsPage() {
  const tabsList = [
    { title: "View Patients", icon: Icons.Menu, component: PatientsList },
    { title: "Add Patient", icon: Icons.Add, component: AddPatient },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default PatientsPage;
