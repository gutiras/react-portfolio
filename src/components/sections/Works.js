import React from "react";

const projects = [
  {
    title: "Auction Platform",
    description:
      "A web-based auction system where users can bid in real-time with countdown timers and admin control panel.",
    stack: ["Django", "MySQL", "Bootstrap"],
    image: "/projects/auction.jpg",
    live: "https://yourauctiondemo.com",
    code: "https://github.com/guturarie/auction-system",
  },
  {
    title: "eCommerce Web App",
    description:
      "An online shopping platform with product filtering, cart system, payment integration, and order tracking.",
    stack: ["Laravel", "PHP", "Vue.js"],
    image: "/projects/ecommerce.jpg",
    live: "https://yourecommerce.com",
    code: "https://github.com/guturarie/ecommerce-platform",
  },
  {
    title: "Delivery System",
    description:
      "A delivery tracking dashboard for customers and drivers with real-time location updates and delivery status.",
    stack: ["React", "Firebase", "Google Maps API"],
    image: "/projects/delivery.jpg",
    live: "https://yourdeliveryapp.com",
    code: "https://github.com/guturarie/delivery-system",
  },
  {
    title: "Project Manager App",
    description:
      "A team-oriented project and task tracking tool with role-based access, chat system, and Gantt visualization.",
    stack: ["Django", "Channels", "Bootstrap"],
    image: "/projects/projectmanager.jpg",
    live: "https://yourprojectmanager.com",
    code: "https://github.com/guturarie/project-manager",
  },
];

export default function Works() {
  return (
    <section className="space-y-8">
      
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          My Works
        </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-[1.02] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl overflow-hidden flex flex-col"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex flex-col space-y-3 flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
