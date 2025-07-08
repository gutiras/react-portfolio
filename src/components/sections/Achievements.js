// src/components/sections/Achievements.js
import React from "react";

const achievements = [
  {
    title: "Introduction to AI and Machine Learning on Google Cloud",
    platform: "Google Cloud · Coursera",
    date: "June 2025",
    description:
      "Learned tools and products for building ML pipelines, generative AI, BigQuery ML, AutoML & MLOps on Google Cloud." +
      " This course introduces the AI and machine learning (ML) offerings on Google Cloud that support the data‑to‑AI lifecycle…" +
      " :contentReference[oaicite:1]{index=1}",
    certLink: "https://coursera.org/share/YOUR_CERT_LINK",
  },
  {
    title: "Build, Train and Deploy ML Models with Keras on Google Cloud",
    platform: "Google Cloud · Coursera",
    date: "May 2025",
    description:
      "Covers building ML models with TensorFlow & Keras, improving accuracy, and deploying scalable models via Vertex AI." +
      " :contentReference[oaicite:2]{index=2}",
    certLink: "https://coursera.org/share/YOUR_CERT_LINK",
  },
  {
    title: "Web Application Technologies and Django",
    platform: "University of Michigan · Coursera",
    date: "April 2025",
    description:
      "Explored MVC patterns, Django’s request‑response cycle, HTML/CSS basics, and deployed apps on PythonAnywhere." +
      " :contentReference[oaicite:3]{index=3}",
    certLink: "https://coursera.org/share/YOUR_CERT_LINK",
  },
  {
    title: "Building Web Applications in Django",
    platform: "University of Michigan · Coursera",
    date: "March 2025",
    description:
      "Focused on Django models, views, templates, and communicating with databases through model objects." +
      " :contentReference[oaicite:4]{index=4}",
    certLink: "https://coursera.org/share/YOUR_CERT_LINK",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    platform: "Udemy",
    date: "February 2025",
    description:
      "Advanced backend development with Laravel, including routing, MVC architecture, ORM & RESTful API development.",
    certLink: "https://udemy.com/certificate/YOUR_CERT_LINK",
  },
  {
    title: "Google IT Support Professional Certificate",
    platform: "Google · Coursera",
    date: "January 2025",
    description:
      "Completed all courses in the Google IT Support Professional Certificate covering troubleshooting, system administration, and security fundamentals.",
    certLink: "https://coursera.org/share/YOUR_CERT_LINK",
  },
];

export default function Achievements() {
  return (
    <section className="space-y-8">
     
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Achievements & Certifications
        </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-3"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {ach.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {ach.platform} · {ach.date}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {ach.description}
            </p>
            <a
              href={ach.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
