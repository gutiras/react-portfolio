import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Auction System",
    description:
      "A web platform for users to list and bid on items in real-time with Django backend.",
    tech: ["Django", "Bootstrap", "MySQL"],
    github: "https://github.com/guturarie/auction-system",
  },
  {
    title: "eCommerce Platform",
    description:
      "Full-stack eCommerce site with product listings, cart, and payment integration.",
    tech: ["React", "Django", "Stripe"],
    github: "https://github.com/guturarie/ecommerce-platform",
  },
  {
    title: "Delivery System",
    description:
      "A logistics management system for delivery tracking and route optimization.",
    tech: ["Django", "Leaflet", "REST API"],
    github: "https://github.com/guturarie/delivery-system",
  },
  {
    title: "Personal Portfolio",
    description:
      "A sleek portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/guturarie/react-portfolio",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with WebSocket integration, user authentication, and message history.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/guturarie/chat-application",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard displaying live weather info using OpenWeatherMap API with beautiful charts.",
    tech: ["React", "Chart.js", "API Integration"],
    github: "https://github.com/guturarie/weather-dashboard",
  },
];


// Optional: unique tech stacks for filter
const allTech = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();

const Projects = () => {
  const [filter, setFilter] = useState("");

  const filteredProjects = filter
    ? projects.filter((p) => p.tech.includes(filter))
    : projects;

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gutuBlue dark:text-white mb-12 tracking-wide">
          Projects
        </h2>

        {/* Tech filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-1 rounded-full font-semibold text-sm ${
              !filter
                ? "bg-gutuBlue text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gutuBlue hover:bg-gutuBlue hover:text-white transition"
            }`}
            aria-pressed={!filter}
          >
            All
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-1 rounded-full font-semibold text-sm ${
                filter === tech
                  ? "bg-gutuBlue text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gutuBlue hover:bg-gutuBlue hover:text-white transition"
              }`}
              aria-pressed={filter === tech}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-7 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border-2 border-transparent hover:border-gutuBlue cursor-pointer flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-gutuBlue dark:text-white mb-3 tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gutuBlue text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors self-start"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-center col-span-full text-gray-600 dark:text-gray-400">
              No projects found for <strong>{filter}</strong>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
