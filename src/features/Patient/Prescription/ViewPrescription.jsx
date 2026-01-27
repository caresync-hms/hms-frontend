import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import { useGetPrescriptionsByPatientQuery } from "../../../services/prescriptionApi";
import { useGetPatientByUserIdQuery } from "../../../services/patientsApi";

function ViewPrescription() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ Safe localStorage handling
  const storedId = localStorage.getItem("id");
  const userId = storedId ? Number(storedId) : null;

  // ✅ Get patient from userId
  const { data: patient, isLoading: patientLoading } =
    useGetPatientByUserIdQuery(userId, {
      skip: !userId,
    });

  const patientId = patient?.id;

  // ✅ Get prescriptions
  const {
    data: prescriptions = [],
    isLoading,
    isError,
    isError: prescriptionError,
    error,
  } = useGetPrescriptionsByPatientQuery(patientId, {
    skip: !patientId,
  });

  // ✅ Table columns
  const columns = [
    { key: "date", label: "Date Issued" },
    { key: "doctor", label: "Doctor" },
    { key: "action", label: "Options" },
  ];

  // ✅ Map DTO → UI (CORRECT)
  const mappedPrescriptions = useMemo(() => {
    return prescriptions.map((p) => {
      const dateTime = new Date(p.dateIssued);

      return {
        id: p.prescriptionId,
        doctor: `Dr. ${p.doctorName}`,
        date: dateTime.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
    });
  }, [prescriptions]);

  // ✅ Search filter
  const filteredPrescriptions = useMemo(() => {
    const searchText = search.toLowerCase();

    return mappedPrescriptions.filter((p) => {
      return (
        p.doctor.toLowerCase().includes(searchText) ||
        p.date.toLowerCase().includes(searchText) ||
        p.id.toString().includes(searchText)
      );
    });
  }, [search, mappedPrescriptions]);

  // ✅ UI states
  if (!userId) {
    return <div className="mt-3 text-danger">User not logged in</div>;
  }

  if (patientLoading || isLoading) {
    return <div className="mt-3">Loading prescriptions...</div>;
  }

  if (prescriptionError) {
    return (
      <div className="mt-3 text-danger">
        Failed to load prescriptions: {error?.data?.message || "Server error"}
      </div>
    );
  }

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by doctor name, date or ID"
        value={search}
        onChange={setSearch}
      />

      {filteredPrescriptions.length === 0 ? (
        <div className="text-muted mt-3">No prescriptions found</div>
      ) : (
        <Table
          columns={columns}
          data={filteredPrescriptions.map((p) => ({
            ...p,
            action: (
              <button
                className="btn btn-primary btn-sm"
                onClick={() =>
                  navigate(`/patient/viewprescriptions/${p.id}`)
                }
              >
                View Prescription
              </button>
            ),
          }))}
        />
      )}
    </div>
  );
}

export default ViewPrescription;
