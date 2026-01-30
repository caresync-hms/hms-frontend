import { Icons } from "@/assets/icons";

export const dashboardConfig = {
  ROLE_ADMIN: [
    {
      title: "Department",
      icon: Icons.Hospital,
      navigateTo: "/admin/department",
    },
    { title: "Doctor", icon: Icons.Doctor, navigateTo: "/admin/doctor" },
    { title: "Patient", icon: Icons.Patient, navigateTo: "/admin/patient" },
    {
      title: "Receptionist",
      icon: Icons.Accountant,
      navigateTo: "/admin/receptionist",
    },
    {
      title: "Noticeboard",
      icon: Icons.Notice,
      navigateTo: "/admin/settings/noticeboard",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/admin/monitor/blood-bank",
    },
    {
      title: "Backup",
      icon: Icons.Backup,
      navigateTo: "/admin/settings/backup",
    },
    {
      title: "Settings",
      icon: Icons.Settings,
      navigateTo: "/admin/settings/noticeboard",
    },
  ],
  ROLE_DOCTOR: [
    {
      title: "Patient",
      icon: Icons.Patient,
      navigateTo: "/doctor/patients",
    },
    {
      title: "Appointments",
      icon: Icons.Appointments,
      navigateTo: "/doctor/appointments",
    },
    {
      title: "Prescription",
      icon: Icons.Prescription,
      navigateTo: "/doctor/prescriptions",
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
      navigateTo: "/patient/appointments",
    },
    {
      title: "View Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "/patient/prescriptions",
    },
    {
      title: "View Doctor",
      icon: Icons.Doctor,
      navigateTo: "/patient/doctor",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/patient/bloodbank",
    },
    {
      title: "Payment History",
      icon: Icons.Payment,
      navigateTo: "/patient/paymentHistory",
    },
  ],
  ROLE_RECEPTIONIST: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "/dashboard",
    },
    {
      title: "Patients",
      icon: Icons.Patient,
      navigateTo: "/receptionist/manage-patients",
    },
    {
      title: "Bed Allotment",
      icon: Icons.Bed,
      navigateTo: "/receptionist/bedallotment",
    },
    {
      title: "Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "/receptionist/bloodbank",
    },

    {
      title: "Invoice ",
      icon: Icons.Invoices,
      navigateTo: "/receptionist/invoices",
    },
    {
      title: "View Payments",
      icon: Icons.Payment,
      navigateTo: "/receptionist/paymentlist",
    },
  ],
};
