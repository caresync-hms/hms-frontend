// import { useState } from "react";

// function AddAppointment() {
//   const [form, setForm] = useState({
//     date: "",
//     time: "",
//     doctorName: "",
//     department: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Appointment Submitted:", form);
//     alert("Appointment booked successfully!");
//     setForm({
//       date: "",
//       time: "",
//       doctorName: "",
//       department: "",
//       reason: "",
//     });
//   };

//   return (
//     <div className="card p-4 shadow-sm">
//       <h5 className="text mb-3">Book Appointment</h5>

//       <form onSubmit={handleSubmit}>
//         <div className="row g-3">
//           <div className="col-md-6">
//             <label className="form-label">Date</label>
//             <input
//               type="date"
//               name="date"
//               className="form-control"
//               value={form.date}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label className="form-label">Time</label>
//             <input
//               type="time"
//               name="time"
//               className="form-control"
//               value={form.time}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label className="form-label">Doctor</label>
//             <input
//               type="text"
//               name="doctorName"
//               className="form-control"
//               placeholder="Dr. Smith"
//               value={form.doctorName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label className="form-label">Department</label>
//             <select
//               name="department"
//               className="form-select"
//               value={form.department}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Department</option>
//               <option>Cardiology</option>
//               <option>Orthopedics</option>
//               <option>Dermatology</option>
//               <option>Neurology</option>
//             </select>
//           </div>

//           <div className="col-12">
//             <label className="form-label">Reason</label>
//             <textarea
//               name="reason"
//               rows="3"
//               className="form-control"
//               value={form.reason}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="col-12 text-end">
//             <button type="submit" className="btn btn-primary">
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddAppointment;

import { useState } from "react";
import axios from "axios";

function CreatePatient() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    gender: "",
    bloodGroup: "",
    medicalHistory: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPatient = async () => {
    try {
      // Frontend validation (VERY IMPORTANT)
      if (!form.firstName || !form.email || !form.phone || !form.gender || !form.bloodGroup) {
        alert("Please fill all required fields");
        return;
      }

      // STEPCreate USER
      const userRes = await axios.post(
        "http://localhost:9093/users/register",
        {
          firstName: form.firstName,
          lastName:form.lastName,
          email: form.email,
          phone: form.phone,
          gender: form.gender,       
          role: "PATIENT"
        }
      );

      const userId = userRes.data.id;

      // STEP 2️⃣ Create PATIENT
      await axios.post("http://localhost:9093/patient", {
        userId,
        gender: form.gender,         
        bloodGroup: form.bloodGroup, 
        medicalHistory: form.medicalHistory
      });

      alert("Patient created successfully");

      // reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        bloodGroup: "",
        medicalHistory: ""
      });

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to create patient");
    }
  };

  return (
    <div className="card p-4" style={{ maxWidth: "420px" }}>
      <h5 className="mb-3">Create Patient</h5>

      <input
        className="form-control mb-2"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />

           <input
        className="form-control mb-2"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      <input
        className="form-control mb-2"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        className="form-select mb-2"
        name="gender"
        value={form.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
      </select>

      <select
        className="form-select mb-2"
        name="bloodGroup"
        value={form.bloodGroup}
        onChange={handleChange}
      >
        <option value="">Select Blood Group</option>
        <option value="A_POSITIVE">A_POSITIVE</option>
        <option value="A_NEGATIVE">A_NEGATIVE</option>
        <option value="B_POSITIVE">B_POSITIVE</option>
        <option value="B_NEGATIVE">B_NEGATIVE</option>
        <option value="AB_POSITIVE">AB_POSITIVE</option>
        <option value="AB_NEGATIVE">AB_NEGATIVE</option>
        <option value="O_POSITIVE">O_POSITIVE</option>
        <option value="O_NEGATIVE">O_NEGATIVE</option>
      </select>

      <textarea
        className="form-control mb-3"
        name="medicalHistory"
        placeholder="Medical History (optional)"
        value={form.medicalHistory}
        onChange={handleChange}
      />

      <button className="btn btn-primary w-100" onClick={submitPatient}>
        Register Patient
      </button>
    </div>
  );
}

export default CreatePatient;


