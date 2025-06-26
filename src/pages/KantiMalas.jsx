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
      {/* 🎥 Fullscreen Background Video */}
      <div className="bg-black min-h-screen text-white">
            {/* 🎥 Header Video */}
            <div className="relative w-full h-[80vh] overflow-hidden">
              <video
                src={kanthi}
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover"
              />
            </div>

      {/* 📿 Collection Section */}
       <motion.div
              className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-bold text-center mb-4 mt-8">
                kanthi Mala Collection
              </h1>
              <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
                Spiritual elegance meets modern design — explore our Krishna-inspired collection crafted with devotion and detail.
              </p>
      
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {kantiProducts.map((item) => (
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
    </>
  );
};

export default KantiMalas;
