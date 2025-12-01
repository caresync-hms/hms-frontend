// sidebarConfig.js
import { Icons } from "../../assets/icons";

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
      icon: Icons.MedicalPrescription,
      navigateTo: "prescriptions",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBankIcon,
      navigateTo: "ViewBloodBank",
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
      navigateTo: "dashboard",
    },
    {
      title: "View Appointments",
      icon: Icons.Appointments,
      navigateTo: "patient/viewappointments",
    },
    {
      title: "View Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "patient/viewprescriptions",
    },
    {
      title: "View Doctor",
      icon: Icons.Doctor,
      navigateTo: "patient/viewdoctor",
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
