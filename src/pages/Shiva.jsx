import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import shiva from "../assets/shiva.mp4";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

const ShivaMurti = [
  { id: 201, name: "Flute Krishna Idol", price: 350, image: s1 },
  { id: 202, name: "Bal Krishna in Swing", price: 420, image: s2 },
  { id: 203, name: "Krishna with Radha", price: 500, image: s3 },
  { id: 204, name: "Makhan Chor Krishna", price: 390, image: s4 },
  { id: 205, name: "Krishna with Cow", price: 450, image: s5 },
  { id: 206, name: "Blessing Krishna", price: 400, image: s6 },
];

const Shiva = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🌸 Fullscreen Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={shiva}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🙏 Krishna Murti Grid */}
      <motion.div
        className="min-h-screen bg-amber-50 text-yellow-500 py-10 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">🕉️ Shiva Murti Collection</h1>
        <p className="text-yellow-500 mb-8 text-center max-w-2xl">
          Divine idols of Lord Shiva crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {ShivaMurti.map((item) => (
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

export default Shiva;
