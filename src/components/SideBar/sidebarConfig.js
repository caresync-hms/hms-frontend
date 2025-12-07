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
    {
      title: "Monitor Hospital",
      icon: Icons.Hospital, // Use your actual icon here
      children: [
        {
          title: "View Appointment",
          icon: Icons.Appointments,
          navigateTo: "/monitor/view-appointments",
        },
        {
          title: "View Payment",
          icon: Icons.Payment,
          navigateTo: "/monitor/view-payment",
        },
        {
          title: "View Bed Status",
          icon: Icons.Bed,
          navigateTo: "/monitor/bed-status",
        },
        {
          title: "View Blood Bank",
          icon: Icons.BloodBank,
          navigateTo: "/monitor/blood-bank",
        },
      ],
    },

    {
      title: "Settings",
      icon: Icons.Settings,
      children: [
        {
          title: "Manage Noticeboard",
          icon: Icons.Notice,
          navigateTo: "settings/noticeboard",
        },
        {
          title: "Backup",
          icon: Icons.Backup,
          navigateTo: "settings/backup",
        },
      ],
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
      navigateTo: "patient/admithistory",
    },
    {
      title: "Operation History",
      icon: Icons.History,
      navigateTo: "patient/operationhistory",
    },
    {
      title: "Payment History",
      icon: Icons.Payment,
      navigateTo: "patient/paymenthistory",
    },
  ],
   nurse: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "Patients",
      icon: Icons.Patient,
      navigateTo: "patients",
    },
    {
      title: "Bed Allotment",
      icon: Icons.BedAllot,
      navigateTo: "bedsAllotment",
    },
    {
      title: "Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "bloodBank",
    },
    {
      title: "Manage Reports",
      icon: Icons.Reports,
      navigateTo: "appointments",
    },
    {
      title: "My Profile",
      icon: Icons.Nurse,
      navigateTo: "appointments",
    },
    {
      title: "tabs",
      icon: Icons.Inventory,
      navigateTo: "tabs",
    },
  ],
};
