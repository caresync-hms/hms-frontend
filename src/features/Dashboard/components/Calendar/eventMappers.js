/* ---------- Notice → Calendar Event ---------- */
export const mapNoticeToEvent = (notice) => ({
  id: `notice-${notice.id}`,
  title: notice.title,
  start: notice.date,
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
  extendedProps: {
    type: "APPOINTMENT",
    status: appt.appointmentStatus,
    doctorName: appt.doctorName,
    patientName: appt.patientName,
  },
});
