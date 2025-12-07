import React from "react";
function Field({ label, value }) {
  return (
    <div className="row mb-3">
      <div className="col-md-4 fw-semibold text-muted">
        {label}
      </div>
      <div className="col-md-8">
        {value || "-"}
      </div>
    </div>
  );
}

export default Field;