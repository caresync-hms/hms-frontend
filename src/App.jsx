import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Login from "./features/auth/pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./features/auth/pages/Register/Register";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Dashboard from "./features/Dashboard/pages/Dashboard";
import HomePage from "./pages/HomePage/HomePage";
import UserProfile from "./features/Profile/pages/UserProfile";
import UnAuthorized from "./pages/UnAuthorized/UnAuthorized";

// Protected
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

// Admin Pages
import DepartmentsPage from "./features/admin/pages/Departments/DepartmentsPage";
import DoctorsPage from "./features/admin/pages/Doctors/DoctorsPage";
import PatientsPage from "./features/admin/pages/Patients/PatientsPage";
import NursesPage from "./features/admin/pages/Nurses/NursesPage";
import ReceptionistsPage from "./features/admin/pages/Receptionist/ReceptionistPage";

// Doctor Pages
import MyPatients from "./features/doctors/pages/Patient/MyPatients";
import ManageAppointments from "./features/doctors/pages/Appointment/ManageAppointments";
import ManagePrescription from "./features/doctors/pages/Prescription/ManagePrescription";
//import ManageBeds from "./features/Nurses/pages/BedAllotment/ManageBeds";
//import ManageBloodBank from "./features/Nurses/pages/BloodBank/ManageBloodBanks";

//Patient Pages
import BloodBankTab from "./features/BloodBank/BloodBankTab";
import ViewDoctorsPage from "./features/Patient/ViewDoctor/ViewDoctorPage";
import Appointments from "./features/Patient/Appointment/ManageAppointments";
import PrescriptionsPage from "./features/Patient/Prescription/PrescriptionsPage";
import DetailPrescription from "./features/Patient/Prescription/DetailPrescription";
import PaymentHistoryPage from "./features/Patient/PaymentHistory/PaymentHistoryPage";
import AdmitHistoryPage from "./features/Patient/AdmitHistory/AdmitHistoryPage";
import OperationHistoryPage from "./features/Patient/OperationHistory/OperationHistoryPage";
import NoticeBoardPage from "./features/admin/pages/NoticeBoard/NoticeBoardPage";
import ViewAppointments from "./features/admin/pages/Appointments/ViewAppointments";
import ViewBedAllotment from "./features/admin/pages/BedAllotment/ViewBedAllotment";
import BackupPage from "./features/admin/pages/Backup/BackupPage";

// receptionist Pages
import ManageInvoice from "./features/Receptionist/pages/Invoice/ManageInvoice";
//import ManageBeds from "./features/Receptionist/pages/BedAllotment/ManageBeds";
//import ManageBloodBank from "./features/Receptionist/pages/BloodBank/ManageBloodBanks";
import ManagePatients from "./features/Receptionist/pages/Patient/ManagePatients";
import AllPayments from "./features/Receptionist/pages/ViewPayments/AllPayments";
import InvoiceList from "./features/Receptionist/pages/Invoice/InvoiceList";
import AllInvoiceList from "./features/Receptionist/pages/Invoice/AllInvoiceList";
import ManageAppointment from "./features/Receptionist/pages/Appointment/ManageAppointment";
import ManageAllInvoices from "./features/Receptionist/pages/Invoice/ManageAllInvoices";
import ManageBeds from "./features/Receptionist/pages/BedAllotment/ManageBeds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Logged-in area shared by ALL ROLES
      {
        element: (
          <ProtectedRoute
            allowed={["admin", "doctor", "patient", "receptionist"]}
          />
        ),
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "profile", element: <UserProfile /> },
            ],
          },
          { path: "unauthorized", element: <UnAuthorized /> },
        ],
      },

      // ADMIN-ONLY ROUTES
      {
        element: <ProtectedRoute allowed={["admin"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "admin/department", element: <DepartmentsPage /> },
              { path: "admin/doctor", element: <DoctorsPage /> },
              { path: "admin/patient", element: <PatientsPage /> },
              { path: "admin/nurse", element: <NursesPage /> },
              { path: "admin/receptionist", element: <ReceptionistsPage /> },
              {
                path: "admin/settings/noticeboard",
                element: <NoticeBoardPage />,
              },
              { path: "admin/settings/backup", element: <BackupPage /> },
              {
                path: "admin/monitor/view-appointments",
                element: <ViewAppointments />,
              },
              {
                path: "admin/monitor/view-payment",
                element: <AllPayments />,
              },
              {
                path: "admin/monitor/bed-status",
                element: <ViewBedAllotment />,
              },
              { path: "admin/monitor/blood-bank", element: <BloodBankTab /> },
            ],
          },
        ],
      },

      // DOCTOR-ONLY ROUTES
      {
        element: <ProtectedRoute allowed={["doctor"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "doctor/patients", element: <MyPatients /> },
              { path: "doctor/appointments", element: <ManageAppointments /> },
              { path: "doctor/prescriptions", element: <ManagePrescription /> },
              { path: "doctor/bedsAllotment", element: <ManageBeds /> },
              { path: "doctor/appointments", element: <ManageAppointments /> },
              { path: "doctor/prescriptions", element: <ManagePrescription /> },
              { path: "doctor/viewBloodBank", element: <BloodBankTab /> },
            ],
          },
        ],
      },

      // PATIENT-ONLY ROUTE
      {
        element: <ProtectedRoute allowed={["patient"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "patient/bloodBank", element: <BloodBankTab /> },
              { path: "patient/doctor", element: <ViewDoctorsPage /> },
              { path: "patient/appointments", element: <Appointments /> },
              { path: "patient/prescriptions", element: <PrescriptionsPage /> },
              {
                path: "patient/viewprescriptions/:id",
                element: <DetailPrescription />,
              },
              { path: "patient/admitHistory", element: <AdmitHistoryPage /> },
              {
                path: "patient/paymentHistory",
                element: <PaymentHistoryPage />,
              },
              {
                path: "patient/operationHistory",
                element: <OperationHistoryPage />,
              },
            ],
          },
        ],
      },

      //RECEPTIONIST-ONLY ROUTE
      {
        element: <ProtectedRoute allowed={["receptionist"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              //{ path: "nurse/bedallotment", element: <ManageBeds /> },
              //add receptionist related routes here
              { path: "receptionist/bedallotment", element: <ManageBeds /> },
              { path: "receptionist/bloodbank", element: <BloodBankTab /> },
              {
                path: "receptionist/manage-patients",
                element: <ManagePatients />,
              },

              {
                path: "receptionist/appointments",
                element: <ManageAppointment />,
              },

              // 📄 View all invoices (table only)
              {
                path: "receptionist/invoices",
                element: <ManageAllInvoices />,
              },

              // 💳 View all payments
              {
                path: "receptionist/paymentlist",
                element: <AllPayments />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
