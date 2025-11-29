import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Login from "./features/auth/pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./features/auth/pages/Register/Register";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Tabs from "./components/Tabs/Tabs";
import Dashboard from "./features/Dashboard/pages/Dashboard";
import Departments from "./features/admin/pages/Departments";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import MyPatients from "./features/doctors/pages/MyPatients";
import ManageAppointments from "./features/doctors/pages/Appointment/ManageAppointments";
import ManagePrescription from "./features/doctors/pages/Prescription/ManagePrescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        // path: "other",
        element: (
          <ProtectedRoute
            allowed={["admin", "doctor", "nurse", "patient", "accountant"]}
          />
        ),
        children: [
          {
            element: <HomeLayout />,
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "department", element: <Departments /> },
              { path: "tabs", element: <Tabs /> },
              { path: "patients", element: <MyPatients /> },
              { path: "appointments", element:<ManageAppointments/>},
              { path: "prescription", element:<ManagePrescription/>}
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
