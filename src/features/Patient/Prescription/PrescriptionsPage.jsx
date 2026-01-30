import { Icons } from "../../../assets/Icons";
import Tabs from "../../../components/Tabs/Tabs";
import ViewPrescription from "./ViewPrescription";

const tabsList = [
  {
    title: "Prescriptions",
    icon: Icons.PrescriptionListIcon,
    component: ViewPrescription,
  },
];

function PrescriptionsPage() {
  return <Tabs tabsList={tabsList} />;
}

export default PrescriptionsPage;
