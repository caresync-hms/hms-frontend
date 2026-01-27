/* ---------- Notice → Calendar Event ---------- */
export const mapNoticeToEvent = (notice) => ({
  id: `notice-${notice.id}`,
  title: notice.title,
  start: notice.date,
  backgroundColor: "#5b9bd5",
  borderColor: "#5b9bd5",
  extendedProps: {
    type: "NOTICE",
    description: notice.notice,
  },
});

/* ---------- Appointment → Calendar Event ---------- */
export const mapAppointmentToEvent = (appt) => ({
  id: `appt-${appt.dateOfAppointment}`,
  title: `Appointment`,
  start: appt.dateOfAppointment,
  backgroundColor:
    appt.appointmentStatus === "SCHEDULED"
      ? "#28a745"
      : appt.appointmentStatus === "CANCELLED"
        ? "#dc3545"
        : "#ffc107",
  borderColor: "#de1717",
  extendedProps: {
    type: "APPOINTMENT",
    status: appt.appointmentStatus,
    doctorName: appt.doctorName,
    patientName: appt.patientName,
  },
});
