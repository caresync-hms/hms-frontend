// sidebarConfig.js
import { Icons } from "../../assets/Icons";

export const sidebarConfig = {
  admin: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "admin/dashboard",
    },
    {
      title: "Department",
      icon: Icons.Hospital,
      navigateTo: "admin/department",
    },
    { title: "Doctor", icon: Icons.Doctor, navigateTo: "admin/doctor" },
    { title: "Patient", icon: Icons.Patient, navigateTo: "admin/patient" },
    { title: "Nurse", icon: Icons.Nurse, navigateTo: "admin/nurse" },
    {
      title: "Accountant",
      icon: Icons.Accountant,
      navigateTo: "admin/accountant",
    },
    {
      title: "menugrid",
      icon: Icons.Home,
      navigateTo: "admin/menugrid",
    },
    {
      title: "Noticeboard",
      icon: Icons.Notice,
      navigateTo: "admin/notice",
    },
    {
      title: "tabs",
      icon: Icons.Inventory,
      navigateTo: "admin/tabs",
    },
  ],
  doctor: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "doctor/dashboard",
    },
    {
      title: "My Patients",
      icon: Icons.Patient,
      navigateTo: "doctor/patients",
    },
    {
      title: "Appointments",
      icon: Icons.Calendar,
      navigateTo: "doctor/appointments",
    },
  ],
  patient: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "patient/dashboard",
    },
    { title: "My Doctors", icon: Icons.Doctor, navigateTo: "patient/doctors" },
    {
      title: "Appointments",
      icon: Icons.Calendar,
      navigateTo: "patient/appointments",
    },
    { title: "Billing", icon: Icons.Accountant, navigateTo: "patient/billing" },
  ],
};
