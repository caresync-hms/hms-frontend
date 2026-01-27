import { Icons } from "../../assets/icons";

export const dashboardConfig = {
  ROLE_ADMIN: [
    {
      title: "Department",
      icon: Icons.Hospital,
      navigateTo: "/department",
    },
    { title: "Doctor", icon: Icons.Doctor, navigateTo: "/doctor" },
    { title: "Patient", icon: Icons.Patient, navigateTo: "/patient" },
    { title: "Nurse", icon: Icons.Nurse, navigateTo: "/nurse" },
    {
      title: "Accountant",
      icon: Icons.Accountant,
      navigateTo: "/accountant",
    },
    {
      title: "Noticeboard",
      icon: Icons.Notice,
      navigateTo: "/settings/noticeboard",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/monitor/blood-bank",
    },
    {
      title: "Backup",
      icon: Icons.Backup,
      navigateTo: "/settings/backup",
    },
    {
      title: "Settings",
      icon: Icons.Settings,
      navigateTo: "/settings/noticeboard",
    },
  ],
  ROLE_DOCTOR: [
    {
      title: "Patient",
      icon: Icons.Patient,
      navigateTo: "/patients",
    },
    {
      title: "Appointments",
      icon: Icons.Appointments,
      navigateTo: "/appointments",
    },
    {
      title: "Prescription",
      icon: Icons.Prescription,
      navigateTo: "/prescriptions",
    },
    {
      title: "Manage Reports",
      icon: Icons.Reports,
      navigateTo: "",
    },
  ],
  ROLE_PATIENT: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "/dashboard",
    },
    {
      title: "View Appointments",
      icon: Icons.Appointments,
      navigateTo: "/patient/viewappointments",
    },
    {
      title: "View Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "/patient/viewprescriptions",
    },
    {
      title: "View Doctor",
      icon: Icons.Doctor,
      navigateTo: "/patient/viewdoctor",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/patient/bloodbank",
    },
    // {
    //   title: "Admit History",
    //   icon: Icons.History,
    //   navigateTo: "/patient/admithistory",
    // },
    // {
    //   title: "Operation History",
    //   icon: Icons.History,
    //   navigateTo: "/patient/operationhistory",
    // },
    {
      title: "Payment History",
      icon: Icons.Payment,
      navigateTo: "/patient/paymenthistory",
    },
  ],
  nurse: [
    {
      title: "Patient",
      icon: Icons.Patient,
      navigateTo: "/patient/viewappointments",
    },
    {
      title: "Bed Allotment",
      icon: Icons.Bed,
      navigateTo: "/nurse/bedallotment",
    },
    {
      title: "Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/nurse/bloodbank",
    },
  ],
  accountant: [
    {
      title: "Invoice /Take Payments",
      icon: Icons.Invoices,
      navigateTo: "/accountant/invoices",
    },
    {
      title: "View Payments",
      icon: Icons.Payment,
      navigateTo: "/accountant/paymenthistory",
    },
  ],
};
