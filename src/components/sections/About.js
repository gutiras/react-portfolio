import React from "react";

export default function About() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
          I’m <span className="font-semibold">Gutu Rarie</span>, a full-stack developer based in Ethiopia,
          passionate about building impactful software solutions that solve real-world problems.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Summary */}
        <div className="transition duration-300 ease-in-out transform hover:scale-[1.02] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-3">
            Profile Summary
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With a background in Computer Science and Engineering, I bring a deep understanding
            of software development and strategic thinking needed to drive digital transformation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
            I've developed auction systems, e-commerce apps, and logistics tools — optimized for performance, security, and user experience.
          </p>
        </div>

        {/* Work Ethic */}
        <div className="transition duration-300 ease-in-out transform hover:scale-[1.02] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">My Approach</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I value simplicity, accessibility, and purpose-driven code. Whether solo or in a team, I build software with clarity, integrity, and ownership — delivering what matters.
          </p>
        </div>
      </div>

      {/* Languages & Interests */}
      <div className="transition duration-300 ease-in-out transform hover:scale-[1.02] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-3">
          Languages & Interests
        </h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Fluent in Afaan Oromo, Amharic, and English</li>
          <li>Music production, sound exploration, reading</li>
          <li>Fascinated by AI, leadership, and fintech innovation</li>
        </ul>
      </div>
    </section>
  );
}
