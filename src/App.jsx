import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Login from "./features/auth/pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./features/auth/pages/Register/Register";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import DashboardMenuGrid from "./components/DashboardMenuGrid/DashboardMenuGrid";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import Tabs from "./components/Tabs/Tabs";

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
          { path: "admin/dashboard", element: <div>ADMIN DASHBOARD</div> },
          { path: "admin/department", element: <div>ADMIN DEPARTMENTS</div> },
          { path: "admin/menugrid", element: <DashboardMenuGrid /> },
          { path: "admin/notice", element: <NoticeBoard /> },
          { path: "admin/tabs", element: <Tabs /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
