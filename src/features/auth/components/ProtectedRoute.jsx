// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// export default function ProtectedRoute({ allowed }) {
//   const role = useSelector((state) => state.userRole.role);

//   if (!role) {
//     return <Navigate to="/" replace />; // not logged in
//   }

//   if (allowed && !allowed.includes(role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />;
// }

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowed }) {
  const { token, role } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowed && !allowed.includes(role?.split("_")[1].toLowerCase())) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
