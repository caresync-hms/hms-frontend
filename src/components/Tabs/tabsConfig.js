// tabsConfig.js
import { Icons } from "../../assets/Icons";
import Login from "../../features/auth/pages/Login/Login";
import DashboardMenuGrid from "../../features/Dashboard/components/DashboardMenuGrid/DashboardMenuGrid";
import NoticeBoard from "../../features/Dashboard/components/NoticeBoard/NoticeBoard";
import Dashboard from "../../features/Dashboard/pages/Dashboard";

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
      component: Login,
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
      title: "Dashboard",
      icon: Icons.Dashboard,
      component: DashboardMenuGrid,
    },
    {
      title: "My Patients",
      icon: Icons.Patient,
      component: DashboardMenuGrid,
    },
    {
      title: "Appointments",
      icon: Icons.Calendar,
      component: DashboardMenuGrid,
    },
  ],
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
