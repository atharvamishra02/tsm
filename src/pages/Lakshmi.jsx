import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

import lakshmi from "../assets/lakshmi.mp4";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.jpg";
import l6 from "../assets/l6.jpg";

const LakshmiMurti = [
  { id: 501, name: "Flute Krishna Idol", price: 350, image: l1 },
  { id: 502, name: "Bal Krishna in Swing", price: 420, image: l2 },
  { id: 503, name: "Krishna with Radha", price: 500, image: l3 },
  { id: 504, name: "Makhan Chor Krishna", price: 390, image: l4 },
  { id: 505, name: "Krishna with Cow", price: 450, image: l5 },
  { id: 506, name: "Blessing Krishna", price: 400, image: l6 },
];

const Lakshmi = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🎥 Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={lakshmi}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌸 Lakshmi Murti Grid */}
      <motion.div
        className="min-h-screen bg-amber-50 text-yellow-700 py-10 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">🕉️ Lakshmi Murti Collection</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl text-lg">
          Divine idols of Goddess Lakshmi crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {LakshmiMurti.map((item) => (
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

export default Lakshmi;
