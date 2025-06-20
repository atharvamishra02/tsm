import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

// 🕉️ Media
import krishna from "../assets/krishna.mp4";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";
import k5 from "../assets/k5.jpg";
import k6 from "../assets/k6.jpg";

// 🕉️ Krishna products data
const krishnaProducts = [
  { id: 101, name: "Blue Peacock Kurta", price: 210, image: k1 },
  { id: 102, name: "Flute Charm Pendant", price: 150, image: k2 },
  { id: 103, name: "Krishna Wall Art", price: 320, image: k3 },
  { id: 104, name: "Traditional Mukut Set", price: 180, image: k4 },
  { id: 105, name: "Bansuri Wooden Decor", price: 240, image: k5 },
  { id: 106, name: "Divine Krishna Statue", price: 290, image: k6 },
];

const Krishna = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🌌 Background Video Only */}
      <div className="w-full h-screen overflow-hidden">
        <video
          src={krishna}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🙏 Krishna Product Grid */}
      <motion.div
        className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">🕉️ Krishna Collection</h1>
        <p className="text-gray-300 mb-10 text-center max-w-2xl text-lg">
          Spiritual elegance meets modern design — explore our Krishna-inspired collection crafted with devotion and detail.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {krishnaProducts.map((item) => (
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
          className="mt-16 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-lg"
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

export default Krishna;
