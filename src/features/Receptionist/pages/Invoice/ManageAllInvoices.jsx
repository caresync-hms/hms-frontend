import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AllInvoiceList from "./AllInvoiceList";

function ManageAllInvoices() {
  const tabsList = [
    {
      title: "All Invoices",
      icon: Icons.PrescriptionListIcon,
      component: AllInvoiceList,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default ManageAllInvoices;
