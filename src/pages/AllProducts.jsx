import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useCurrency } from "../Context/CurrencyContext";

// ✅ Product images
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

// 🛍️ Product list
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

const Shop = () => {
  const { currency, convert } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen py-15 text-yellow-600">
      <motion.div
        className="py-2 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 mt-10">
          🛒 Collection
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-xl mx-auto">
          Browse our curated collection of sneakers. Style meets comfort.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
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
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-black font-bold mb-3">
                  {currency} {convert(item.price)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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

export default Shop;
