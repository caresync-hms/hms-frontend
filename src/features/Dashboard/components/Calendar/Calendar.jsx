import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calendar.css";
// Bootstrap Modal Component
const Modal = ({ children, onClose }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Event Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: "1",
      title: "Demo Notice Two",
      start: "2025-11-01",
      category: "notice",
      backgroundColor: "#5b9bd5",
      borderColor: "#5b9bd5",
    },
    {
      id: "2",
      title: "Testing HMS - CI",
      start: "2025-11-29",
      category: "testing",
      backgroundColor: "#89c4f4",
      borderColor: "#89c4f4",
    },
  ];

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
  };

  return (
    <div className="container p-4 bg-white rounded">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        eventClick={handleEventClick}
        height={600}
        eventContent={(arg) => (
          <div
            className="p-1 text-white small rounded"
            style={{
              backgroundColor: arg.event.backgroundColor,
              cursor: "pointer",
            }}
          >
            {arg.event.title}
          </div>
        )}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h5>{selectedEvent?.title}</h5>
          <p>
            <strong>Date:</strong> {selectedEvent?.startStr}
          </p>
          <p>
            <strong>Category:</strong> {selectedEvent?.extendedProps.category}
          </p>
        </Modal>
      )}
    </div>
  );
}
