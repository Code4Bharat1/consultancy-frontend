"use client";
import React from "react";

const expertiseFields = [
  {
    title: "Medical Consultancy",
    description: "Expert guidance for healthcare professionals and institutions.",
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
  },
  {
    title: "Educational Consultancy",
    description: "Helping students and educators optimize learning strategies.",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    title: "Career Guidance",
    description: "Helping individuals navigate career paths and achieve professional goals.",
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    title: "Financial Advisory",
    description: "Providing insights on investments, wealth management, and planning.",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    title: "Legal Consultancy",
    description: "Expert legal advice for businesses and individuals.",
    gradient: "bg-gradient-to-br from-yellow-500 to-yellow-700",
  },
  {
    title: "Technology & IT Solutions",
    description: "Consultation for digital transformation, cybersecurity, and IT solutions.",
    gradient: "bg-gradient-to-br from-teal-500 to-teal-700",
  },
  {
    title: "Marketing & Branding",
    description: "Helping businesses build strong brand identities and effective marketing strategies.",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-700",
  }
];

export default function AreaOfExpertise() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-20 bg-gray-100">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">Our Areas of Expertise</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          We provide industry-leading consultancy across multiple domains, helping professionals and businesses succeed.
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {expertiseFields.slice(0, 6).map((field, index) => (
          <div 
            key={index} 
            className={`${field.gradient} text-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 text-center`}
          >
            <h3 className="text-2xl font-semibold">{field.title}</h3>
            <p className="mt-2">{field.description}</p>
          </div>
        ))}

        {/* Centered Marketing & Branding Box */}
        <div 
          className={`${expertiseFields[6].gradient} text-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 text-center col-span-full lg:col-start-2 lg:col-end-3`}
        >
          <h3 className="text-2xl font-semibold">{expertiseFields[6].title}</h3>
          <p className="mt-2">{expertiseFields[6].description}</p>
        </div>
      </div>
    </section>
  );
}
