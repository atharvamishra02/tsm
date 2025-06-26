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
  { id: 501, name: "Lakshmi on Lotus", price: 350, image: l1 },
  { id: 502, name: "Golden Lakshmi Idol", price: 420, image: l2 },
  { id: 503, name: "Lakshmi with Elephants", price: 500, image: l3 },
  { id: 504, name: "Graceful Lakshmi", price: 390, image: l4 },
  { id: 505, name: "Lakshmi with Wealth Pot", price: 450, image: l5 },
  { id: 506, name: "Blessing Lakshmi Murti", price: 400, image: l6 },
];

const Lakshmi = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-yellow-700">
      {/* 🎥 Header Video */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          src={lakshmi}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top"
        />
      </div>

      {/* 🛍️ Heading + Grid */}
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-8">
        Lakshmi Murti Collection
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-xl mx-auto">
          Divine idols of Goddess Lakshmi crafted with devotion, grace, and tradition.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {LakshmiMurti.map((item) => (
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

export default Lakshmi;
