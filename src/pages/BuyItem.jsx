import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

const BuyItem = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { currency, convert } = useCurrency();

  if (!state?.product) return <p className="text-white p-10">Product not found.</p>;

  const [quantity, setQuantity] = useState(state.product.quantity || 1);
  const item = { ...state.product, quantity };

 const handleBuyNow = () => {
  navigate("/checkout", {
    state: {
      item,
      currency,
    },
  });
};

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-black text-white px-10 py-40 flex flex-col lg:flex-row items-center gap-10">
      {/* Left - Images */}
      <div className="flex flex-col items-center lg:items-start gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-[400px] h-[400px] object-cover rounded-xl border border-white/20"
        />
        <div className="flex gap-3 mt-4">
          {/* 👇 Replace with real alternate images if you have them */}
          {[item.image, item.image, item.image].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="angle"
              className="w-24 h-24 object-cover rounded border border-white/10"
            />
          ))}
        </div>
      </div>

      {/* Right - Info */}
      <div className="flex-1 max-w-xl flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{item.name}</h2>
        <p className="text-blue-400 text-xl font-semibold">
          {currency} {Number(convert(item.price * quantity)).toFixed(2)}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={decreaseQty}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={increaseQty}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        <div className="flex gap-4 mt-6">
          <motion.button
            onClick={() => addToCart(item)}
            className="flex-1 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
          <motion.button
            onClick={handleBuyNow}
            className="flex-1 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </div>

        <motion.button
          onClick={() => navigate(-1)}
          className="mt-10 text-gray-400 underline"
          whileHover={{ scale: 1.1 }}
        >
          ⬅ Back to Collection
        </motion.button>
      </div>
    </div>
  );
};

export default BuyItem;
