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
    <>
      {/* 🎥 Fullscreen Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={ring}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 💍 Rings Collection */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">💍 Ring Collection</h1>
        <p className="text-gray-400 mb-8 text-center max-w-2xl">
          Exquisite rings crafted for elegance, commitment, and bold style statements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {ringProducts.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                className="w-full h-60 object-cover rounded-md mb-4 border border-white/10"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-blue-400 font-bold">
                {currency} {convert(item.price)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔙 Back to Home */}
        <motion.button
          className="mt-12 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
        >
          🔙 Back to Home
        </motion.button>
      </motion.div>
    </>
  );
};

export default Rings;
