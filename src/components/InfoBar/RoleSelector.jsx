import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../features/auth/userRoleSlice";

const RoleSelector = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userRole.role);
  const handleChange = (e) => {
    const selectedRole = e.target.value;

    dispatch(setRole(selectedRole));
  };

  return (
    <div className=" d-flex gap-3">
      <label className="form-label fw-bold">Select User Role</label>
      <select className="form-select-sm" value={role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
     
        <option value="receptionist">Receptionist</option>
      </select>
    </div>
  );
};

export default RoleSelector;
