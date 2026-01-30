import { Icons } from "@/assets/Icons";
import Tabs from "../../../../components/Tabs/Tabs";
import ViewAppointments from "../../../admin/pages/Appointments/ViewAppointments";
import AddAppointment from "./AddAppointment";

const tabsList = [
  {
    title: "View Appointments",
    icon: Icons.Menu,
    component: ViewAppointments,
  },
  {
    title: "Add Appointment",
    icon: Icons.Add,
    component: AddAppointment,
  },
];

function ManageAppointment() {
  return <Tabs tabsList={tabsList} />;
}

export default ManageAppointment;
