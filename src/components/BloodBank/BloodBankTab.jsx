import React from "react";
import Tabs from "../Tabs/Tabs"

import BloodCountList from "./BloodCountList";
import BloodDonorList from "./BloodBankDonorList";
import { Icons } from './../../assets/icons';

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
  return (
    <div>
      <h3 className="mb-3">Blood Bank</h3>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default BloodBankTabs;
