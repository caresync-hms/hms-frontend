import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./Calendar.css";
import { useGetAllNoticesQuery } from "../../../../services/noticesApi";
import {
  useGetAppointmentsByDoctorQuery,
  useGetAppointmentsByPatientQuery,
  useGetAppointmentsQuery,
} from "../../../../services/appointmentsApi";
import { mapAppointmentToEvent, mapNoticeToEvent } from "./eventMappers";
import { useGetPatientByUserIdQuery } from "../../../../services/patientsApi";
import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";

const Modal = ({ children, onClose }) => (
  <div
    className="modal fade show"
    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Details</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
);

export default function Calendar() {
  /* ---------- Base identity ---------- */
  const role = localStorage.getItem("role");
  const baseUserId = localStorage.getItem("id");

  /* ---------- for getting doctor/patient id ---------- */
  const { data: patientUser } = useGetPatientByUserIdQuery(baseUserId, {
    skip: role !== "ROLE_PATIENT",
  });

  const { data: doctorUser } = useGetDoctorByUserIdQuery(baseUserId, {
    skip: role !== "ROLE_DOCTOR",
  });

  const patientId = patientUser?.patientId;
  const doctorId = doctorUser?.doctorId;

  /* ---------- Calendar data ---------- */
  const { data: notices = [] } = useGetAllNoticesQuery(undefined, {
    skip: role !== "ROLE_ADMIN",
  });

  const { data: doctorAppointments = [] } = useGetAppointmentsByDoctorQuery(
    doctorId,
    {
      skip: role !== "ROLE_DOCTOR" || !doctorId,
    },
  );

  const { data: patientAppointments = [] } = useGetAppointmentsByPatientQuery(
    { patientId },
    {
      skip: role !== "ROLE_PATIENT" || !patientId,
    },
  );

  //for receptionist
  const { data: allAppointments = [] } = useGetAppointmentsQuery(patientId, {
    skip: role !== "ROLE_RECEPTIONIST",
  });

  /* ---------- Build events ---------- */
  let events = [];

  if (role === "ROLE_ADMIN") {
    events = notices.map(mapNoticeToEvent);
  }

  if (role === "ROLE_DOCTOR") {
    events = doctorAppointments.map(mapAppointmentToEvent);
  }

  if (role === "ROLE_PATIENT") {
    events = patientAppointments.map(mapAppointmentToEvent);
  }

  if (role === "ROLE_RECEPTIONIST") {
    events = allAppointments.map(mapAppointmentToEvent);
  }

  /* ---------- Modal ---------- */
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dateObj = new Date(selectedEvent?.startStr);
  function getFormatedDate() {
    return {
      date: dateObj?.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: dateObj?.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  }

  return (
    <div className="container p-4 bg-white rounded">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height={600}
        eventClick={(info) => setSelectedEvent(info.event)}
      />

      {selectedEvent && (
        <Modal onClose={() => setSelectedEvent(null)}>
          {selectedEvent.extendedProps.type === "NOTICE" && (
            <>
              <h5
                style={{
                  backgroundColor: "#afd2ff",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                {selectedEvent.title}
              </h5>
              <br />
              <p>{selectedEvent.extendedProps.description}</p>
              <p>
                <strong>Date:</strong> {selectedEvent.startStr}
              </p>
            </>
          )}

          {selectedEvent.extendedProps.type === "APPOINTMENT" && (
            <>
              <h5
                style={{
                  backgroundColor: "#ffafaf",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                {selectedEvent.title}
              </h5>
              <br />
              <p>
                <strong>Status:</strong> {selectedEvent.extendedProps.status}
              </p>

              {selectedEvent.extendedProps.doctorName && (
                <p>
                  <strong>Doctor:</strong>{" "}
                  {selectedEvent.extendedProps.doctorName}
                  {selectedEvent.extendedProps.doctorDepartment && (
                    <span>
                      {" "}
                      (<strong>Department:</strong>{" "}
                      {selectedEvent.extendedProps.doctorDepartment})
                    </span>
                  )}
                </p>
              )}

              {selectedEvent.extendedProps.patientName && (
                <p>
                  <strong>Patient:</strong>{" "}
                  {selectedEvent.extendedProps.patientName}
                </p>
              )}

              <p>
                <strong>Date:</strong> {getFormatedDate().date}
                <span>
                  {" "}
                  <strong>Time:</strong> {getFormatedDate().time}
                </span>
              </p>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}
