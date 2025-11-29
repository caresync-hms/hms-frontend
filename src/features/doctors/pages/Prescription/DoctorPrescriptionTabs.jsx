import Tabs from "../../../../components/Tabs/Tabs";
import PrescriptionList from "./PrescriptionList";
import AddPrescription from "./AddPrescription";

function DoctorPrescriptionTabs() {
  return (
    <Tabs
      tabs={[
        { label: "Prescription List", content: <PrescriptionList /> },
        { label: "Add Prescription", content: <AddPrescription /> },
      ]}
      defaultTab="Prescription List"
    />
  );
}

export default DoctorPrescriptionTabs;
