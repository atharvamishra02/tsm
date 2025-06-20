// src/components/CurrencyConverter.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCurrency } from "../Context/CurrencyContext";

const CurrencyConverter = () => {
  const [open, setOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const options = ["USD", "INR", "AED"];
  const currencySymbols = {
    USD: "$",
    INR: "₹",
    AED: "د.إ",
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating button to toggle dropdown */}
      <motion.div
        className="bg-gray-700 p-4 rounded-full cursor-pointer shadow-lg flex items-center space-x-2 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-xl">💱</span>
        <span className="text-sm">{currency}</span>
      </motion.div>

      {/* Dropdown menu */}
      {open && (
        <div className="mt-2 bg-white text-black rounded-lg shadow-xl p-2 absolute bottom-16 right-0 w-40">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setCurrency(opt);
                setOpen(false);
              }}
              className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded ${
                opt === currency ? "font-bold text-blue-600" : "text-gray-800"
              }`}
            >
              <span>{opt}</span>
              <span>{currencySymbols[opt]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
