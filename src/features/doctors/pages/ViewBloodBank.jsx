import React from "react";
import BloodBankTabs from "../../BloodBank/BloodBankTab";

function BloodBankPage() {
  return (
    <div className="doctor-bloodbank-page">
      <h2 className="mb-4">Blood Bank Details</h2>
      <BloodBankTabs />
    </div>
  );
}

export default BloodBankPage;
