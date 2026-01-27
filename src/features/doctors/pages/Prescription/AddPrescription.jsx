// import React, { useState } from "react";

// function AddPrescription() {
//   const [form, setForm] = useState({
//     doctor: "",
//     patient: "",
//     caseHistory: "",
//     medication: "",
//     pharmacyMedication: "",
//     advice: "",
//     date: "",
//   });

//   const doctors = [
//     "Dr. Mehta",
//     "Dr. Gupta",
//     "Dr. Carter",
//     "Dr. Roy"
//   ];

//   const patients = [
//     "Rohan Sharma",
//     "Neha Kapoor",
//     "Amit Verma",
//     "Sara Ali"
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Prescription Saved:", form);
//     alert("Prescription saved successfully!");
//   };

//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">Add Prescription</h4>

//       <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

//         {/* Doctor */}
//         <div className="mb-3">
//           <label className="form-label">Doctor</label>
//           <select
//             className="form-select"
//             name="doctor"
//             value={form.doctor}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Doctor</option>
//             {doctors.map((doc, idx) => (
//               <option key={idx} value={doc}>
//                 {doc}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Patient */}
//         <div className="mb-3">
//           <label className="form-label">Patient</label>
//           <select
//             className="form-select"
//             name="patient"
//             value={form.patient}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Patient</option>
//             {patients.map((pat, idx) => (
//               <option key={idx} value={pat}>
//                 {pat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Case History */}
//         <div className="mb-3">
//           <label className="form-label">Case History</label>
//           <textarea
//             className="form-control"
//             name="caseHistory"
//             rows="3"
//             placeholder="Enter case history"
//             value={form.caseHistory}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         {/* Medication */}
//         <div className="mb-3">
//           <label className="form-label">Medication</label>
//           <textarea
//             className="form-control"
//             name="medication"
//             rows="2"
//             placeholder="Enter prescribed medication"
//             value={form.medication}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         {/* Medication From Pharmacy */}
//         <div className="mb-3">
//           <label className="form-label">Medication (From Pharmacy)</label>
//           <textarea
//             className="form-control"
//             name="pharmacyMedication"
//             rows="2"
//             placeholder="Enter pharmacy medication"
//             value={form.pharmacyMedication}
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         {/* Advice */}
//         <div className="mb-3">
//           <label className="form-label">Advice</label>
//           <textarea
//             className="form-control"
//             name="advice"
//             rows="2"
//             placeholder="Enter advice"
//             value={form.advice}
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         {/* Date */}
//         <div className="mb-3">
//           <label className="form-label">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Save Button */}
//         <button type="submit" className="btn btn-primary">
//           Save Prescription
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPrescription;


// import React, { useState } from "react";

// import { useAddPrescriptionMutation } from "../../../../services/prescription";
// import { useGetAllPatientsQuery } from "../../../../services/patientsApi";
// import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";

// function AddPrescription() {
//   const [form, setForm] = useState({
//     patientId: "",
//     medicine: "",
//     notes: "",
//   });

//   // 🔹 Logged-in userId (same pattern as AppointmentList)
//   const userId = localStorage.getItem("id");

//   // 1️⃣ Get current doctor using userId
//   const {
//     data: currentDoctor,
//     isLoading: isDoctorLoading,
//     isError: isDoctorError,
//   } = useGetDoctorByUserIdQuery(userId, {
//     skip: !userId,
//   });

//   const doctorId = currentDoctor?.id;

//   // 2️⃣ Get all patients
//   const { data: patients = [] } = useGetAllPatientsQuery();

//   // 3️⃣ Add prescription mutation
//   const [addPrescription, { isLoading }] = useAddPrescriptionMutation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       doctorId,
//       patientId: form.patientId,
//       medicine: form.medicine,
//       advice: form.notes,
//     };

//     try {
//       await addPrescription(payload).unwrap();
//       alert("Prescription added successfully!");

//       setForm({
//         patientId: "",
//         medicine: "",
//         notes: "",
//       });
//     } catch (err) {
//       alert("Failed to save prescription");
//     }
//   };

//   // 🧠 Proper loading & error handling
//   if (isDoctorLoading) {
//     return <p>Loading doctor info...</p>;
//   }

//   if (isDoctorError) {
//     return <p className="text-danger">Failed to load doctor info</p>;
//   }

//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">Add Prescription</h4>

//       <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
//         {/* Doctor (Auto-filled from API) */}
//         <div className="mb-3">
//           <label className="form-label">Doctor</label>
//           <input
//             type="text"
//             className="form-control"
//             value={currentDoctor?.doctorName || ""}
//             disabled
//           />
//         </div>

//         {/* Patient */}
//         <div className="mb-3">
//           <label className="form-label">Patient</label>
//           <select
//             className="form-select"
//             name="patientId"
//             value={form.patientId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Patient</option>
//             {patients.map((p) => (
//               <option key={p.id} value={p.id}>
//                 {p.firstname} {p.lastname}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Medicine */}
//         <div className="mb-3">
//           <label className="form-label">Medicine</label>
//           <textarea
//             className="form-control"
//             name="medicine"
//             rows="2"
//             placeholder="Enter prescribed medicine"
//             value={form.medicine}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Advice */}
//         <div className="mb-3">
//           <label className="form-label">Advice</label>
//           <textarea
//             className="form-control"
//             name="notes"
//             rows="2"
//             placeholder="Enter advice"
//             value={form.notes}
//             onChange={handleChange}
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={isLoading || !doctorId}
//         >
//           {isLoading ? "Saving..." : "Save Prescription"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPrescription;

import React, { useState } from "react";

import { useAddPrescriptionMutation } from "../../../../services/prescription";
import { useGetAllPatientsQuery } from "../../../../services/patientsApi";
import { useGetDoctorByUserIdQuery } from "../../../../services/doctorsApi";

function AddPrescription() {
  const [form, setForm] = useState({
    patientId: "",
    medicane: "",   // 🔹 must match backend
    notes: "",
  });

  const userId = localStorage.getItem("id");

  // Get doctor
  const { data: currentDoctor } = useGetDoctorByUserIdQuery(userId, {
    skip: !userId,
  });

  const doctorId = currentDoctor?.id;

  // Get all patients
  const { data: patients = [] } = useGetAllPatientsQuery();

  const [addPrescription, { isLoading }] = useAddPrescriptionMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctorId) {
      alert("Doctor info not loaded yet");
      return;
    }
console.log("hasjjashdhfhahdfh:",patients);

    // Payload exactly as per PrescriptionReqDTO
    const payload = {
      doctorId: Number(doctorId),
      patientId: Number(form.patientId),
      medicane: form.medicane,                   // 🔹 spelling must match DTO
      notes: form.notes,
      appointmentId: 3,                        // 🔹 dummy for now
      dateIssued: new Date().toISOString(),      // 🔹 send current datetime
    };

    console.log("Payload being sent:", payload);

    try {
      await addPrescription(payload).unwrap();
      alert("Prescription added successfully!");

      setForm({
        patientId: "",
        medicane: "",
        notes: "",
      });
    } catch (err) {
      console.error("Add prescription failed:", err);
      alert("Failed to save prescription");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Add Prescription</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* Patient */}
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <select
            className="form-select"
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            required
          >
            <option value="">Select Patient</option>
            {patients.map((p) => (
              <option key={p.id} value={p.patientId}>
                {p.firstname} {p.lastname}
              </option>
            ))}
          </select>
        </div>

        {/* Medicane */}
        <div className="mb-3">
          <label className="form-label">Medicane</label>
          <textarea
            className="form-control"
            name="medicane"
            rows="2"
            placeholder="Enter prescribed medicane"
            value={form.medicane}
            onChange={handleChange}
            required
          />
        </div>

        {/* Notes */}
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            rows="2"
            placeholder="Enter advice / notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading || !doctorId}
        >
          {isLoading ? "Saving..." : "Save Prescription"}
        </button>
      </form>
    </div>
  );
}

export default AddPrescription;


