// src/pages/Shop.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import r1 from "../assets/r1.webp";
import r2 from "../assets/r2.webp";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";

import { useContext } from "react";
import React from "react";
import { useCart } from "../Context/CartContext";
import { useCurrency } from "../Context/CurrencyContext";

const products = [
  { id: 401, name: "Nike Air Max", price: 120, image: k1 },
  { id: 402, name: "Nike Air rubberBand", price: 140, image: k2 },
  { id: 201, name: "Reebok Classic", price: 110, image: s1 },
  { id: 202, name: "New Balance 574", price: 100, image: s2 },
  { id: 501, name: "Black Skeleto", price: 100, image: l1 },
  { id: 502, name: "Red Tape (Clean White)", price: 100, image: l2 },
  { id: 101, name: "Puma Running Shoes", price: 100, image: g1 },
  { id: 102, name: "Nike Green", price: 100, image: g2 },
  { id: 301, name: "New Balance", price: 100, image: h1 },
  { id: 302, name: "Hard Charcoal", price: 100, image: h2 },
  { id: 61, name: "Hard Charcoal", price: 100, image: p1 },
  { id: 62, name: "Hard Charcoal", price: 100, image: p2 },
  { id: 71, name: "Hard Charcoal", price: 100, image: e1 },
  { id: 72, name: "Hard Charcoal", price: 100, image: e2 },
  { id: 81, name: "Hard Charcoal", price: 100, image: r1 },
  { id: 82, name: "Hard Charcoal", price: 100, image: r2 },
  { id: 41, name: "Hard Charcoal", price: 100, image: c1 },
  { id: 42, name: "Hard Charcoal", price: 100, image: c2 },
];

const AllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 px-50 via-gray-800 to-black text-white py-40 px-6 flex flex-col items-center animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">🛒 Welcome to the Shop</h1>
      <p className="text-gray-400 mb-8 text-center">
        Find the best sneakers for your style!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            <div className="flex gap-5">
            <motion.button
              className="mt-4 px-4 py-2 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </motion.button>
            <motion.button
              className="mt-4 px-4 py-2 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                addToCart(item); // Add item to cart first
                navigate("/checkout"); // Then redirect to checkout
              }}
            >
              Buy Now
            </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-12 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold text-lg rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
      >
        🔙 Back to Home
      </motion.button>
    </motion.div>
  );
};

export default AllProducts;
