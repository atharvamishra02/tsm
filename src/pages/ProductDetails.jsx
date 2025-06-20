import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../Context/CurrencyContext";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";

const products = [
  { id: "101", name: "Ganesha", price: 100, image: g1, category: "ganesha" },
  { id: "102", name: "Laughing Ganesha", price: 120, image: g2, category: "ganesha" },
  { id: "103", name: "Gajanand", price: 90, image: g3, category: "ganesha" },
  { id: "104", name: "Ganpati", price: 60, image: g4, category: "ganesha" },
  { id: "105", name: "Bappa", price: 60, image: g5, category: "ganesha" },
  { id: "106", name: "Ganesha ji", price: 60, image: g6, category: "ganesha" },
  { id: "401", name: "MIghty Krishna", price: 200, image: k1, category: "krishna" },
  { id: "402", name: "Kanha", price: 200, image: k2, category: "krishna" },
  { id: "403", name: "kanhaiya", price: 200, image: k3, category: "krishna" },
];

const categoryRouteMap = {
  ganesha: "/murti/ganesha",
  krishna: "/murti/krishna",
  jewellery: "/jewellery",
};

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const { currency, convert } = useCurrency();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  const similarItems = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleSimilarClick = (item) => {
    const route = categoryRouteMap[item.category.toLowerCase()];
    if (route) {
      navigate(route);
    } else {
      console.warn("No route defined for category:", item.category);
      navigate("/");
    }
  };

  return (
    <div className="bg-amber-50 text-yellow-500 min-h-screen px-6 py-40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-yellow-500">{product.description}</p>
          <p className="text-blue-400 font-bold">
            {currency} {convert(product.price)}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>

      {similarItems.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Similar Items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {similarItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => handleSimilarClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-blue-400 font-bold">
                    {currency} {convert(item.price)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
