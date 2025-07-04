import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black px-4"
      data-aos="fade-up"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gutuBlue dark:text-white mb-4">
          Hi, I'm Gutu Rarie 👋
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          Full-stack Developer | Dreamer | Builder
        </p>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          I create clean, efficient solutions with modern technologies like Django, React, and TailwindCSS.
          Let’s build something great together!
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gutuBlue text-white rounded-full hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-gutuBlue text-gutuBlue dark:text-white rounded-full hover:bg-gutuBlue hover:text-white transition font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
