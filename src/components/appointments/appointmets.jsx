"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "../../components/layout/navbar.jsx";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    category: "",
    date: "",
    timeSlot: "",
    name: "",
    mobile: "",
  });

  const [token, setToken] = useState("");
  const [blurBg, setBlurBg] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const handleFocus = () => setBlurBg(true);
  const handleBlur = () => setBlurBg(false);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid =
    formData.category !== "" &&
    formData.date !== "" &&
    formData.timeSlot !== "" &&
    formData.name !== "" &&
    formData.mobile !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const bookingResponse = await axios.post(
        "http://localhost:3046/api/appointments/book",
        {
          type: formData.category,
          date: formData.date,
          time: formData.timeSlot,
          name: formData.name,
          mobile: formData.mobile,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (bookingResponse?.data?.success) {
        const appointmentId = bookingResponse.data.appointment._id;

        const paymentResponse = await axios.post(
          "http://localhost:3046/api/appointments/initiate-payment",
          { appointmentId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (paymentResponse?.data?.success) {
          const paymentLink = paymentResponse.data.paymentLink;
          window.open(paymentLink, "_blank");
        }
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col">
      <Navbar />
      {/* Dark Overlay with Conditional Blur */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 ${
          blurBg ? "backdrop-blur-md" : ""
        }`}
      ></div>

      {/* Main Section */}
      <div className="relative z-10 flex-grow flex items-center justify-center py-16">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Book an Appointment
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Choose a category, pick a date and time, and enter your details to book your consultation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Selection */}
            <div className="mb-6">
              <label className="block text-blue-600 font-semibold mb-2">Select Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="General Consultation">General Consultation</option>
                <option value="Dental Checkup">Dental Checkup</option>
                <option value="Eye Checkup">Eye Checkup</option>
                <option value="Specialist Visit">Specialist Visit</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="mb-6">
              <label className="block text-blue-600 font-semibold mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Time Slot Selection */}
            <div className="mb-6">
              <label className="block text-blue-600 font-semibold mb-2">Select Time Slot</label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a time</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
              </select>
            </div>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-blue-600 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-6">
              <label className="block text-blue-600 font-semibold mb-2">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mobile number"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isFormValid
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
