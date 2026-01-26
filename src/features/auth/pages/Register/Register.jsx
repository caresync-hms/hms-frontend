// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css";
// import { useState } from "react";
// import { useAddPatientMutation } from "../../../../services/patientsApi";

// function PatientRegister() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     dob: "",
//     gender: "",
//     email: "",
//     phone: "",
//     password: "",
//     bloodGroup: "",
//     medicalHistory: "",
//     status: "ACTIVE",
//   });

//   const [addPatient, { isLoading }] = useAddPatientMutation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addPatient(form).unwrap();
//       alert("Registration successful. Please login.");
//       navigate("/");
//     } catch (err) {
//       alert(err?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="register-page-container">
//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div
//           className="bg-white p-5 pb-4 rounded shadow-lg"
//           style={{ width: "90%", maxWidth: "700px" }}
//         >
//           <h3 className="text-center mb-4 fw-semibold">Patient Registration</h3>

//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               {/* First Name */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="firstname"
//                   placeholder="First Name"
//                   value={form.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Last Name */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="lastname"
//                   placeholder="Last Name"
//                   value={form.lastname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* DOB */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="dob"
//                   value={form.dob}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Gender */}
//               <div className="col-md-6 mb-3">
//                 <select
//                   className="form-select"
//                   name="gender"
//                   value={form.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="MALE">Male</option>
//                   <option value="FEMALE">Female</option>
//                   <option value="OTHER">Other</option>
//                 </select>
//               </div>

//               {/* Email */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Phone */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="tel"
//                   className="form-control"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="col-12 mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Blood Group (Optional) */}
//               <div className="col-md-6 mb-3">
//                 <select
//                   className="form-select"
//                   name="bloodGroup"
//                   value={form.bloodGroup}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Blood Group</option>
//                   <option value="A_POSITIVE">A+</option>
//                   <option value="A_NEGATIVE">A-</option>
//                   <option value="B_POSITIVE">B+</option>
//                   <option value="B_NEGATIVE">B-</option>
//                   <option value="AB_POSITIVE">AB+</option>
//                   <option value="AB_NEGATIVE">AB-</option>
//                   <option value="O_POSITIVE">O+</option>
//                   <option value="O_NEGATIVE">O-</option>
//                 </select>
//               </div>

//               {/* Medical History (Optional) */}
//               <div className="col-md-6 mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="medicalHistory"
//                   placeholder="Medical History (optional)"
//                   value={form.medicalHistory}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Submit */}
//               <div className="text-center mt-3">
//                 <button
//                   type="submit"
//                   className="btn text-white px-4 py-2"
//                   disabled={isLoading}
//                   style={{
//                     background: "linear-gradient(135deg, #3b82f6, #2563eb)",
//                   }}
//                 >
//                   {isLoading ? "Registering..." : "Register"}
//                 </button>
//               </div>
//             </div>
//           </form>

//           <div className="text-center mt-3">
//             <small>
//               Already have an account?{" "}
//               <Link to="/" className="text-decoration-none">
//                 Login!
//               </Link>
//             </small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientRegister;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegisterPatientMutation } from "../../../../services/patientsApi";
import "./Register.css";

function PatientRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    bloodGroup: "",
    medicalHistory: "",
    status: "ACTIVE",
  });

  const [registerPatient, { isLoading }] = useRegisterPatientMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPatient(form).unwrap();
      alert("Registration successful. Please login.");
      navigate("/");
    } catch (err) {
      alert(err?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page-container d-flex align-items-center justify-content-center">
      <div className="register-card shadow-lg rounded-4 bg-white p-4 p-md-5">
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1">Patient Registration</h3>
          <p className="text-muted small">
            Create your account to book appointments and manage health records
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* PERSONAL DETAILS */}
          <div className="mb-4">
            <h6 className="fw-semibold text-primary mb-3">
              Personal Information
            </h6>

            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="First Name"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Last Name"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <select
                  className="form-select"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mb-4">
            <h6 className="fw-semibold text-primary mb-3">
              Contact Information
            </h6>

            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* SECURITY */}
          <div className="mb-4">
            <h6 className="fw-semibold text-primary mb-3">Account Security</h6>

            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* MEDICAL INFO */}
          <div className="mb-4">
            <h6 className="fw-semibold text-primary mb-3">
              Medical Information
            </h6>

            <div className="row g-3">
              <div className="col-md-6">
                <select
                  className="form-select"
                  name="bloodGroup"
                  value={form.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Blood Group</option>
                  <option value="A_POSITIVE">A+</option>
                  <option value="A_NEGATIVE">A-</option>
                  <option value="B_POSITIVE">B+</option>
                  <option value="B_NEGATIVE">B-</option>
                  <option value="AB_POSITIVE">AB+</option>
                  <option value="AB_NEGATIVE">AB-</option>
                  <option value="O_POSITIVE">O+</option>
                  <option value="O_NEGATIVE">O-</option>
                </select>
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="medicalHistory"
                  placeholder="Medical History (Optional)"
                  value={form.medicalHistory}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>

        {/* FOOTER */}
        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account?{" "}
            <Link to="/" className="text-decoration-none fw-semibold">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
