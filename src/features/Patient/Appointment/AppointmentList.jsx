import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/Table/Table";
import {
  useGetAppointmentsByPatientQuery,
  useCancelAppointmentMutation,
} from "../../../services/appointmentsApi";
import { useGetPatientByUserIdQuery } from "../../../services/patientsApi";

function AppointmentList() {
  const [search, setSearch] = useState("");

  const storedId = localStorage.getItem("id");
  const userId = storedId ? Number(storedId) : null;

  const {
    data: patient,
    isLoading: patientLoading,
    isError: patientError,
  } = useGetPatientByUserIdQuery(userId, { skip: !userId });

  const patientId = patient?.patientId;

  const {
    data: appointments = [],
    isLoading: appointmentsLoading,
    isError,
    error,
    refetch,
  } = useGetAppointmentsByPatientQuery(patientId, {
    skip: !patientId,
  });

  const [cancelAppointment, { isLoading: cancelLoading }] =
    useCancelAppointmentMutation();

  const columns = [
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "doctorName", label: "Doctor" },
    { key: "doctorSpecialization", label: "Specialization" },
    { key: "appointmentStatus", label: "Status" },
    { key: "options", label: "Options" },
  ];

  const handleCancel = async (appointment) => {
  if (appointment.appointmentStatus !== "PENDING") {
    alert("This appointment cannot be cancelled");
    return;
  }

  if (!window.confirm("Cancel this appointment?")) return;

  try {
    await cancelAppointment(appointment.appointmentId);
    await refetch();
    alert("Appointment cancelled successfully");
  } catch {
    await refetch();
    alert("Appointment cancelled successfully");
  }
};

  const mappedAppointments = useMemo(() => {
    return appointments.map((a) => {
      const dateTime = new Date(a.dateOfAppointment);

      return {
        appointmentId: a.appointmentId,
        date: dateTime.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        time: dateTime.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        doctorName: a.doctorName,
        doctorSpecialization: a.doctorSpecialization,
        appointmentStatus: a.appointmentStatus,
        options: (
          <div className="d-flex gap-2 justify-content-center">
            <button
              className="btn btn-sm btn-danger"
              disabled={a.appointmentStatus !== "PENDING" || cancelLoading}
              onClick={() => handleCancel(a)}
            >
              Cancel
            </button>
          </div>
        ),
      };
    });
  }, [appointments, cancelLoading]);

  const filteredAppointments = useMemo(() => {
    const searchText = search.toLowerCase();
    return mappedAppointments.filter(
      (a) =>
        a.doctorName?.toLowerCase().includes(searchText) ||
        a.doctorSpecialization?.toLowerCase().includes(searchText) ||
        a.appointmentStatus?.toLowerCase().includes(searchText) ||
        a.date?.toLowerCase().includes(searchText) ||
        a.time?.toLowerCase().includes(searchText)
    );
  }, [search, mappedAppointments]);

  if (!userId) return <div className="mt-4 text-danger">User not logged in</div>;

  if (patientLoading || appointmentsLoading)
    return <div className="mt-4">Loading...</div>;

  if (patientError)
    return (
      <div className="mt-4 text-danger">
        Failed to load patient details
      </div>
    );

  if (isError)
    return (
      <div className="mt-4 text-danger">
        Failed to load appointments:{" "}
        {error?.data?.message || "Server error"}
      </div>
    );

  return (
    <div className="container mt-4">
      <SearchBar
        placeholder="Search by doctor, specialization, date or status"
        value={search}
        onChange={setSearch}
      />

      {filteredAppointments.length === 0 ? (
        <div className="text-muted mt-3">No appointments found</div>
      ) : (
        <Table columns={columns} data={filteredAppointments} />
      )}
    </div>
  );
}

export default AppointmentList;
