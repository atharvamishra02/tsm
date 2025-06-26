import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import ring from "../assets/ring.mp4";
import r1 from "../assets/r1.webp";
import r2 from "../assets/r2.webp";
import r3 from "../assets/r3.webp";
import r4 from "../assets/r4.webp";
import r5 from "../assets/r5.webp";
import r6 from "../assets/r6.webp";

const ringProducts = [
  { id: 81, name: "Diamond Solitaire", price: 200, image: r1 },
  { id: 82, name: "Rose Gold Band", price: 180, image: r2 },
  { id: 83, name: "Twisted Silver Ring", price: 160, image: r3 },
  { id: 84, name: "Pearl Crown Ring", price: 175, image: r4 },
  { id: 85, name: "Vintage Leaf Ring", price: 190, image: r5 },
  { id: 86, name: "Sapphire Royal", price: 220, image: r6 },
];

const Rings = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 🎥 Video Header */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={ring}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🛍 Product Grid */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-4xl font-bold text-center mb-4 mt-8">
           Rings Collection
        </h1>
        <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          Elegant rings that reflect love, style, and timeless beauty.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ringProducts.map((item) => (
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

export default Rings;
