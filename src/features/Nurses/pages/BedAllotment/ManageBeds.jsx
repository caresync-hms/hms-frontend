import React, { useState } from "react";

import { Icons } from "@/assets/Icons";
import BedsList from "./BedsList";
import AddBeds from "./AddBeds";
import Tabs from "../../../../components/Tabs/Tabs";

const tabsList = [
  {
    title: "Beds List",
    icon: Icons.PrescriptionListIcon,
    component: BedsList,
  },
  {
    title: "Add Beds",
    icon: Icons.AddPrescriptionIcon,
    component: AddBeds,
  },
];

function ManageBeds() {
  return <Tabs tabsList={tabsList} />;
}

export default ManageBeds;
