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
  { key: "resume", label: "Resume", icon: <FaFileAlt /> },
  { key: "contact", label: "Contact", icon: <FaEnvelope /> },
  { key: "achievements", label: "Achievements", icon: <FaTrophy /> },
];

export default menuItems;
