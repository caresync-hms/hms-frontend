import { useParams } from "react-router-dom";
import Field from "../../../components/Field/Field";
import { useGetPrescriptionByIdQuery } from "../../../services/prescriptionApi";

function DetailPrescription() {
  const { id } = useParams();

  const prescriptionId = id ? Number(id) : null;

  const {
    data: prescription,
    isLoading,
    isError,
    error,
  } = useGetPrescriptionByIdQuery(prescriptionId, {
    skip: !prescriptionId,
  });

  if (isLoading) {
    return <div className="mt-3">Loading prescription details...</div>;
  }

  if (isError) {
    return (
      <div className="mt-3 text-danger">
        Failed to load prescription: {error?.data?.message || "Server error"}
      </div>
    );
  }

  if (!prescription) {
    return <div className="mt-3 text-muted">Prescription not found</div>;
  }

  const dateIssued = prescription.dateIssued
    ? new Date(prescription.dateIssued).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  const notes = prescription.notes || "No notes available.";

  return (
    <div className="card shadow-sm p-4">
      <Field label="Prescription ID" value={prescription.prescriptionId} />
      <Field label="Doctor" value={`Dr. ${prescription.doctorName}`} />
      <Field label="Patient" value={prescription.patientName} />
      <Field label="Appointment ID" value={prescription.appointmentId} />
      <Field label="Date Issued" value={dateIssued} />
      <Field label="Notes / Advice" value={notes} />

      {/* Doctor Notes Card */}
      <div className="card mt-4">
        <div className="card-header fw-semibold">Doctor Notes</div>
        <div className="card-body text-muted">{notes}</div>
      </div>
    </div>
  );
}

export default DetailPrescription;
