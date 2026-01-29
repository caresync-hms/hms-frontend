import { useSelector } from "react-redux";
import PatientProfile from "./PatientProfile";
import DoctorProfile from "./DoctorProfile";
import AdminProfile from "./AdminProfile";
import { useGetProfileQuery } from "../../../services/profileApi";
import ReceptionistProfile from "./ReceptionistProfile";

function UserProfile() {
  const userId = localStorage.getItem("id");
  const role = localStorage.getItem("role");

  const { data, isLoading, isError, error } = useGetProfileQuery({
    userId,
    role,
  });

  if (isLoading) return <div>Loading profile...</div>;

  if (isError) return <div className="text-danger">{error?.data?.message}</div>;

  switch (role) {
    case "ROLE_PATIENT":
      return <PatientProfile patient={data} />;

    case "ROLE_DOCTOR":
      return <DoctorProfile doctor={data} />;

    case "ROLE_ADMIN":
      return <AdminProfile admin={data} />;

    case "ROLE_RECEPTIONIST":
      return <ReceptionistProfile receptionist={data} />;

    default:
      return <div>Invalid role</div>;
  }
}

export default UserProfile;
