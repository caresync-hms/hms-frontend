import { useParams } from "react-router-dom";
import Field from "../../Component/Field/Field";

function DetailPrescription() {
  const { id } = useParams();

  const tempPrescription = {
    id,
    doctor: "Sandra T. Carter",
    patient: "Kyle E. Moore",
    caseHistory: "This is a demo case history for testing purpose!",
    medication: "This is a sample medication for testing purpose!",
    pharmacistMedication: "This is a sample medication for testing purpose!",
    description: "This is a demo description for testing purpose!",
    date: "04/28/2022",
    image: "https://via.placeholder.com/600x350?text=Prescription+Image",
    diagnosis: "Mild fever and cold",
  };

  const data = tempPrescription;

  return (
    <div className="card shadow-sm p-4">
      <Field label="Prescription ID" value={data.id} />
      <Field label="Doctor" value={data.doctor} />
      <Field label="Patient" value={data.patient} />
      <Field label="Case History" value={data.caseHistory} />
      <Field label="Medication" value={data.medication} />
      <Field label="Medication from Pharmacist" value={data.pharmacistMedication} />
      <Field label="Description" value={data.description} />
      <Field label="Date" value={data.date} />

      {data.image && (
        <div className="mt-4">
          <h6 className="fw-semibold mb-2">Prescription Image</h6>
          <div className="border rounded p-2 text-center">
            <img
              src={data.image}
              alt="Prescription"
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      )}

      <div className="card mt-4">
        <div className="card-header fw-semibold">Diagnosis Report</div>
        <div className="card-body text-muted">
          {data.diagnosis || "No diagnosis report available."}
        </div>
      </div>
    </div>
  );
}

export default DetailPrescription;
