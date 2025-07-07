import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import MenuCard from "./components/MenuCard";
import Content from "./components/Content";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 space-y-4">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Gutu Rarie Portfolio</h1>
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

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-4 h-full md:h-[90vh]">

          {/* Profile Card */}
          <div className="w-full lg:w-1/4 md:w-1/3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
            <ProfileCard />
          </div>

          {/* Horizontal Menu for small screens */}
          <div className="md:hidden">
            <MenuCard
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              layout="horizontal"
            />
          </div>

          {/* Content */}
          <div className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 overflow-y-auto scrollbar-hide">
            <Content section={activeSection} />
          </div>

          {/* Vertical Menu for medium+ screens */}
          <div className="hidden md:block md:w-[12%] bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
            <MenuCard
              setActiveSection={setActiveSection}
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
