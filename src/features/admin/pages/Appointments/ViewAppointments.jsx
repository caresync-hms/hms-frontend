import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { useGetAppointmentsQuery } from "../../../../services/appointmentsApi";

function ViewAppointments() {
  const [search, setSearch] = useState("");

  const {
    data: appointments = [],
    isLoading,
    isError,
    error,
  } = useGetAppointmentsQuery();

  const columns = [
    { key: "patientName", label: "Patient" },
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "doctorName", label: "Doctor" },
    { key: "doctorDepartment", label: "Department" },
    { key: "appointmentStatus", label: "Status" },
  ];

  /* -------- Transform backend data for table -------- */
  const transformedAppointments = appointments.map((a) => {
    const dateObj = new Date(a.appointmentDate);

    return {
      patientName: a.patientName,
      doctorName: a.doctorName,
      doctorDepartment: a.doctorDepartment,
      appointmentStatus: a.appointmentStatus,
      date: dateObj.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  });

  const filtered = transformedAppointments.filter(
    (a) =>
      a.patientName.toLowerCase().includes(search.toLowerCase()) ||
      a.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      a.doctorDepartment.toLowerCase().includes(search.toLowerCase()) ||
      a.appointmentStatus.toLowerCase().includes(search.toLowerCase()) ||
      a.date.toLowerCase().includes(search.toLowerCase()) ||
      a.time.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) {
    return <div className="mt-3">Loading appointments...</div>;
  }

  if (isError) {
    return (
      <div className="mt-3 text-danger">
        {error?.data?.message || "Failed to load appointments"}
      </div>
    );
  }

  return (
    <div className="mt-3">
      <SearchBar
        placeholder="Search by patient, doctor, department..."
        value={search}
        onChange={setSearch}
      />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          delete: (row) =>
            alert(
              `Cancel Appointment for ${row.patientName} with ${row.doctorName}`,
            ),
        }}
      />
    </div>
  );
}

export default ViewAppointments;
