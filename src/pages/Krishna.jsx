import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

// 🎥 Media
import krishna from "../assets/krishna.mp4";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";
import k5 from "../assets/k5.jpg";
import k6 from "../assets/k6.jpg";

// 🕉️ Krishna Products
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
    <div className="bg-black min-h-screen text-white">
      {/* 🎥 Background Video */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={krishna}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🛍 Krishna Collection */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-yellow-600  font-bold text-center mb-4 mt-8">
        Krishna Murti Collection
        </h1>
        <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          Spiritual elegance meets modern design — explore our Krishna-inspired collection crafted with devotion and detail.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {krishnaProducts.map((item) => (
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

        {/* 🔙 Back to Home */}
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

export default Krishna;
