// import { useState } from "react";
// import { useCreateInvoiceMutation } from "../../../../services/receptionistApi";

// function AddInvoice({ patientId }) {
//   const [amount, setAmount] = useState("");
//   const [createInvoice, { isLoading }] =
//     useCreateInvoiceMutation();

//   const submitInvoice = async () => {
//     if (!amount) return alert("Enter amount");

//     await createInvoice({
//       patientId,
//       amount: Number(amount),
//     }).unwrap();

//     alert("Invoice created ✅");
//     setAmount("");
//   };

//   return (
//     <div className="card p-3">
//       <h5>Create Invoice</h5>

//       <input
//         className="form-control mb-2"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />

//       <button
//         className="btn btn-primary"
//         onClick={submitInvoice}
//         disabled={isLoading}
//       >
//         {isLoading ? "Creating..." : "Generate Invoice"}
//       </button>
//     </div>
//   );
// }

// export default AddInvoice;


// import { useState } from "react";
// import {
//   useGetReceptionistPatientsQuery,
//   useCreateInvoiceMutation,
// } from "../../../../services/receptionistApi";

// function AddInvoice() {
//   const [patientId, setPatientId] = useState("");
//   const [amount, setAmount] = useState("");

//   const { data: patients = [], isLoading: patientsLoading } =
//     useGetReceptionistPatientsQuery();

//   const [createInvoice, { isLoading }] = useCreateInvoiceMutation();

//   const submitInvoice = async () => {
//     if (!patientId) return alert("Please select a patient");
//     if (!amount) return alert("Enter amount");

//     try {
//       await createInvoice({
//         patientId: Number(patientId),
//         amount: Number(amount),
//       }).unwrap();

//       alert("Invoice created ✅");
//       setAmount("");
//       setPatientId("");
//     } catch (err) {
//       console.error(err);
//       alert(err?.data?.message || "Failed to create invoice");
//     }
//   };

//   if (patientsLoading) return <p>Loading patients...</p>;

//   return (
//     <div className="card p-4" style={{ maxWidth: "400px" }}>
//       <h5 className="mb-3">Add Invoice</h5>

//       {/* Patient Selector */}
//       <select
//         className="form-select mb-3"
//         value={patientId}
//         onChange={(e) => setPatientId(e.target.value)}
//       >
//         <option value="">Select Patient</option>
//         {patients.map((p) => (
//           <option key={p.patientId} value={p.patientId}>
//             {p.firstName} {p.lastName} ({p.phone})
//           </option>
//         ))}
//       </select>

//       {/* Amount */}
//       <input
//         className="form-control mb-3"
//         type="number"
//         placeholder="Invoice Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />

//       <button
//         className="btn btn-primary w-100"
//         onClick={submitInvoice}
//         disabled={isLoading}
//       >
//         {isLoading ? "Creating..." : "Generate Invoice"}
//       </button>
//     </div>
//   );
// }

// export default AddInvoice;

// import { useState } from "react";
// import { useGetReceptionistPatientsQuery } from "../../../../services/receptionistApi";
// import PatientBilling from "../Invoice/PatientBilling";

// function AddInvoicePage() {
//   const { data, isLoading, isError } =
//     useGetReceptionistPatientsQuery();

//   const [selectedPatient, setSelectedPatient] = useState(null);

//   // ApiResponse wrapper handling
//   const patients = data?.data || [];

//   if (isLoading) return <p>Loading patients...</p>;
//   if (isError) return <p>Failed to load patients ❌</p>;

//   return (
//     <>
//       <h5 className="mb-3">Select Patient for Invoice</h5>

//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Blood Group</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {patients.map((p) => (
//             <tr key={p.patientId}>
//               <td>{p.patientId}</td>
//               <td>
//                 {p.firstname} {p.lastname}
//               </td>
//               <td>{p.gender}</td>
//               <td>{p.bloodGroup}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-primary"
//                   onClick={() => setSelectedPatient(p)}
//                 >
//                   Manage Billing
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* 🔽 Show invoice section only after selecting patient */}
//       {selectedPatient && (
//         <PatientBilling patient={selectedPatient} />
//       )}
//     </>
//   );
// }

// export default AddInvoicePage;



// import { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import PatientBilling from "../Invoice/PatientBilling";
// import { useGetReceptionistPatientsQuery } from "../../../../services/receptionistApi";

// function AddInvoicePage() {
//   const [search, setSearch] = useState("");
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//   } = useGetReceptionistPatientsQuery();


//   const patients = data || [];

//   const columns = [
//     { key: "firstname", label: "First Name" },
//     { key: "lastname", label: "Last Name" },
//     { key: "gender", label: "Gender" },
//     { key: "bloodGroup", label: "Blood Group" },
//   ];

//   const filteredPatients = patients.filter((patient) =>
//     `${patient.firstname} ${patient.lastname}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   if (isLoading) {
//     return <div className="container mt-4">Loading patients...</div>;
//   }

//   if (isError) {
//     return (
//       <div className="container mt-4 text-danger">
//         Failed to load patients: {error?.data?.message || "Unknown error"}
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <h5 className="mb-3">Select Patient for Invoice</h5>

//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filteredPatients}
//         actions={{
//           custom: {
//             label: "Manage Billing",
//             className: "btn btn-sm btn-primary",
//             handler: (row) => setSelectedPatient(row),
//           },
//         }}
//       />

//       {/* 🔽 Invoice Section */}
//       {selectedPatient && (
//         <div className="mt-4">
//           <PatientBilling patient={selectedPatient} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddInvoicePage;

// import { useState } from "react";
// import Modal from "../../../../components/Modal/Modal";
// import { useGetReceptionistPatientsQuery } from "../../../../services/receptionistApi";
// import PatientBilling from "../Invoice/PatientBilling";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";

// function AddInvoicePage() {
//   const [search, setSearch] = useState("");
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const {
//     data,
//     isLoading,
//     isError,
//   } = useGetReceptionistPatientsQuery();

//   const patients = data || [];

//   const columns = [
//     { key: "firstname", label: "First Name" },
//     { key: "lastname", label: "Last Name" },
//     { key: "gender", label: "Gender" },
//     { key: "bloodGroup", label: "Blood Group" },
//   ];

//   const filteredPatients = patients.filter((p) =>
//     `${p.firstname} ${p.lastname}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   if (isLoading) return <p>Loading patients...</p>;
//   if (isError) return <p>Failed to load patients ❌</p>;

//   return (
//     <div className="container mt-4">
//       <h5 className="mb-3">Select Patient for Invoice</h5>

//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filteredPatients}
//         actions={{
//           custom: {
//             label: "Manage Billing",
//             className: "btn btn-sm btn-primary",
//             handler: (row) => setSelectedPatient(row),
//           },
//         }}
//       />

//       {/* ✅ BILLING MODAL */}
//       {selectedPatient && (
//         <Modal
//           title={`Billing - ${selectedPatient.firstname} ${selectedPatient.lastname}`}
//           onClose={() => setSelectedPatient(null)}
//         >
//           <PatientBilling patient={selectedPatient} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddInvoicePage;

// import { useState } from "react";
// import { useGetReceptionistPatientsQuery } from "../../../../services/receptionistApi";
// import Modal from "../../../../components/Modal/Modal";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import ManageInvoice from "../Invoice/ManageInvoice";

// function AddInvoicePage() {
//   const { data, isLoading, isError } = useGetReceptionistPatientsQuery();
//   const [search, setSearch] = useState("");
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const patients = data || [];

//   const filteredPatients = patients.filter((p) =>
//     `${p.firstname} ${p.lastname}`.toLowerCase().includes(search.toLowerCase())
//   );

//   const columns = [
//     { key: "firstname", label: "First Name" },
//     { key: "lastname", label: "Last Name" },
//     { key: "gender", label: "Gender" },
//     { key: "bloodGroup", label: "Blood Group" },
//   ];

//   if (isLoading) return <p>Loading patients...</p>;
//   if (isError) return <p>Failed to load patients ❌</p>;

//   return (
//     <div className="container mt-4">
//       <h5>Select Patient for Invoice</h5>

//       <SearchBar value={search} onChange={setSearch} />

//       <Table
//         columns={columns}
//         data={filteredPatients}
//         actions={{
//           custom: {
//             label: "Manage Billing",
//             className: "btn btn-sm btn-primary",
//             handler: (row) => setSelectedPatient(row),
//           },
//         }}
//       />

//       {/* ✅ BILLING MODAL */}
//       {selectedPatient && (
//         <Modal
//           title={`Billing - ${selectedPatient.firstname} ${selectedPatient.lastname}`}
//           onClose={() => setSelectedPatient(null)}
//           size="lg"
//         >
        
//           <AddInvoice patientId={selectedPatient.patientId} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddInvoicePage;

import { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import Table from "../../../../components/Table/Table";
import BillingInvoiceModal from './BillingInvoiceModal';
import { useGetReceptionistPatientsQuery } from "../../../../services/receptionistApi";


function AddInvoice() {
  const { data, isLoading } = useGetReceptionistPatientsQuery();
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = data || [];

  const columns = [
    { key: "firstname", label: "First Name" },
    { key: "lastname", label: "Last Name" },
    { key: "gender", label: "Gender" },
    { key: "bloodGroup", label: "Blood Group" },
  ];

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Table
        columns={columns}
        data={patients}
        actions={{
          custom: {
            label: "Manage Billing",
            className: "btn btn-sm btn-primary",
            handler: (row) => setSelectedPatient(row),
          },
        }}
      />

      {/* ✅ BILLING MODAL */}
      {selectedPatient && (
        <Modal
          title={`Billing – ${selectedPatient.firstname} ${selectedPatient.lastname}`}
          onClose={() => setSelectedPatient(null)}
          size="lg"
        >
          <BillingInvoiceModal
            patient={selectedPatient}
            onClose={() => setSelectedPatient(null)}
          />
        </Modal>
      )}
    </>
  );
}

export default AddInvoice;

