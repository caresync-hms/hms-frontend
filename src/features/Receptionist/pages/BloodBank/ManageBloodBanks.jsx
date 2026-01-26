import React, { useState } from "react";

import { Icons } from "../../../../assets/Icons";

import Tabs from "../../../../components/Tabs/Tabs";
import BloodBankList from './BloodBankList';

const tabsList = [
    {
      title: "Blood Bank List",
      icon : Icons.PrescriptionListIcon,
      component: BloodBankList
    },
   ];

function ManageBloodBank() {
 return (
    <Tabs tabsList={tabsList}/>
  )
}

export default ManageBloodBank;

