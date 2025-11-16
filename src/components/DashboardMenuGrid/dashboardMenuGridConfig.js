import { Icons } from "../../assets/Icons";

export const dashboardMenuGridConfig = [
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
  ];
