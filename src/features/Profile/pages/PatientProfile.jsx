function PatientProfile({ patient }) {
  if (!patient) return null;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Patient Profile</h4>

        <div className="row g-3">
          <div className="col-md-6">
            <strong>First Name:</strong>
            <div>{patient.firstname}</div>
          </div>

          <div className="col-md-6">
            <strong>Last Name:</strong>
            <div>{patient.lastname}</div>
          </div>

          <div className="col-md-6">
            <strong>Email:</strong>
            <div>{patient.email}</div>
          </div>

          <div className="col-md-6">
            <strong>Phone:</strong>
            <div>{patient.phone || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Gender:</strong>
            <div>{patient.gender}</div>
          </div>

          <div className="col-md-6">
            <strong>Date of Birth:</strong>
            <div>{patient.dob}</div>
          </div>

          <div className="col-md-6">
            <strong>Blood Group:</strong>
            <div>{patient.bloodGroup}</div>
          </div>

          <div className="col-md-6">
            <strong>Status:</strong>
            <div
              className={`fw-semibold ${
                patient.status === "ACTIVE"
                  ? "text-success"
                  : patient.status === "BLOCKED"
                    ? "text-danger"
                    : "text-warning"
              }`}
            >
              {patient.status}
            </div>
          </div>

          <div className="col-12">
            <strong>Medical History:</strong>
            <div>{patient.medicalHistory || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Admit Date:</strong>
            <div>{patient.admitDate || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Discharge Date:</strong>
            <div>{patient.dischargeDate || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
