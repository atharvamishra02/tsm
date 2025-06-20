import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import chain from "../assets/chain.mp4"; // ⛓️ Background video
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";  

// ⛓️ Chain products
const chainProducts = [
  { id: 41, name: "Minimal Gold Chain", price: 180, image: c1 },
  { id: 42, name: "Silver Cuban Link", price: 160, image: c2 },
  { id: 43, name: "Layered Rope Chain", price: 170, image: c3 },
  { id: 44, name: "Flat Snake Chain", price: 190, image: c4 },
  { id: 45, name: "Figaro Steel Chain", price: 150, image: c5 },
  { id: 46, name: "Beaded Elegant Chain", price: 200, image: c6 },
];

const Chains = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🔁 Fullscreen Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={chain}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* ⛓️ Chain Product Grid */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">⛓️ Chain Collection</h1>
        <p className="text-gray-400 mb-10 text-center max-w-2xl text-lg">
          Elegant chains designed for timeless appeal, versatile style, and premium quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {chainProducts.map((item) => (
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
    </>
  );
};

export default Chains;
