import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
  FaTrophy,
  FaTools
} from "react-icons/fa";

export default function MenuCard({ setActiveSection, activeSection, layout }) {
  const menuItems = [
    { key: "about", label: "About", icon: <FaUser /> },
    { key: "tools", label: "Tools", icon: <FaTools /> },
    { key: "works", label: "Works", icon: <FaBriefcase /> },
    { key: "achievements", label: "Achievements", icon: <FaTrophy /> },
    { key: "contact", label: "Contact", icon: <FaEnvelope /> },
    { key: "resume", label: "Resume", icon: <FaFileAlt /> },
   
  ];

  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`${
        isHorizontal
          ? "flex gap-4 overflow-x-auto p-1"
          : "flex flex-col gap-6 p-2"
      }`}
    >
      {menuItems.map((item) => {
        const isActive = item.key === activeSection;
        return (
          <div
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className={`flex flex-col items-center justify-center space-y-2 cursor-pointer transition ${
              isHorizontal ? "min-w-[70px] w-[70px]" : "w-full"
            }`}
          >
            {/* ICON CIRCLE ONLY */}
            <div
              className={`p-5 rounded-full shadow-md transition-all duration-300 ${
                isActive
                  ? "border-2 border-blue-500 scale-110"
                  : "border border-transparent"
              } bg-white dark:bg-gray-800`}
            >
              <span
                className={`text-xl ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 dark:text-white"
                }`}
              >
                {item.icon}
              </span>
            </div>

            {/* LABEL */}
            <span
              className={`text-xs font-medium text-center ${
                isActive
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
