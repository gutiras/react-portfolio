// src/components/menuItems.js
import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
  FaTrophy,
} from "react-icons/fa";

const menuItems = [
  { key: "about", label: "About", icon: <FaUser /> },
  { key: "works", label: "Works", icon: <FaBriefcase /> },
  { key: "achievements", label: "Achievements", icon: <FaTrophy /> },
  { key: "contact", label: "Contact", icon: <FaEnvelope /> },
  { key: "resume", label: "Resume", icon: <FaFileAlt /> },

];

export default menuItems;
