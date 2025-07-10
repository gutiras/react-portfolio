import React from "react";
import {
  SiJavascript, SiReact, SiTailwindcss, SiPhp, SiDjango,
  SiMysql, SiAndroidstudio, SiPython, SiPostman, SiGithub,SiBootstrap,
  SiLaravel,SiDocker,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
export default function TechStack() {
  const stackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Kony Visualizer", icon: <FaMobileAlt className="text-purple-600" /> }, // fallback if SiKony doesn't exist
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Django", icon: <SiDjango className="text-emerald-700" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Tech Stack & Tools
        </h2>
        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm shadow-sm hover:scale-105 transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
