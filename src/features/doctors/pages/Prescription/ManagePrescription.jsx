import { Icons } from "../../../../assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AddPrescription from "./AddPrescription";
import PrescriptionList from "./PrescriptionList";

const tabsList = [
  {
    title: "Prescription List",
    icon: Icons.PrescriptionListIcon,
    component: PrescriptionList,
  },
  {
    title: "Add Prescription",
    icon: Icons.Add,
    component: AddPrescription,
  },
];

function ManagePrescription() {
  return <Tabs tabsList={tabsList} />;
}

export default ManagePrescription;
