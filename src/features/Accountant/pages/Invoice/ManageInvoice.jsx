import { Icons } from "@/assets/Icons";

import InvoiceList from "./InvoiceList";
import AddInvoice from "./AddInvoice";
import Tabs from "../../../../components/Tabs/Tabs";

const tabsList = [
  {
    title: "Invoice List",
    icon: Icons.PrescriptionListIcon,
    component: InvoiceList,
  },
  {
    title: "Add Invoice",
    icon: Icons.Add,
    component: AddInvoice,
  },
];

function ManageInvoice() {
  return <Tabs tabsList={tabsList} />;
}

export default ManageInvoice;
