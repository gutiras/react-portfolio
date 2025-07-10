// src/components/sections/Achievements.js
import React from "react";

const achievements = [
  {
    title: "Introduction to AI and Machine Learning on Google Cloud",
    platform: "Google Cloud · Coursera",
    date: "June 2025",
    description:
      "Learned tools and products for building ML pipelines, generative AI, BigQuery ML, AutoML & MLOps on Google Cloud." +
      " This course introduces the AI and machine learning (ML) offerings on Google Cloud that support the data‑to‑AI lifecycle…",
    certLink: "https://coursera.org/share/922ee8ecacabcb3c2b3c022361027244",
  },
  {
    title: "Build, Train and Deploy ML Models with Keras on Google Cloud",
    platform: "Google Cloud · Coursera",
    date: "May 2025",
    description:
      "Covers building ML models with TensorFlow & Keras, improving accuracy, and deploying scalable models via Vertex AI.",
    certLink: "https://coursera.org/share/90131a147a3aad4a9201cfb346fa923d",
  },
  {
    title: "Web Application Technologies and Django",
    platform: "University of Michigan · Coursera",
    date: "April 2024",
    description:
      "Explored MVC patterns, Django’s request‑response cycle, HTML/CSS basics, and deployed apps on PythonAnywhere.",
    certLink: "https://coursera.org/share/621f313ec207a1adc130145a1e661ae3",
  },
  {
    title: "Building Web Applications in Django",
    platform: "University of Michigan · Coursera",
    date: "March 2024",
    description:
      "Focused on Django models, views, templates, and communicating with databases through model objects.",
    certLink: "https://coursera.org/share/7dcad7752b15132e37cc66b779348e5d",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    platform: "Udemy",
    date: "February 2024",
    description:
      "Advanced backend development with Laravel, including routing, MVC architecture, ORM & RESTful API development.",
    certLink: "https://coursera.org/share/ac357ae9705daa2e5b0deef4bb0269ec",
  },
  {
    title: "Google IT Support Professional Certificate",
    platform: "Google · Coursera",
    date: "January 2025",
    description:
      "Completed all courses in the Google IT Support Professional Certificate covering troubleshooting, system administration, and security fundamentals.",
    certLink: "https://www.credly.com/badges/67e70c87-fe0b-4246-ab8f-1654c71919cf/linked_in?t=sudzlp",
  },
  {
    title: "Spring - Ecosystem and Core Certificate",
    platform: "LearnQuest · Coursera",
    date: "March 2025",
    description:
    "Gained foundational understanding of the Spring Framework, including its core features such as Dependency Injection, Spring Boot, MVC architecture, data access, and application configuration. Built and deployed scalable Java applications using best practices in modular design and development.",
    certLink: "https://coursera.org/share/f67b6225659bb24afbfbe8b18955cad1",
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
