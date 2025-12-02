import React from 'react'
import { Icons } from '../../../assets/icons';
import Tabs from "../../../components/Tabs/Tabs";
import PaymentHistory from './PaymentHistory';
const tabsList=[
  {
    title:"Payment History",
    icon:Icons.PrescriptionListIcon,
    component:PaymentHistory,
  },
];
function PaymentHistoryPage() {
  return <Tabs tabsList={tabsList}/>;
}

export default PaymentHistoryPage;
