import React from "react";

export default function ReceptionistProfile({ receptionist }) {
  if (!receptionist) return null;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Receptionist Profile</h4>

        <div className="row g-3">
          <div className="col-md-6">
            <strong>First Name:</strong>
            <div>{receptionist.firstname}</div>
          </div>

          <div className="col-md-6">
            <strong>Last Name:</strong>
            <div>{receptionist.lastname}</div>
          </div>

          <div className="col-md-6">
            <strong>Email:</strong>
            <div>{receptionist.email}</div>
          </div>

          <div className="col-md-6">
            <strong>Phone:</strong>
            <div>{receptionist.phone || "-"}</div>
          </div>

          <div className="col-md-6">
            <strong>Gender:</strong>
            <div>{receptionist.gender}</div>
          </div>

          <div className="col-md-6">
            <strong>Date of Birth:</strong>
            <div>{receptionist.dob}</div>
          </div>

          <div className="col-md-6">
            <strong>Role:</strong>
            <div>{receptionist.role}</div>
          </div>

          <div className="col-md-6">
            <strong>Status:</strong>
            <div
              className={`fw-semibold ${
                receptionist.status === "ACTIVE"
                  ? "text-success"
                  : receptionist.status === "BLOCKED"
                    ? "text-danger"
                    : "text-warning"
              }`}
            >
              {receptionist.status}
            </div>
          </div>

          <div className="col-12">
            <strong>Address:</strong>
            <div>{receptionist.address || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
