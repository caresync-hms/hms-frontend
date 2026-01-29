// import { Icons } from "../../../../assets/icons";
// import Tabs from "../../../../components/Tabs/Tabs";
// import AllInvoiceList from "./AllInvoiceList";

// function ManageAllInvoices() {
//   const tabsList = [
//     {
//       title: "All Invoices",
//       icon: Icons.PrescriptionListIcon,
//       component: AllInvoiceList,
//     },
//   ];

//   return <Tabs tabsList={tabsList} />;
// }

// export default ManageAllInvoices;


import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import AllInvoiceList from "./AllInvoiceList";
import AddInvoice from "./AddInvoice";

function ManageAllInvoices() {
  const tabsList = [
    {
      title: "Add Invoice",
      icon: Icons.AddIcon, // use any suitable icon
      component: AddInvoice,
    },
    {
      title: "All Invoices",
      icon: Icons.PrescriptionListIcon,
      component: AllInvoiceList,
    },
  ];

  return <Tabs tabsList={tabsList} />;
}

export default ManageAllInvoices;
