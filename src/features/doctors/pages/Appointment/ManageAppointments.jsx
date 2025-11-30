import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import { Icons } from "../../../../assets/Icons";
import AddPrescription from "../Prescription/AddPrescription";
import AppointmentList from "./AppointmentList";
import PrescriptionList from "../Prescription/PrescriptionList";
import AddAppointment from "./AddAppointment";
import Tabs from "../../../../components/Tabs/Tabs";

const tabsList = [
    {
      title: "Appointment List",
      icon : Icons.PrescriptionListIcon,
      component: AppointmentList
    },
    {
      title:"Add Appointment",
      icon: Icons.AddPrescriptionIcon,
      component: AddAppointment
    }];

function ManageAppointments() {
 return (
    <Tabs tabsList={tabsList}/>
  )
}

export default ManageAppointments;

