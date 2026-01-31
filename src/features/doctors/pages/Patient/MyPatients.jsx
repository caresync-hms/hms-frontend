import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetDoctorByUserIdQuery,
  useGetPatientsByDoctorIdQuery,
} from "../../../../services/doctorsApi";

function MyPatients() {
  const [search, setSearch] = useState("");

  const { data: currentDoctorUser = [] } = useGetDoctorByUserIdQuery(
    localStorage.getItem("id"),
  );

  const {
    data: patients = [],
    isLoading,
    isError,
    error,
  } = useGetPatientsByDoctorIdQuery(currentDoctorUser.doctorId);

  const columns = [
    {
      key: "patientName",
      label: "Patient Name",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "dob",
      label: "DOB",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "medicalHistory",
      label: "Medical History",
    },
    {
      key: "admitDate",
      label: "Admit Date",
    },
    {
      key: "dischargeDate",
      label: "Discharge Date",
    },
  ];

  // 🔁 format dates only (NO data mutation)
  const mappedPatients = patients.map((p) => ({
    ...p,
    dob: p.dob ? new Date(p.dob).toLocaleDateString() : "-",
    admitDate: p.admitDate ? new Date(p.admitDate).toLocaleDateString() : "-",
    dischargeDate: p.dischargeDate
      ? new Date(p.dischargeDate).toLocaleDateString()
      : "-",
  }));

  const filteredPatients = mappedPatients.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <div className="container mt-4">Loading...</div>;

  if (isError)
    return (
      <div className="container mt-4 text-danger">
        {error?.data?.message || "Failed to load patients"}
      </div>
    );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table columns={columns} data={filteredPatients} />
    </div>
  );
}

export default MyPatients;
