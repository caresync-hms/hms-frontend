import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Login from "./features/auth/pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./features/auth/pages/Register/Register";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Dashboard from "./features/Dashboard/pages/Dashboard";

// Protected
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

// Admin Pages
import DepartmentsPage from "./features/admin/pages/Departments/DepartmentsPage";
import DoctorsPage from "./features/admin/pages/Doctors/DoctorsPage";
import PatientsPage from "./features/admin/pages/Patients/PatientsPage";
import NursesPage from "./features/admin/pages/Nurses/NursesPage";
import AccountantsPage from "./features/admin/pages/Accountant/AccountantsPage";

// Doctor Pages
import MyPatients from "./features/doctors/pages/Patient/MyPatients";
import ManageAppointments from "./features/doctors/pages/Appointment/ManageAppointments";
import ManagePrescription from "./features/doctors/pages/Prescription/ManagePrescription";
//import ManageBeds from "./features/Nurses/pages/BedAllotment/ManageBeds";
//import ManageBloodBank from "./features/Nurses/pages/BloodBank/ManageBloodBanks";
import Unauthorized from "./pages/UnAuthorized/UnAuthorized";

//Patient Pages
import BloodBankTab from "./features/BloodBank/BloodBankTab";
import ViewDoctorsPage from "./features/Patient/ViewDoctor/ViewDoctorPage";
import Appointments from "./features/Patient/Appointment/ManageAppointments";
import Prescription from "./features/Patient/Prescription/Prescription";
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
import ManageBeds from "./features/Receptionist/pages/BedAllotment/ManageBeds";
import ManageBloodBank from "./features/Receptionist/pages/BloodBank/ManageBloodBanks";
import ManagePatients from "./features/Receptionist/pages/Appointment/ManagePatients";
import AllPayments from "./features/Receptionist/pages/ViewPayments/AllPayments";
import InvoiceList from "./features/Receptionist/pages/Invoice/InvoiceList";
import AllInvoiceList from "./features/Receptionist/pages/Invoice/AllInvoiceList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },

      // Logged-in area shared by ALL ROLES
      {
        element: (
          <ProtectedRoute
            allowed={["admin", "doctor", "nurse", "patient", "receptionist"]}
          />
        ),
        children: [
          {
            element: <HomeLayout />,
            children: [{ path: "dashboard", element: <Dashboard /> }],
          },
          { path: "unauthorized", element: <Unauthorized /> },
        ],
      },

      // ADMIN-ONLY ROUTES
      {
        element: <ProtectedRoute allowed={["admin"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "department", element: <DepartmentsPage /> },
              { path: "doctor", element: <DoctorsPage /> },
              { path: "patient", element: <PatientsPage /> },
              { path: "nurse", element: <NursesPage /> },
              { path: "accountant", element: <AccountantsPage /> },
              { path: "settings/noticeboard", element: <NoticeBoardPage /> },
              { path: "settings/backup", element: <BackupPage /> },
              {
                path: "/monitor/view-appointments",
                element: <ViewAppointments />,
              },
              {
                path: "/monitor/view-payment",
                element: <PaymentHistoryPage />,
              },
              { path: "/monitor/bed-status", element: <ViewBedAllotment /> },
              { path: "/monitor/blood-bank", element: <BloodBankTab /> },
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
              { path: "patients", element: <MyPatients /> },
              { path: "appointments", element: <ManageAppointments /> },
              { path: "prescriptions", element: <ManagePrescription /> },
              { path: "bedsAllotment", element: <ManageBeds /> },
              { path: "bloodBank", element: <ManageBloodBank /> },
              { path: "appointments", element: <ManageAppointments /> },
              { path: "prescriptions", element: <ManagePrescription /> },
              { path: "ViewBloodBank", element: <BloodBankTab /> },
            ],
          },
        ],
      },

     

      // PATIENT-ONLY ROUTE (placeholder page)
      {
        element: <ProtectedRoute allowed={["patient"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "patient/bloodbank", element: <BloodBankTab /> },
              { path: "patient/viewdoctor", element: <ViewDoctorsPage /> },
              { path: "patient/viewappointments", element: <Appointments /> },
              { path: "patient/viewprescriptions", element: <Prescription /> },
              {
                path: "patient/viewprescriptions/:id",
                element: <DetailPrescription />,
              },
              { path: "patient/admithistory", element: <AdmitHistoryPage /> },
              {
                path: "patient/paymenthistory",
                element: <PaymentHistoryPage />,
              },
              {
                path: "patient/operationhistory",
                element: <OperationHistoryPage />,
              },
            ],
          },
        ],
      },

      // RECEPTIONIST-ONLY ROUTE (placeholder page)
      {
        element: <ProtectedRoute allowed={["receptionist"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "receptionist/bedallotment", element: <ManageBeds /> },
              { path: "receptionist/bloodbank", element: <ManageBloodBank /> },
               { path:"receptionist/createpatient" ,element:<ManagePatients />},
               {
      path: "receptionist/invoiceslist",
      element: <AllInvoiceList />,   // ⬅️ NEW PAGE
    },
                 { path: "receptionist/invoiceslist", element: <InvoiceList /> },
                   { path: "receptionist/invoices", element: <ManageInvoice /> },
                  {
                path: "receptionist/paymentlist",
                element:<AllPayments />
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
