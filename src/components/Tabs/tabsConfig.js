// tabsConfig.js
import { Icons } from "../../assets/Icons";
import Departments from "../../features/admin/pages/Departments";
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
      title: "View Patients",
      icon: Icons.Patient,
      component: DashboardMenuGrid,
    },
    {
      title: "Add Appointments",
      icon: Icons.Calendar,
      component: DashboardMenuGrid,
    },
  ],
    patient: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      component: Dashboard ,
    },
    { title: "View Appointments",
      icon: Icons.Appointments,
      navigateTo: "patient/appointments" 
    },
    {
      title: "View Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "patient/prescriptions",
    },
    { 
      title: "View Doctor", 
      icon: Icons.Doctor,  
      navigateTo: "patient/doctors" ,
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "patient/bloodbank",
    },
    {
      title: "Admit History",
      icon: Icons.History,
      navigateTo: "patient/admit-history",
    },
    {
      title: "Operation History",
      icon: Icons.History,
      navigateTo: "patient/operation-history",
    },
    {
      title: "Payment History",
      icon: Icons.Payment,
      navigateTo: "patient/payment-history",
    },
    {
      title: "Profile",
      icon: Icons.UserProfile,
      navigateTo: "patient/profile",
    },
    {
      title: "tabs",
      icon: Icons.Inventory,
      component: DashboardMenuGrid,
    },
  ],
};
