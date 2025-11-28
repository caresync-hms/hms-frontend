// sidebarConfig.js
import { Icons } from "../../assets/Icons";

export const sidebarConfig = {
  admin: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "Department",
      icon: Icons.Hospital,
      navigateTo: "department",
    },
    { title: "Doctor", icon: Icons.Doctor, navigateTo: "doctor" },
    { title: "Patient", icon: Icons.Patient, navigateTo: "patient" },
    { title: "Nurse", icon: Icons.Nurse, navigateTo: "nurse" },
    {
      title: "Accountant",
      icon: Icons.Accountant,
      navigateTo: "accountant",
    },
    {
      title: "tabs",
      icon: Icons.Inventory,
      navigateTo: "tabs",
    },
  ],
  doctor: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "My Patients",
      icon: Icons.Patient,
      navigateTo: "patients",
    },
    {
      title: "Manage Appointments",
      icon: Icons.Appointments,
      navigateTo: "appointments",
    },
    {
      title: "Manage Prescription",
      icon: Icons. MedicalPrescription,
      navigateTo: "appointments",
    },
    {
      title: "Manage Reports",
      icon: Icons.Reports,
      navigateTo: "appointments",
    },
    {
      title: "My Profile",
      icon: Icons.DoctorProfile,
      navigateTo: "appointments",
    },
    {
      title: "tabs",
      icon: Icons.Inventory,
      navigateTo: "tabs",
    },

  ],
  patient: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    { title: "My Doctors", icon: Icons.Doctor, navigateTo: "doctors" },
    {
      title: "Appointments",
      icon: Icons.Calendar,
      navigateTo: "appointments",
    },
    { title: "Billing", icon: Icons.Accountant, navigateTo: "billing" },
  ],
};
