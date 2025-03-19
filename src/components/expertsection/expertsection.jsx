"use client";
import React from "react";

const experts = [
  {
    name: "Dr. Sarah Thompson",
    role: "Medical Consultant",
    description: "Over 15 years of experience in medical consultancy, helping healthcare professionals navigate the industry.",
    image: "/experts/expert1.jpg",
  },
  {
    name: "Mark Robinson",
    role: "Financial Advisor",
    description: "Specialist in investment strategies and wealth management, guiding businesses to financial success.",
    image: "/experts/expert2.jpg",
  },
  {
    name: "Emily Carter",
    role: "Career Coach",
    description: "Expert in career guidance and job market trends, helping professionals reach their full potential.",
    image: "/experts/expert3.jpg",
  },
  {
    name: "James Anderson",
    role: "Legal Consultant",
    description: "Experienced legal advisor providing businesses with compliance and legal risk mitigation strategies.",
    image: "/experts/expert4.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Educational Consultant",
    description: "Helping institutions and students with curriculum development and academic career planning.",
    image: "/experts/expert5.jpg",
  },
  {
    name: "Aquib Hingwala",
    role: "IT Expert & Prompt Engineer",
    description: "Backend and Frontend master helping juniors make impactful websites using chatgpt.",
    image: "/experts/expert6.jpg",
  }
];

export default function ExpertSection() {
  return (
    <section id="experts" className="py-24 px-6 md:px-20 bg-gray-50">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">Meet Our Experts</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Our experienced consultants provide top-tier guidance across multiple industries.
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {experts.map((expert, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img 
              src={expert.image} 
              alt={expert.name} 
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-500"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">{expert.name}</h3>
            <p className="text-orange-600 font-medium">{expert.role}</p>
            <p className="text-gray-700 text-md mt-3">{expert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
