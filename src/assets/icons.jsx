// src/assets/icons.jsx

// --- Import from various icon sets ---
import {
  AiFillHome,
  AiOutlineSetting,
  AiOutlineLogout,
  AiFillBell,
} from "react-icons/ai";
import {
  MdDashboard,
  MdMedicalServices,
  MdInventory,
  MdPeopleAlt,
  MdLocalPharmacy,
  MdAssessment,
} from "react-icons/md";
import {
  FaUserMd,
  FaUserNurse,
  FaUserInjured,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaVials,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { LuHospital } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";

import { FaRegMoneyBillAlt } from "react-icons/fa";

export const Icons = {
  // 🔹 Core Navigation
  Dashboard: <MdDashboard />,
  Home: <AiFillHome />,

  // 🔹 User Management
  Admin: <RiAdminFill />,
  Doctor: <FaUserMd />,
  Nurse: <FaUserNurse />,
  Patient: <FaUserInjured />,
  Accountant: <FaRegMoneyBillAlt />,
  Staff: <MdPeopleAlt />,

  // 🔹 Medical & Operations
  Appointment: <FaCalendarCheck />,
  Consultation: <MdMedicalServices />,
  Prescription: <GiMedicines />,
  Pharmacy: <MdLocalPharmacy />,
  Laboratory: <FaVials />,
  Reports: <MdAssessment />,
  Inventory: <MdInventory />,
  Billing: <FaFileInvoiceDollar />,
  Checkup: <BsFillClipboard2CheckFill />,

  // 🔹 Others
  Hospital: <LuHospital />,
  Health: <GiHealthNormal />,
  Notifications: <AiFillBell />,
  Settings: <AiOutlineSetting />,
  Logout: <AiOutlineLogout />,
  Alert: <IoNotifications />,
  InfoCircle: <FaInfoCircle />,
};
