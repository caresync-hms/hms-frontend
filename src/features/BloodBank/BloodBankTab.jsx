import React from "react";
import Tabs from "../../components/Tabs/Tabs";

import BloodCountList from "./BloodCountList";
import BloodDonorList from "./BloodBankDonorList";
import { Icons } from "../../assets/Icons";
import AddBloodDonor from "./AddBloodDonor";

let tabsList = [
  {
    title: "Blood Count",
    icon: Icons.PrescriptionListIcon,
    component: BloodCountList,
  },
  {
    title: "Blood Donors",
    icon: Icons.PrescriptionListIcon,
    component: BloodDonorList,
  },
  {
    title: "Add Blood Donor",
    icon: Icons.PrescriptionListIcon,
    component: AddBloodDonor,
  },
];

function BloodBankTabs() {
  const role = localStorage.getItem("role");
  tabsList =
    role === "ROLE_PATIENT" || role === "ROLE_DOCTOR"
      ? tabsList.slice(0, 1)
      : tabsList;
  return <Tabs tabsList={tabsList} />;
}

export default BloodBankTabs;
