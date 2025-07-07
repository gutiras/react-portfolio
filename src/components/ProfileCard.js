import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Profile from '../assets/ProfileDark.png';
export default function ProfileCard() {
  return (
    <div className="space-y-4 text-gray-900 dark:text-white">
      {/* Profile Image */}
      <div className="w-full">
        <img
          src={Profile}
          alt="Gutu Rarie"
          className="w-full h-40 object-cover rounded-xl mb-2"
        />
      </div>

      {/* Name & Job Title */}
      <div className="bg-[#f3f3f3] dark:bg-gray-700 p-3 rounded-xl text-center">
        <h1 className="text-lg font-semibold">Gutu Rarie Denbela</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300">Software Developer</p>
      </div>

      {/* Social Media */}
      <div className="bg-[#f3f3f3] dark:bg-gray-700 p-3 rounded-xl flex justify-around items-center">
        <a href="#" className="bg-white dark:bg-gray-800 p-2 rounded-full shadow">
          <FaFacebook className="text-blue-600" />
        </a>
        <a href="#" className="bg-white dark:bg-gray-800 p-2 rounded-full shadow">
          <FaTwitter className="text-sky-500" />
        </a>
        <a href="#" className="bg-white dark:bg-gray-800 p-2 rounded-full shadow">
          <FaLinkedin className="text-blue-700" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="bg-[#f3f3f3] dark:bg-gray-700 p-4 rounded-xl space-y-4">
        {[
          { icon: <FaPhone className="text-green-500" />, label: "Phone", value: "+251-911-000-000" },
          { icon: <FaEnvelope className="text-red-500" />, label: "Email", value: "guturarie@gmail.com" },
          { icon: <FaMapMarkerAlt className="text-yellow-500" />, label: "Location", value: "Addis Ababa, Ethiopia" },
          { icon: <FaBirthdayCake className="text-pink-500" />, label: "Birthday", value: "May 20, 1999" },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-white dark:bg-gray-800 p-2 rounded shadow">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-300">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Button */}
      <div className="text-center">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white py-2 px-4 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
