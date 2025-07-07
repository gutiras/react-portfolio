// src/components/Content.js

import React from "react";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Works from "./sections/Works";

export default function Content({ section }) {
  switch (section) {
    case "about":
      return <About />;
    case "achievements":
      return <Achievements />;
    case "contact":
      return <Contact />;
    case "resume":
      return <Resume />;
    case "works":
      return <Works />;
    default:
      return <div>Not Found</div>;
  }
}
