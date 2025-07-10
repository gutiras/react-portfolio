import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Profile from "../assets/ProfileDark.png";

export default function ProfileCard() {
  return (
    <div
      className="space-y-4 text-gray-900 dark:text-white"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {/* Profile Image */}
      <div className="w-full" data-aos="zoom-in" data-aos-delay="100">
        <img
          src={Profile}
          alt="Gutu Rarie"
          className="w-full h-40 object-cover rounded-xl mb-2"
        />
      </div>

      {/* Name & Job Title */}
      <div
        className="bg-[#f3f3f3] dark:bg-gray-700 p-3 rounded-xl text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-lg font-semibold">Gutu Rarie Denbela</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Full Stack Developer
        </p>
      </div>

      {/* Social Media */}
      <div
        className="bg-[#f3f3f3] dark:bg-gray-700 p-3 rounded-xl flex justify-around items-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a
          href="https://www.linkedin.com/in/gutusani/"
          className="bg-white dark:bg-gray-800 p-2 rounded-full shadow"
        >
          <FaLinkedin className="text-blue-700" />
        </a>
        <a
          href="https://www.facebook.com/guturarie"
          className="bg-white dark:bg-gray-800 p-2 rounded-full shadow"
        >
          <FaFacebook className="text-blue-600" />
        </a>
        <a
          href="https://x.com/RarieGutu"
          className="bg-white dark:bg-gray-800 p-2 rounded-full shadow"
        >
          <FaTwitter className="text-sky-500" />
        </a>
        
      </div>

      {/* Contact Info */}
      <div
        className="bg-[#f3f3f3] dark:bg-gray-700 p-4 rounded-xl space-y-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {[
          {
            icon: <FaPhone className="text-green-500" />,
            label: "Phone",
            value: "+251-947-132-966",
          },
          {
            icon: <FaEnvelope className="text-red-500" />,
            label: "Email",
            value: "guturarie@gmail.com",
          },
          {
            icon: <FaMapMarkerAlt className="text-yellow-500" />,
            label: "Location",
            value: "Addis Ababa, Ethiopia",
          },
          {
            icon: <FaBirthdayCake className="text-pink-500" />,
            label: "Birthday",
            value: "Aug 17, 1999",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-white dark:bg-gray-800 p-2 rounded shadow">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {item.label}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
