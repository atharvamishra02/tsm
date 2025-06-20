import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import earring from "../assets/earring.mp4";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.jpg";  
import e6 from "../assets/e6.jpg";

const EarringsProducts = [
  { id: 71, name: "Heart of Gold", price: 90, image: e1 },
  { id: 72, name: "Silver Infinity", price: 85, image: e2 },
  { id: 73, name: "Crystal Bloom", price: 110, image: e3 },
  { id: 74, name: "Vintage Locket", price: 100, image: e4 },
  { id: 75, name: "Starshine Pearl", price: 120, image: e5 },
  { id: 76, name: "Ocean Drop", price: 95, image: e6 },
];

const Earrings = () => {
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  return (
    <>
      {/* 🎥 Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={earring}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 💍 Earring Product Grid */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">💍 Earring Collection</h1>
        <p className="text-gray-400 mb-10 text-center max-w-2xl text-lg">
          Elegant earrings designed to add grace and charm to any outfit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {EarringsProducts.map((item) => (
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

export default Earrings;
