import React, { useState } from 'react';
import Table from '../../../../components/Table/Table';
import SearchBar from '../../../../components/SearchBar/SearchBar';

function PaymentHistory() {
  const [search, setSearch] = useState("");  

  const bills = [
    {
      id: 1,
      invoiceId: "3",
      amount: 125,
      patient: "Kyle E. Moore",
      title: "Demo Payment",
      description: "This is a demo payment",
      timestamp: "28 Apr, 2022",
      status: "unpaid",
    },
    // Add more bills here if needed
  ];

  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "patient", label: "Patient" },
    { key: "amount", label: "Amount" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "timestamp", label: "Date" },
    { key: "status", label: "Status" },
  ];

  const filteredData = bills.filter(
    (b) =>
      b.patient.toLowerCase().includes(search.toLowerCase()) ||
      b.invoiceId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='mt-3'>  
      <SearchBar
        placeholder="Search by bill id or patient name"
        value={search}
        onChange={setSearch}
      />
      <Table
        columns={columns}
        data={filteredData}
        actions={{
          view: (row) => alert(`View Bill ${row.id}`),
        }}
      />
    </div>
  );
}

export default PaymentHistory;
