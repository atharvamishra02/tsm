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
  { id: 101, name: "Flute Krishna Idol", price: 350, image: g1 },
  { id: 102, name: "Bal Krishna in Swing", price: 420, image: g2 },
  { id: 103, name: "Krishna with Radha", price: 500, image: g3 },
  { id: 104, name: "Makhan Chor Krishna", price: 390, image: g4 },
  { id: 105, name: "Krishna with Cow", price: 450, image: g5 },
  { id: 106, name: "Blessing Krishna", price: 400, image: g6 },
];

const Ganesha = () => {
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  return (
    <>
      {/* 🎥 Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={ganesha}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📿 Ganesha Murti Showcase */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-50 text-yellow-800 py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">🕉️ Ganesha Murti Collection</h1>
        <p className="text-gray-700 mb-10 text-center max-w-2xl text-lg">
          Divine idols of Lord Ganesha crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {GaneshaMurti.map((item) => (
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
              <p className="text-blue-500 font-bold">
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

export default Ganesha;
