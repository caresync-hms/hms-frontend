// sidebarConfig.js
import { Icons } from "../../assets/icons";

export const sidebarConfig = {
  ROLE_ADMIN: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "Department",
      icon: Icons.Hospital,
      navigateTo: "admin/department",
    },
    { title: "Doctor", icon: Icons.Doctor, navigateTo: "admin/doctor" },
    { title: "Patient", icon: Icons.Patient, navigateTo: "admin/patient" },
    // { title: "Nurse", icon: Icons.Nurse, navigateTo: "admin/nurse" },
    {
      title: "Receptionist",
      icon: Icons.Accountant,
      navigateTo: "admin/receptionist",
    },
    {
      title: "Monitor Hospital",
      icon: Icons.Hospital, // Use your actual icon here
      children: [
        {
          title: "View Appointments",
          icon: Icons.Appointments,
          navigateTo: "admin/monitor/view-appointments",
        },
        {
          title: "View Payments",
          icon: Icons.Payment,
          navigateTo: "admin/monitor/view-payment",
        },
        // {
        //   title: "View Bed Status",
        //   icon: Icons.Bed,
        //   navigateTo: "admin/monitor/bed-status",
        // },
        {
          title: "View Blood Bank",
          icon: Icons.BloodBank,
          navigateTo: "admin/monitor/blood-bank",
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
          navigateTo: "admin/settings/noticeboard",
        },
        {
          title: "Backup",
          icon: Icons.Backup,
          navigateTo: "admin/settings/backup",
        },
      ],
    },
  ],
  ROLE_DOCTOR: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "My Patients",
      icon: Icons.Patient,
      navigateTo: "doctor/patients",
    },
    {
      title: "Manage Appointments",
      icon: Icons.Appointments,
      navigateTo: "doctor/appointments",
    },
    {
      title: "Manage Prescription",
      icon: Icons.MedicalPrescription,
      navigateTo: "doctor/prescriptions",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBankIcon,
      navigateTo: "doctor/viewBloodBank",
    },
  ],

  ROLE_PATIENT: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
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
      navigateTo: "patient/doctor",
    },
    {
      title: "View Blood Bank",
      icon: Icons.BloodBankIcon,
      navigateTo: "patient/bloodBank",
    },
    // {
    //   title: "Admit History",
    //   icon: Icons.History,
    //   navigateTo: "patient/admitHistory",
    // },
    // {
    //   title: "Operation History",
    //   icon: Icons.History,
    //   navigateTo: "patient/operationHistory",
    // },
    {
      title: "Payment History",
      icon: Icons.Payment,
      navigateTo: "patient/paymentHistory",
    },
  ],

  ROLE_RECEPTIONIST: [
    {
      title: "Dashboard",
      icon: Icons.Dashboard,
      navigateTo: "dashboard",
    },
    {
      title: "Patients",
      icon: Icons.Patient,
      navigateTo: "receptionist/manage-patients",
    },
    {
      title: "Appointments",
      icon: Icons.Appointments,
      navigateTo: "receptionist/appointments",
    },

    {
      title: "Bed Allotment",
      icon: Icons.Bed,
      navigateTo: "receptionist/bedallotment",
    },
    {
      title: "Blood Bank",
      icon: Icons.BloodBank,
      navigateTo: "receptionist/bloodbank",
    },

    {
      title: "Invoice ",
      icon: Icons.Invoices,
      navigateTo: "receptionist/invoiceslist",
    },
    {
      title: "View Payments",
      icon: Icons.Payment,
      navigateTo: "receptionist/paymentlist",
    },
  ],
};
