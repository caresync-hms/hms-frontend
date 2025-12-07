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
  MdPayment,
  MdHistory,
} from "react-icons/md";
import {
  FaUserMd,
  FaUserNurse,
  FaUserInjured,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaVials,
} from "react-icons/fa";
import { RiAdminFill, RiUserSettingsFill } from "react-icons/ri";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { LuHospital } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsKey } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbReportMedical } from "react-icons/tb";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineBloodtype } from "react-icons/md";
import { MdBackup } from "react-icons/md";
import { MdArrowDropDown, MdArrowDropUp, MdArrowRight } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

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
  // Reports: <MdAssessment />,
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
  PersonFillGear: <BsPersonFillGear />,
  PersonCircle: <BsPersonCircle />,
  Email: <MdOutlineMailOutline />,
  Key: <BsKey />,
  Menu: <AiOutlineMenu />,
  Notice: <FaStickyNote />,
  Trash: <IoTrashOutline />,
  Wrench: <FaWrench />,
  Add: <IoMdAdd />,
  Backup: <MdBackup />,
  ArrowUp: <MdArrowDropUp />,
  ArrowDown: <MdArrowDropDown />,
  ArrowRight: <MdArrowRight />,
  DownLoad: <IoMdCloudDownload />,

  //Doctor
  DoctorProfile: <CgProfile />,
  Reports: <TbReportMedical />,
  MedicalPrescription: <FaPrescriptionBottleMedical />,
  Appointments: <MdOutlineAssignment />,
  PrescriptionListIcon: <IoList />,
  BloodBankIcon: <MdOutlineBloodtype />,

  //Patient
  MedicalReports: <TbReportMedical />,
  Payment: <MdPayment />,
  History: <MdHistory />,
  UserProfile: <RiUserSettingsFill />,
  BloodBank: <FaDroplet />,
  Bed: <FaBed />,
};
