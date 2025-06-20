import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import l1 from "../assets/l1.jpg"; // Replace with your own images
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";

const customMurtis = [
  {
    id: 501,
    name: "Personalized Lakshmi Idol",
    description: "Handcrafted as per your design preferences.",
    image: l1,
  },
  {
    id: 502,
    name: "Custom Lakshmi Idol",
    description: "Tailored to Vastu and spiritual needs.",
    image: l2,
  },
  {
    id: 503,
    name: "Family Temple Murthi",
    description: "Designed to match your home mandir.",
    image: l3,
  },
];

const CustomMurthi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 py-40 px-6">
      {/* Page Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">✨ Custom Murthi Creations</h1>
        <p className="text-lg text-gray-600 font-semibold">
          Your vision, our craftsmanship — handcrafted divine idols made just for you.
        </p>
      </motion.div>

      {/* Murthi Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {customMurtis.map((murthi) => (
          <motion.div
            key={murthi.id}
            className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={murthi.image}
              alt={murthi.name}
              className="w-full h-96 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-yellow-600">{murthi.name}</h3>
              <p className="text-gray-600 mt-2">{murthi.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Book Appointment CTA */}
      <motion.div
        className="text-center mt-16 bg-white rounded-xl shadow-md p-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">📅 Book a Custom Idol Appointment</h2>
        <p className="text-gray-700 mb-6">
          Discuss your design preferences with our artisan team. Let’s create a spiritual masterpiece together.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          Book Appointment
        </button>
      </motion.div>
    </div>
  );
};

export default CustomMurthi;
