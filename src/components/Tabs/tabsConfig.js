// tabsConfig.js
import { Icons } from "../../assets/Icons";
import Departments from "../../features/admin/pages/Departments";
import Login from "../../features/auth/pages/Login/Login";
import DashboardMenuGrid from "../../features/Dashboard/components/DashboardMenuGrid/DashboardMenuGrid";
import NoticeBoard from "../../features/Dashboard/components/NoticeBoard/NoticeBoard";
import Dashboard from "../../features/Dashboard/pages/Dashboard";
import AddPrescription from "../../features/doctors/pages/Prescription/AddPrescription";
import PrescriptionList from "../../features/doctors/pages/Prescription/PrescriptionList";
import AddAppointment from "../../features/doctors/pages/Appointment/AddAppointment";
import AppointmentList from "../../features/doctors/pages/Appointment/AppointmentList";


import PatientRegister from "./../../features/auth/pages/Register/Register";

export const tabsConfig = {
  admin: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      component: Dashboard,
    },
    {
      title: "Department",
      icon: Icons.Hospital,
      component: Departments,
    },
    {
      title: "Doctor",
      icon: Icons.Doctor,
      component: PatientRegister,
    },
    {
      title: "Patient",
      icon: Icons.Patient,
      component: NoticeBoard,
    },
    {
      title: "Nurse",
      icon: Icons.Nurse,
      component: DashboardMenuGrid,
    },
    {
      title: "Accountant",
      icon: Icons.Accountant,
      component: DashboardMenuGrid,
    },
    {
      title: "Noticeboard",
      icon: Icons.Notice,
      component: DashboardMenuGrid,
    },
  ],
  doctor: [
    {
      title: "Prescription List",
      icon: Icons.PrescriptionListIcon,
      component: PrescriptionList,
    },
    {
      title: "Add Prescription",
      icon: Icons.AddPrescriptionIcon,
      component: AddPrescription,
    },
    {
      title: "Appointment List",
      icon : Icons.PrescriptionListIcon,
      component: AppointmentList
    },
    {
      title:"Add Appointment",
      icon: Icons.AddPrescriptionIcon,
      component: AddAppointment
    }
  ],

// doctor: [
//   {
//     title: "My Prescriptions",
//     icon: Icons.PrescriptionListIcon,
//     subTabs: [
//       { label: "Prescription List", component: PrescriptionList },
//       { label: "Add Prescription", component: AddPrescription },
//     ],
//   },
//   {
//     title: "My Appointments",
//     icon: Icons.Calendar,
//     subTabs: [
//       { label: "Appointment List", component: AppointmentList },
//       { label: "Add Appointment", component: AddAppointment },
//     ],
//   },
// ],


  patient: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      component: DashboardMenuGrid,
    },
    {
      title: "My Doctors",
      icon: Icons.Doctor,
      component: DashboardMenuGrid,
    },
    {
      title: "Appointments",
      icon: Icons.Calendar,
      component: DashboardMenuGrid,
    },
    {
      title: "Billing",
      icon: Icons.Accountant,
      component: DashboardMenuGrid,
    },
  ],
};
