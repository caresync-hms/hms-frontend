import { useState } from "react";

const RoleSelector = ({ defaultRole = "admin", onRoleChange }) => {
  const [role, setRole] = useState(defaultRole);

  const handleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (onRoleChange) {
      onRoleChange(selectedRole);
    }
  };

  return (
    <div className=" d-flex gap-3">
      <label className="form-label fw-bold">Select User Role</label>
      <select className="form-select-sm" value={role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
        <option value="accountant">Accountant</option>
      </select>
    </div>
  );
};

export default RoleSelector;
