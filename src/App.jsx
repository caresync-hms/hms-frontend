import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Login from "./features/auth/pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./features/auth/pages/Register/Register";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Tabs from "./components/Tabs/Tabs";
import Dashboard from "./features/Dashboard/pages/Dashboard";
import Departments from "./features/admin/pages/Departments";
import DoctorAppointment from "./features/doctors/pages/ManageAppointments";

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
        path: "other",
        element: <HomeLayout />,
        children: [
          { path: "admin/dashboard", element: <Dashboard /> },
          { path: "admin/department", element: <Departments /> },
          { path: "admin/tabs", element: <Tabs /> },

          // {path: "doctor/appointments" , element:<DoctorAppointment/>}
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
