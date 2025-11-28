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
      title: "tabs",
      icon: Icons.Inventory,
      navigateTo: "admin/tabs",
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
