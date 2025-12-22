import React from "react";
import Tabs from "../../components/Tabs/Tabs";

import BloodCountList from "./BloodCountList";
import BloodDonorList from "./BloodBankDonorList";
import { Icons } from "../../assets/icons";

const tabsList = [
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
];

function BloodBankTabs() {
  return <Tabs tabsList={tabsList} />;
   
}

export default BloodBankTabs;
