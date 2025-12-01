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
import MyPatients from "./features/doctors/pages/MyPatients";
import ManageAppointments from "./features/doctors/pages/Appointment/ManageAppointments";
import ManagePrescription from "./features/doctors/pages/Prescription/ManagePrescription";
import Unauthorized from "./pages/UnAuthorized/UnAuthorized";
import ViewBloodBank from "./features/doctors/pages/ViewBloodBank";

//Patient Pages
import BloodBankTab from "./features/BloodBank/BloodBankTab";
import ViewDoctorsPage from "./features/Patient/ViewDoctor/ViewDoctorPage";
import Appointments from "./features/Patient/Appointment/ManageAppointments";
import Prescription from './features/Patient/Prescription/Prescription';
import DetailPrescription from "./features/Patient/Prescription/DetailPrescription";
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
            allowed={["admin", "doctor", "nurse", "patient", "accountant"]}
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
              { path: "ViewBloodBank", element: <ViewBloodBank /> },
            ],
          },
        ],
      },

      // NURSE-ONLY ROUTE (placeholder page)
      {
        element: <ProtectedRoute allowed={["nurse"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              {
                path: "nurse-dashboard",
                element: <h2>Nurse Dashboard</h2>,
              },
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
                {path: "patient/viewappointments", element: <Appointments/> },
                {path:"patient/viewprescriptions", element: <Prescription/>},
                {path:"patient/viewprescriptions/:id", element: <DetailPrescription/>}
              ],
            },
          ],
        },  
     

      // ACCOUNTANT-ONLY ROUTE (placeholder page)
      {
        element: <ProtectedRoute allowed={["accountant"]} />,
        children: [
          {
            element: <HomeLayout />,
            children: [{ path: "billing", element: <h2>Billing Panel</h2> }],
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
