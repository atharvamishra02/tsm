import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

import pendantVideo from "../assets/pendantBg.mp4"; // 🎥 Background video
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

// 💎 Products
const pendantProducts = [
  { id: 61, name: "Heart of Gold", price: 90, image: p1 },
  { id: 62, name: "Silver Infinity", price: 85, image: p2 },
  { id: 63, name: "Crystal Bloom", price: 110, image: p3 },
  { id: 64, name: "Vintage Locket", price: 100, image: p4 },
  { id: 65, name: "Starshine Pearl", price: 120, image: p5 },
  { id: 66, name: "Ocean Drop", price: 95, image: p6 },
];

const Pendants = () => {
  const { addToCart } = useCart();
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <>
      {/* 🌟 Background Video */}
      <div className="w-full relative h-screen overflow-hidden">
        <video
          src={pendantVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 💍 Product Grid */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">💍 Pendant Collection</h1>
        <p className="text-gray-400 mb-8 text-center max-w-2xl">
          Elegant pendants to elevate your style – from minimal to majestic.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {pendantProducts.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4 border border-white/10"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-blue-400 font-bold">
                {currency} {convert(item.price)}
              </p>
              <motion.button
                className="mt-4 px-4 py-2 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </motion.button>
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

export default Pendants;
