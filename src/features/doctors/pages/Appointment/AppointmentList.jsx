import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";

import {
  useGetAppointmentsByDoctorQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} from "../../../../services/appointmentsApi";

import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";

function AppointmentList() {
  const [search, setSearch] = useState("");

  const userId = localStorage.getItem("id");

  const { data: currentDoctor } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.id;

  const { data: appointments = [], isLoading, isError } =
    useGetAppointmentsByDoctorQuery(doctorId, {
      skip: !doctorId,
    });

  const [acceptAppointment] = useAcceptAppointmentMutation();
  const [rejectAppointment] = useRejectAppointmentMutation();

  const columns = [
    { key: "date", label: "Date" },
    { key: "patientName", label: "Patient Name" },
    { key: "phoneNo", label: "Phone" },
    { key: "status", label: "Status" },
    { key: "options", label: "Options" }, // 👈 always visible
  ];

  const handleAccept = (appointmentId) => {
    acceptAppointment(appointmentId);
  };

  const handleReject = (appointmentId) => {
    rejectAppointment(appointmentId);
  };

  const mappedAppointments = appointments.map((a) => ({
    appointmentId: a.appointmentId,
    patientName: a.patientName,
    phoneNo: a.phoneNo,
    status: a.appointmentStatus,
    date: a.dateOfAppointment
      ? new Date(a.dateOfAppointment).toLocaleDateString()
      : "-",
    options: (
      <div className="d-flex gap-2 justify-content-center">
        <button
          className="btn btn-sm btn-success"
          onClick={() => handleAccept(a.appointmentId)}
        >
          Accept
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleReject(a.appointmentId)}
        >
          Reject
        </button>
      </div>
    ),
  }));

  const filtered = mappedAppointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading appointments...</p>;
  if (isError) return <p className="text-danger">Failed to load appointments</p>;

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />
      <Table columns={columns} data={filtered} />
    </div>
  );
}

export default AppointmentList;







