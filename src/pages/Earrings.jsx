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
      <div className="bg-black min-h-screen text-white">
        {/* 🎥 Background Video */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <video
            src={earring}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          />
        </div>

        {/* 💍 Earring Collection */}
        <motion.div
          className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4 mt-8">Earring Collection</h1>
          <p className="text-center text-gray-400 mb-10 text-lg max-w-xl mx-auto">
            Elegant earrings designed to add grace and charm to any outfit.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {EarringsProducts.map((item) => (
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

export default Earrings;
