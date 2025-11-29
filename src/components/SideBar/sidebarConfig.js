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
      navigateTo: "patient/doctors"
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
      navigateTo: "tabs",
    },
  ],
};
