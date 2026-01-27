
import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

import {
  useGetAppointmentsByDoctorQuery,
} from "../../../../services/appointmentsApi";

import {
  useGetDoctorByUserIdQuery,
} from "../../../../services/doctorsApi";

function AppointmentList() {
  const [search, setSearch] = useState("");

  const userId = localStorage.getItem("id");

  // 1️⃣ Get doctor using logged-in userId
  const {
    data: currentDoctor,
    isLoading: isDoctorLoading,
    isError: isDoctorError,
  } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.id;

  // 2️⃣ Get appointments ONLY after doctorId is available
  const {
    data: appointments = [],
    isLoading: isAppointmentsLoading,
    isError: isAppointmentsError,
    error,
  } = useGetAppointmentsByDoctorQuery(doctorId, {
    skip: !doctorId,
  });

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "status", label: "Status" },
    { key: "phoneNo", label: "Phone" },
  ];

  const mappedAppointments = appointments.map((a) => ({
    date: a.dateOfAppointment
      ? new Date(a.dateOfAppointment).toLocaleDateString()
      : "-",
    patientName: a.patientName,
    status: a.appointmentStatus,
    phoneNo: a.phoneNo,
  }));

  const filtered = mappedAppointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  // 🧠 Proper loading handling
  if (isDoctorLoading || isAppointmentsLoading) {
    return <p>Loading appointments...</p>;
  }

  if (isDoctorError) {
    return <p className="text-danger">Failed to load doctor info</p>;
  }

  if (isAppointmentsError) {
    return (
      <p className="text-danger">
        {error?.data?.message || "Failed to load appointments"}
      </p>
    );
  }

  return (
    <div className="mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) =>
            alert("Update status for " + row.patientName),
          delete: (row) =>
            alert("Cancel appointment for " + row.patientName),
        }}
      />
    </div>
  );
}

export default AppointmentList;
