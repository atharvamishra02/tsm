import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import hanuman from "../assets/hanuman.mp4";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";

const HanumanMurti = [
  { id: 301, name: "Veer Hanuman Idol", price: 350, image: h1 },
  { id: 302, name: "Flying Hanuman Statue", price: 420, image: h2 },
  { id: 303, name: "Panchmukhi Hanuman", price: 500, image: h3 },
  { id: 304, name: "Hanuman with Gada", price: 390, image: h4 },
  { id: 305, name: "Sankat Mochan Idol", price: 450, image: h5 },
  { id: 306, name: "Meditating Hanuman", price: 400, image: h6 },
];

const Hanuman = () => {
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  return (
    <div className="bg-black min-h-screen text-yellow-800">
      {/* 🎥 Background Video */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={hanuman}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🛕 Hanuman Murti Section */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-8">
          Hanuman Murti Collection
        </h1>
        <p className="text-center text-gray-700 mb-10 text-lg max-w-xl mx-auto">
          Divine idols of Lord Hanuman crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HanumanMurti.map((item) => (
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

        {/* 🔙 Back to Home */}
        <motion.button
          className="mt-12 mx-auto block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-lg"
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

export default Hanuman;
