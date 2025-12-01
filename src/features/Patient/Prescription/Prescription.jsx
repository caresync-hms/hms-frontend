import { Icons} from "../../../assets/icons";
import Tabs from "../../../components/Tabs/Tabs";

import ViewPrescription from "./ViewPrescription";
function Prescription() {
    const tabsList = [
        {
            title: "Prescriptions",
            icon: Icons.Prescription,
            component: ViewPrescription, 
        }
    ];
  return (
    <div>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default Prescription;