import { Icons } from "../../assets/icons";

export const dashboardConfig = {
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
      title: "Patient",
      icon: Icons.Patient,
      navigateTo: "doctor/dashboard",
    },
    {
      title: "Appointments",
      icon: Icons.Appointments,
      navigateTo: "doctor/patients",
    },
    {
      title: "Prescription",
      icon: Icons.Prescription,
      navigateTo: "doctor/appointments",
    },
    {
      title: "Manage Reports",
      icon: Icons.Reports,
      navigateTo: "doctor/appointments",
    },
  ],
  patient: [
    {
      title: "View Appointments",
      icon: Icons.Appointments,
      navigateTo: "patient/appointments",
    },
    {
      title: "View Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "patient/prescriptions",
    },
    {
      title: "View Doctor",
      icon: Icons.Doctor,
      navigateTo: "/doctor",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/bloodbank",
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
  ],
};
