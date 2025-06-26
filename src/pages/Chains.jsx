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
      <div className="bg-black min-h-screen text-white">
        {/* 🎥 Background Video */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <video
            src={chain}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          />
        </div>

        {/* ⛓️ Collection Section */}
        <motion.div
          className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4 mt-8">
            ⛓️ Chain Collection
          </h1>
          <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
            Elegant chains designed for timeless appeal, versatile style, and premium quality.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chainProducts.map((item) => (
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

export default Chains;
