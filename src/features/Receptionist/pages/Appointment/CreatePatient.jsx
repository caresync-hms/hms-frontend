import { useState } from "react";
import { useCreatePatientMutation } from "../../../../services/receptionistApi";

function CreatePatient() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    bloodGroup: "",
    medicalHistory: "",
  });

  const [createPatient, { isLoading }] = useCreatePatientMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPatient = async () => {
    try {
      if (
        !form.firstname ||
        !form.email ||
        !form.phone ||
        !form.gender ||
        !form.dob ||
        !form.bloodGroup
      ) {
        alert("Please fill all required fields");
        return;
      }

      await createPatient({
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        phone: form.phone,
        gender: form.gender,
        dob: form.dob,
        password: form.password, // optional → backend decides
        bloodGroup: form.bloodGroup,
        medicalHistory: form.medicalHistory,
      }).unwrap();

      alert("Patient created successfully ✅");

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        password: "",
        bloodGroup: "",
        medicalHistory: "",
      });
    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Failed to create patient");
    }
  };

  return (
    <div className="card p-4" style={{ maxWidth: "450px" }}>
      <h5 className="mb-3">Create Patient</h5>

      <input className="form-control mb-2" name="firstname" placeholder="First Name" value={form.firstname} onChange={handleChange} />
      <input className="form-control mb-2" name="lastname" placeholder="Last Name" value={form.lastname} onChange={handleChange} />
      <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input className="form-control mb-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />

      <select className="form-select mb-2" name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
      </select>

      <input type="date" className="form-control mb-2" name="dob" value={form.dob} onChange={handleChange} />

      <input type="password" className="form-control mb-2" name="password" placeholder="Temporary Password (optional)" value={form.password} onChange={handleChange} />

      <select className="form-select mb-2" name="bloodGroup" value={form.bloodGroup} onChange={handleChange}>
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

      <textarea className="form-control mb-3" name="medicalHistory" placeholder="Medical History (optional)" value={form.medicalHistory} onChange={handleChange} />

      <button className="btn btn-primary w-100" onClick={submitPatient} disabled={isLoading}>
        {isLoading ? "Creating..." : "Register Patient"}
      </button>
    </div>
  );
}

export default CreatePatient;
