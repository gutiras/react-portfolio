import React, { useState, useRef, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import MenuCard from "./components/MenuCard";
import Content from "./components/Content";
import { FaSun, FaMoon } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
  AOS.init({
    duration: 800,
    offset: 120,
    once: true, // animate only once
  });
}, []);

  // refs for each section
  const sectionRefs = {
    about: useRef(null),
    works: useRef(null),
    tools: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
    achievements: useRef(null),
  };


  // On menu click: set active + scroll smoothly with delay for DOM stability
  const handleMenuClick = (section) => {
    setActiveSection(section);
    setTimeout(() => {
      sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 space-y-4">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Well Come!</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md transition hover:scale-110"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300 text-lg" />
            )}
          </button>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-4 h-full md:h-[90vh]">

          {/* Profile */}
          <div className="w-full md:w-1/4 lg:w-1/5 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
            <ProfileCard />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MenuCard
              setActiveSection={handleMenuClick}
              activeSection={activeSection}
              layout="horizontal"
            />
          </div>

          {/* Content */}
          <div className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 overflow-y-auto scrollbar-hide scroll-smooth">
            <Content sectionRefs={sectionRefs} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block md:w-[12%] bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
            <MenuCard
              setActiveSection={handleMenuClick}
              activeSection={activeSection}
              layout="vertical"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
