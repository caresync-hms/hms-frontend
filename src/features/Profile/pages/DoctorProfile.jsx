function DoctorProfile({ doctor }) {
  if (!doctor) return null;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Doctor Profile</h4>

        <div className="row g-3">
          <div className="col-md-6">
            <strong>First Name:</strong>
            <div>{doctor.firstname}</div>
          </div>

          <div className="col-md-6">
            <strong>Last Name:</strong>
            <div>{doctor.lastname}</div>
          </div>

          <div className="col-md-6">
            <strong>Email:</strong>
            <div>{doctor.email}</div>
          </div>

          <div className="col-md-6">
            <strong>Phone:</strong>
            <div>{doctor.phone || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Gender:</strong>
            <div>{doctor.gender}</div>
          </div>

          <div className="col-md-6">
            <strong>Date of Birth:</strong>
            <div>{doctor.dob}</div>
          </div>

          <div className="col-md-6">
            <strong>Specialization:</strong>
            <div>{doctor.specialization}</div>
          </div>

          <div className="col-md-6">
            <strong>Department:</strong>
            <div>{doctor.department}</div>
          </div>

          <div className="col-md-6">
            <strong>Status:</strong>
            <div
              className={`fw-semibold ${
                doctor.status === "ACTIVE"
                  ? "text-success"
                  : doctor.status === "BLOCKED"
                    ? "text-danger"
                    : "text-warning"
              }`}
            >
              {doctor.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
