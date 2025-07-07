// src/components/sections/About.js

import React from "react";

export default function About() {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          I’m <span className="font-semibold">Gutu Rarie</span>, a full-stack developer based in Ethiopia,
          passionate about building impactful software solutions that solve real-world problems.
        </p>
      </div>

      {/* Profile Summary */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 space-y-4">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          With a background in Computer Science and Engineering, I bring a deep understanding
          of both software development and the strategic thinking needed to drive meaningful digital transformation.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I have experience working with startups and banks, developing platforms like auction systems, 
          e-commerce apps, and delivery logistics — all while maintaining performance, security, and UX standards.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 text-sm">
          {[
            "JavaScript", "React", "Tailwind CSS", "Node.js",
            "Django", "MySQL", "Android Studio", "Temenos NFI",
            "Git & GitHub", "REST APIs", "Firebase", "Postman",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-center"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Work Ethic */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Approach</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          I believe in building software with a strong focus on simplicity, accessibility, and purpose. 
          I value learning, iteration, and shipping products that matter. 
          Whether working solo or in a team, I take responsibility and deliver.
        </p>
      </div>

      {/* Extras */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages & Interests</h3>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li>Fluent in Afaan Oromo, Amharic, and English</li>
          <li>Enjoys reading, music creation, and exploring emerging technologies</li>
          <li>Interested in leadership, fintech innovation, and AI systems</li>
        </ul>
      </div>
    </section>
  );
}
