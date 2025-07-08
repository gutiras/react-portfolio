import React, { useRef, useEffect } from "react";
import About from "./sections/About";
import Works from "./sections/Works";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Tools from "./sections/Tools";
import Achievements from "./sections/Achievements";

export default function Content({ sectionRefs }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div
      ref={containerRef}
       
      className="h-full overflow-y-auto space-y-20 scroll-smooth px-4  scrollbar-hide"
    >
      <div
        ref={sectionRefs.about}
         data-aos="fade-up"
        className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <About />
      </div>

      <div
        ref={sectionRefs.tools}
        className="  my-10 bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <Tools />
      </div>

      <div
        ref={sectionRefs.works}
        className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <Works />
      </div>
      <div
        ref={sectionRefs.achievements}
        className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <Achievements />
      </div>
      
      <div
        ref={sectionRefs.contact}
        className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <Contact />
      </div>

      <div
        ref={sectionRefs.resume}
        className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-xl p-6 text-gray-900 dark:text-gray-100"
      >
        <Resume />
      </div>
    </div>
  );
}
