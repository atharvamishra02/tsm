import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import pendants from "../assets/pendants.mp4";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const pendantProducts = [
  { id: 61, name: "Heart of Gold", price: 90, image: p1 },
  { id: 62, name: "Silver Infinity", price: 85, image: p2 },
  { id: 63, name: "Crystal Bloom", price: 110, image: p3 },
  { id: 64, name: "Vintage Locket", price: 100, image: p4 },
  { id: 65, name: "Starshine Pearl", price: 120, image: p5 },
  { id: 66, name: "Ocean Drop", price: 95, image: p6 },
];

const Pendants = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* 🎥 Video Header */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={pendants}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🛍 Product Grid */}
      <motion.div
        className="py-5 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-8">
        Pendants Collection
        </h1>
        <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          Elegant pendants to elevate your style – from minimal to majestic.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pendantProducts.map((item) => (
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

export default Pendants;
