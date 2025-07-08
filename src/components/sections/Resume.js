import React from "react";
import MyResume from '../../assets/MyResume.pdf'; // Adjust the path as necessary
export default function Resume() {
  return (
    <section className="h-full flex flex-col space-y-4">
      
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          My Resume
        </h2>
      <div className="flex-grow border rounded-lg overflow-hidden shadow-md">
        <iframe
          src={MyResume}
          title="Gutu Rarie Resume"
          className="w-full h-[80vh]"
          frameBorder="0"
        />
      </div>

      <a
        href="/resume.pdf"
        download="Gutu_Rarie_Resume.pdf"
        className="w-1/4 inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
