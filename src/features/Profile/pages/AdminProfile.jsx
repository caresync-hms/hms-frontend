function AdminProfile({ admin }) {
  if (!admin) return null;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Admin Profile</h4>

        <div className="row g-3">
          <div className="col-md-6">
            <strong>First Name:</strong>
            <div>{admin.firstname}</div>
          </div>

          <div className="col-md-6">
            <strong>Last Name:</strong>
            <div>{admin.lastname}</div>
          </div>

          <div className="col-md-6">
            <strong>Email:</strong>
            <div>{admin.email}</div>
          </div>

          <div className="col-md-6">
            <strong>Phone:</strong>
            <div>{admin.phone || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Gender:</strong>
            <div>{admin.gender}</div>
          </div>

          <div className="col-md-6">
            <strong>Date of Birth:</strong>
            <div>{admin.dob}</div>
          </div>

          <div className="col-md-6">
            <strong>Role:</strong>
            <div>{admin.role}</div>
          </div>

          <div className="col-md-6">
            <strong>Status:</strong>
            <div
              className={`fw-semibold ${
                admin.status === "ACTIVE"
                  ? "text-success"
                  : admin.status === "BLOCKED"
                    ? "text-danger"
                    : "text-warning"
              }`}
            >
              {admin.status}
            </div>
          </div>

          <div className="col-12">
            <strong>Address:</strong>
            <div>{admin.address || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
