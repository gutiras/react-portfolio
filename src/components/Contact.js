import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMessageCircle,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiAtSign,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/guturarie",
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/guturarie",
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/guturarie",
    icon: <FiTwitter />,
  },
  {
    name: "Email",
    url: "mailto:guturarie@gmail.com",
    icon: <FiAtSign />,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/meokdbqo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("🎉 Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setSubmitted(true);
      } else {
        setStatus("⚠️ There was a problem. Please try again.");
      }
    } catch {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gutuBlue dark:text-white mb-16 tracking-wide">
          Contact Me
        </h2>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 items-start">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-lg space-y-6"
                noValidate
                aria-live="polite"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <div className="flex items-center border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-gutuBlue transition">
                    <FiUser className="ml-3 text-gray-400 dark:text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="flex-grow px-4 py-2 bg-transparent rounded-r-md text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <div className="flex items-center border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-gutuBlue transition">
                    <FiMail className="ml-3 text-gray-400 dark:text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="flex-grow px-4 py-2 bg-transparent rounded-r-md text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <div className="flex items-start border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-gutuBlue transition">
                    <FiMessageCircle className="ml-3 mt-3 text-gray-400 dark:text-gray-400" />
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="flex-grow px-4 py-2 bg-transparent rounded-r-md resize-none text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 bg-gutuBlue text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <FiSend size={20} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Status */}
                {status && (
                  <p
                    className={`mt-4 text-center font-medium ${
                      status.startsWith("🎉")
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-lg text-center">
                <h3 className="text-3xl font-bold text-gutuBlue dark:text-white mb-4">
                  Thanks for reaching out!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I’ll get back to you as soon as I can.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-3 bg-gutuBlue text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Social Media Links */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold text-gutuBlue dark:text-white mb-6">
              Find me on
            </h3>
            <div className="flex gap-6 text-3xl text-gutuBlue dark:text-white">
              {socialLinks.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-gutuBlue rounded"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="mt-10 text-sm text-gray-500 dark:text-gray-400 italic text-center lg:text-left">
              I usually respond within 24–48 hours.  
              You can also email me directly at{" "}
              <a
                href="mailto:guturarie@gmail.com"
                className="underline text-blue-500 hover:text-blue-600"
              >
                guturarie@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
