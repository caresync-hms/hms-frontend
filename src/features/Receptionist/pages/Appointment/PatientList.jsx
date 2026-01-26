import { useEffect, useState } from "react";
import axios from "axios";
import PatientBilling from "../Invoice/PatientBilling";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9093/patient")
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map(p => (
            <tr key={p.patientId}>
              <td>{p.patientId}</td>
              <td>{p.firstName}</td>
              <td>{p.gender}</td>
              <td>{p.bloodGroup}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setSelectedPatient(p)}
                >
                  Manage Billing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPatient && (
        <PatientBilling patient={selectedPatient} />
      )}
    </>
  );
}

export default PatientList;
