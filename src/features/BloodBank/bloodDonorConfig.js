const bloodDonorConfig = {
  title: "Blood Donor List",

  columns: [
    { key: "id", label: "id" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "gender", label: "Gender" },
    { key: "bloodGroup", label: "Blood Group" },
    { key: "lastDonationDate", label: "Last Donation Date" },
  ],

  data: [
    {
      id: 5,
      name: "Dennis Makur",
      age: 25,
      gender: "Male",
      bloodGroup: "A+",
      lastDonationDate: "14 Oct 2014",
    },
    {
      id: 2,
      name: "James Void",
      age: 29,
      gender: "Male",
      bloodGroup: "B-",
      lastDonationDate: "26 Apr 2022",
    },
  ],
};

export default bloodDonorConfig;