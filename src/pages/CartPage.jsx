import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const [currency, setCurrency] = useState("₹");
  const navigate = useNavigate();
  const conversionRate = 85;

  // ✅ Ensure every cart item has a quantity of at least 1
  useEffect(() => {
    const updated = cartItems.map((item) =>
      item.quantity ? item : { ...item, quantity: 1 }
    );
    setCartItems(updated);
  }, []);

  const convert = (price) =>
    currency === "$" ? price : price * conversionRate;

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleBuyNow = (item) => {
    navigate("/checkout", {
      state: {
        product: item,
        currency,
      },
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-10 py-40">
      <h1 className="text-3xl font-bold mb-20 text-center">🛒 Your Cart</h1>

      <div className="flex justify-end mb-4">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-gray-800 text-white border border-white/20 px-4 py-2 rounded-lg"
        >
          <option value="₹">INR (₹)</option>
          <option value="$">USD ($)</option>
        </select>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-xl mt-20">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-lg border border-white/20 mb-4"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-blue-400 font-bold mt-1">
                {currency}{" "}
                {convert(
                  (item.price || 0) * (item.quantity || 1)
                ).toFixed(2)}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  +
                </button>
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => handleBuyNow(item)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 flex justify-between items-center px-4">
          <div className="text-xl font-bold text-blue-300">
            Total: {currency} {convert(totalPrice).toFixed(2)}
          </div>
          <button
            onClick={() =>
              navigate("/checkout", {
                state: {
                  cartItems,
                  currency,
                  total: convert(totalPrice).toFixed(2),
                },
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold"
          >
            🛍️ Buy All
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
