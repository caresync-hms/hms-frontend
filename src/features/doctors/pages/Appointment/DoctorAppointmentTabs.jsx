import Tabs from "../../../../components/Tabs/Tabs";
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";

function DoctorAppointmentTabs() {
  return (
    <Tabs
      tabs={[
        { label: "Appointment List", content: <AppointmentList /> },
        { label: "Add Appointment", content: <AddAppointment /> },
      ]}
      defaultTab="Appointment List"
    />
  );
}

export default DoctorAppointmentTabs;
