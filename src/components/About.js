import React from "react";
import { FiDownload } from "react-icons/fi";
import Profile from '../assets/Profile.png';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
         
          <img src={Profile} alt="Gutu Rarie" className="w-64 h-64 object-cover rounded-2xl shadow-lg" />
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gutuBlue dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              I'm <strong>Gutu Rarie</strong>, a full-stack developer from Ethiopia who loves building
              meaningful software. I bring ideas to life with elegant UIs, robust backend logic, and teamwork.
              I believe technology should solve real-world problems and be delightful to use.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 mb-6">
              <li>🎓 CSE Graduate</li>
              <li>💼 Developer at Cooperative Bank of Oromia</li>
              <li>⚙️ Favorite Stack: Django + React</li>
              <li>🌍 Based in Addis Ababa, Ethiopia</li>
            </ul>

            {/* Resume Button */}
            <a
              href="/resume.pdf" // You can update the link to your real resume
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gutuBlue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FiDownload />
              Download CV
            </a>
          </div>
        </div>

        {/* Embedded YouTube Video */}
   {/* Section Heading */}
<div className="text-center mb-10" data-aos="fade-up">
  <h3 className="text-2xl sm:text-3xl font-semibold text-gutuBlue dark:text-white mb-2">
    🎬 Get to Know Me
  </h3>
  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
    Here's a short introduction about who I am, what I love, and how I work.
  </p>
</div>

{/* Responsive Video Container */}
<div
  className="max-w-5xl mx-auto aspect-video min-h-[300px] sm:min-h-[400px] rounded-xl overflow-hidden shadow-2xl"
  data-aos="fade-up"
>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
    title="Gutu Rarie Intro Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    allowFullScreen
    className="w-full h-full"
  />
</div>



       

      </div>
    </section>
  );
};

export default About;
