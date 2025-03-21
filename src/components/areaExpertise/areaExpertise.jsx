"use client";
import React from "react";
import Link from "next/link";

const expertiseFields = [
  {
    title: "Medical Consultancy",
    description: "Expert guidance for healthcare professionals and institutions.",
    image: "/images/medical.jpg",
  },
  {
    title: "Educational Consultancy",
    description: "Helping students and educators optimize learning strategies.",
    image: "/images/education.jpg",
  },
  {
    title: "Career Guidance",
    description: "Helping individuals navigate career paths and achieve professional goals.",
    image: "/images/career.jpg",
  },
  {
    title: "Financial Advisory",
    description: "Providing insights on investments, wealth management, and planning.",
    image: "/images/finance.jpg",
  },
  {
    title: "Legal Consultancy",
    description: "Expert legal advice for businesses and individuals.",
    image: "/images/legal.jpg",
  },
  {
    title: "Technology & IT Solutions",
    description: "Consultation for digital transformation, cybersecurity, and IT solutions.",
    image: "/images/technology.jpg",
  },
  {
    title: "Marketing & Branding",
    description: "Helping businesses build strong brand identities and effective marketing strategies.",
    image: "/images/marketing.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {expertiseFields.slice(0, 6).map((field, index) => (
          <Link href="/appointments" key={index}>
            <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105">
              {/* Background Image */}
              <img src={field.image} alt={field.title} className="w-full h-full object-cover" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-center transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white">{field.title}</h3>
                <p className="text-white mt-2 px-4">{field.description}</p>
              </div>
            </div>
          </Link>
        ))}

        {/* Marketing & Branding Positioned Below Legal Consultancy */}
        <Link href="/appointments">
          <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 lg:col-start-2 lg:col-span-1">
            {/* Background Image */}
            <img src={expertiseFields[6].image} alt={expertiseFields[6].title} className="w-full h-full object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-center transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white">{expertiseFields[6].title}</h3>
              <p className="text-white mt-2 px-4">{expertiseFields[6].description}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
