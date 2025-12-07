const bloodBankConfig = {
  title: "Blood Bank Stock",

  columns: [
    { key: "bloodGroup", label: "Blood Group" },
    { key: "units", label: "Units Available" },
  ],

  data: [
    { id: 1, bloodGroup: "A+", units: 12 },
    { id: 2, bloodGroup: "A-", units: 6 },
    { id: 3, bloodGroup: "B+", units: 9 },
    { id: 4, bloodGroup: "O+", units: 15 },
  ],
};

export default bloodBankConfig;