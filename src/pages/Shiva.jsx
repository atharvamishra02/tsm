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
  { id: 201, name: "Shiva with Trishul", price: 350, image: s1 },
  { id: 202, name: "Meditating Shiva", price: 420, image: s2 },
  { id: 203, name: "Shiva Tandav Pose", price: 500, image: s3 },
  { id: 204, name: "Blessing Shiva Idol", price: 390, image: s4 },
  { id: 205, name: "Nataraj Brass Murti", price: 450, image: s5 },
  { id: 206, name: "Shiva Lingam Set", price: 400, image: s6 },
];

const Shiva = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-yellow-600">
      {/* 🎥 Header Video */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <video
          src={shiva}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🕉️ Heading + Grid */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-8">
          Shiva Murti Collection
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-xl mx-auto">
          Divine idols of Lord Shiva crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ShivaMurti.map((item) => (
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

export default Shiva;
