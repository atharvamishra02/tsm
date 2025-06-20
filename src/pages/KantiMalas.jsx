import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import kanthi from "../assets/kanthi.mp4";
import km1 from "../assets/km1.webp";
import km2 from "../assets/km2.webp";
import km3 from "../assets/km3.webp";
import km4 from "../assets/km4.webp";
import km5 from "../assets/km5.webp";
import km6 from "../assets/km6.webp";

// 📿 Kanti Mala Products
const kantiProducts = [
  { id: 91, name: "Tulsi Kanti Mala", price: 80, image: km1 },
  { id: 92, name: "Sandalwood Kanti", price: 95, image: km2 },
  { id: 93, name: "Spiritual Rudraksha", price: 120, image: km3 },
  { id: 94, name: "Sacred 2-Strand Tulsi", price: 100, image: km4 },
  { id: 95, name: "Triple Rudraksha Beads", price: 140, image: km5 },
  { id: 96, name: "Neem Wood Mala", price: 90, image: km6 },
];

const KantiMalas = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🎥 Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={kanthi}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📿 Mala Display */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">📿 Kanti Mala Collection</h1>
        <p className="text-gray-400 mb-8 text-center max-w-2xl text-lg">
          Sacred malas for spiritual connection, crafted with devotion and authenticity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {kantiProducts.map((item) => (
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

export default KantiMalas;
