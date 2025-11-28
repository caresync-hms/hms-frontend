import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowed }) {
  const role = useSelector((state) => state.userRole.role);

  if (!role) {
    return <Navigate to="/" replace />; // not logged in
  }

  if (allowed && !allowed.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
