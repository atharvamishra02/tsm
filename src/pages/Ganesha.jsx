import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import ganesha from "../assets/ganesha.mp4";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const GaneshaMurti = [
  { id: 101, name: "Ganesh in Meditation", price: 350, image: g1 },
  { id: 102, name: "Dancing Ganapati", price: 420, image: g2 },
  { id: 103, name: "Ganesha with Modaks", price: 500, image: g3 },
  { id: 104, name: "Blessing Ganesha Idol", price: 390, image: g4 },
  { id: 105, name: "Antique Brass Ganesha", price: 450, image: g5 },
  { id: 106, name: "Colorful Ganesh Idol", price: 400, image: g6 },
];

const Ganesha = () => {
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 🎥 Background Video */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={ganesha}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* 🕉️ Ganesha Murti Section */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-8">🕉️ Ganesha Murti Collection</h1>
        <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          Divine idols of Lord Ganesha crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GaneshaMurti.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform"
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate("/buyitem", {
                  state: {
                    product: { ...item, quantity: 1 },
                    currency,
                  },
                })
              }
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-black">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-yellow-600 font-bold">
                  {currency} {convert(item.price)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔙 Back Button */}
        <motion.button
          className="mt-12 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
        >
          🔙 Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Ganesha;
