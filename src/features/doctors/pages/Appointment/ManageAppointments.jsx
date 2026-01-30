import { Icons } from "../../../../assets/Icons";
import AppointmentList from "./AppointmentList";
import Tabs from "../../../../components/Tabs/Tabs";

const tabsList = [
  {
    title: "Appointment List",
    icon: Icons.PrescriptionListIcon,
    component: AppointmentList,
  },
];

function ManageAppointments() {
  return <Tabs tabsList={tabsList} />;
}

export default ManageAppointments;
