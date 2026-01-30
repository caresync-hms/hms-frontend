import { Icons } from "../../../assets/Icons";
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";
import Tabs from "../../../components/Tabs/Tabs";

const tabsList = [
  {
    title: "Appointment List",
    icon: Icons.PrescriptionListIcon,
    component: AppointmentList,
  },
  {
    title: "Add Appointment",
    icon: Icons.Add,
    component: AddAppointment,
  },
];

function ManageAppointments() {
  return <Tabs tabsList={tabsList} />;
}

export default ManageAppointments;
