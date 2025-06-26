import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import main from "../assets/main.mp4";
import k from "../assets/k.png";
import { useAuth } from "../Context/AuthContext";
import { useCurrency } from "../Context/CurrencyContext";

// Assets
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import s3 from "../assets/s3.jpg";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import r1 from "../assets/r1.webp";
import r2 from "../assets/r2.webp";
import h1 from "../assets/h1.jpg";
import c1 from "../assets/c1.jpg";
import km1 from "../assets/km1.webp";

const Home = () => {
  const navigate = useNavigate();
  const [showCurrency, setShowCurrency] = useState(true);
  const [open, setOpen] = useState(false);
  const { currency, setCurrency, convert } = useCurrency();
  const { user } = useAuth();

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    AED: "د.إ",
  };

  const featuredProducts = [
    { id: "101", name: "AirMax Thunder", price: 100, image: g1 },
    { id: "102", name: "Ultra Boost X", price: 120, image: g2 },
    { id: "103", name: "Street King", price: 90, image: g3 },
    { id: "104", name: "All Weather Pro", price: 150, image: g4 },
    { id: "105", name: "Sunrise Sandals", price: 100, image: g5 },
    { id: "106", name: "Lovely Heels", price: 120, image: g6 },
  ];

  const famousJewellery = [
    { id: "61", name: "Divine Gold Pendant", price: 250, image: p1 },
    { id: "62", name: "Traditional Kundan Set", price: 300, image: p2 },
    { id: "71", name: "Royal Temple Necklace", price: 280, image: e1 },
    { id: "72", name: "Elegant Pearl Choker", price: 200, image: e2 },
    { id: "81", name: "Heritage Silver Anklet", price: 150, image: r1 },
    { id: "82", name: "Antique Maang Tikka", price: 100, image: r2 },
  ];

  const categories = [
    { name: "chains", image: c1, link: "/jewellery/chains" },
    { name: "Earrings", image: e2, link: "/jewellery/earrings" },
    { name: "Rings", image: r2, link: "/jewellery/rings" },
    { name: "Pendants", image: p1, link: "/jewellery/pendants" },
    { name: "KantiMalas", image: km1, link: "/jewellery/kanti-malas" },
    { name: "Ganesha", image: g1, link: "/murti/ganesha" },
    { name: "Hanuman", image: h1, link: "/murti/hanuman" },
    { name: "Krishna", image: k1, link: "/murti/krishna" },
    { name: "Lakshmi", image: l1, link: "/murti/lakshmi" },
    { name: "shiva", image: s3, link: "/murti/shiva" },
  ];

  return (
    <div className="bg-black text-yellow-500 min-h-screen flex flex-col">
      {/* 🎥 Hero Background */}
     {/* 🎥 Hero Background Video */}
<div className="relative w-full h-screen z-0">
  <video
    src={main}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover object-top"
  />
</div>

{/* 🖼️ Floating Image + Text and Button */}
<section className="bg-black text-center flex flex-col items-center justify-center px-4 py-10">
  {/* 🌟 Floating Image */}
  <motion.img
    src={k} // your floating image
    alt="Floating Visual"
    className="w-52 sm:w-64 md:w-72 lg:w-80 drop-shadow-lg mb-6"
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  />

  {/* 📝 Heading + Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-black"
  >
    <h1 className="text-3xl sm:text-4xl text-white md:text-5xl font-bold mb-4">
      Step Into <span className="text-yellow-500">Comfort & Style</span>
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 mb-6">
      Discover the latest sneaker trends with unmatched quality & design.
    </p>
    <motion.button
      className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/AllProducts")}
    >
      Shop Now
    </motion.button>
  </motion.div>
</section>


{/* 🧭 Category Cards */}
<section className="px-4 sm:px-6 py-10">
  <h2 className="text-3xl font-bold text-center mb-6">🛍️ Shop by Category</h2>

  {/* 🌐 Mobile: 2-column grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-5">
    {categories.map((cat, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-md rounded-lg cursor-pointer"
        onClick={() => navigate(cat.link)}
      >
        <img
          src={cat.image}
          alt={cat.name}
          className="h-32 w-full object-cover rounded-t-lg"
        />
        <div className="p-2 text-center font-semibold">{cat.name}</div>
      </motion.div>
    ))}
  </div>

  {/* 🖥️ Desktop: Horizontal scroll slider */}
  <div className="hidden md:flex overflow-x-auto space-x-6 scrollbar-hide px-1">
    {categories.map((cat, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="min-w-[300px] bg-white shadow-md rounded-lg cursor-pointer flex-shrink-0"
        onClick={() => navigate(cat.link)}
      >
        <img
          src={cat.image}
          alt={cat.name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
        <div className="p-3 text-center font-semibold text-lg">{cat.name}</div>
      </motion.div>
    ))}
  </div>
</section>



      {/* 💍 Famous Jewellery */}
      <section className="px-4 sm:px-6 py-8">
  <h2 className="text-3xl font-bold text-center mb-6">💍 Famous Jewellery</h2>

  {/* Mobile Slider */}
  <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:hidden">
    {famousJewellery.map((jewel) => (
      <motion.div
        key={jewel.id}
        className="min-w-[200px] bg-white rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${jewel.id}`)}
      >
        <img src={jewel.image} alt={jewel.name} className="h-40 w-full object-cover rounded-t" />
        <div className="p-3">
          <h3 className="text-lg font-semibold text-black">{jewel.name}</h3>
          <p className="text-yellow-600 font-bold">
            {currencySymbols[currency]} {convert(jewel.price)}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
    {famousJewellery.map((jewel) => (
      <motion.div
        key={jewel.id}
        className="bg-white rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${jewel.id}`)}
      >
        <img src={jewel.image} alt={jewel.name} className="h-48 w-full object-cover rounded-t" />
        <div className="p-3">
          <h3 className="text-lg font-semibold text-black">{jewel.name}</h3>
          <p className="text-yellow-600 font-bold">
            {currencySymbols[currency]} {convert(jewel.price)}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* 🔥 Featured Products */}
    <section className="px-4 sm:px-6 py-8">
  <h2 className="text-3xl font-bold text-center mb-6">🔥 Featured Products</h2>

  {/* Mobile Slider */}
  <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:hidden">
    {featuredProducts.map((product) => (
      <motion.div
        key={product.id}
        className="min-w-[200px] bg-white rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-t" />
        <div className="p-3">
          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <p className="text-yellow-600 font-bold">
            {currencySymbols[currency]} {convert(product.price)}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
    {featuredProducts.map((product) => (
      <motion.div
        key={product.id}
        className="bg-white rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-t" />
        <div className="p-3">
          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <p className="text-yellow-600 font-bold">
            {currencySymbols[currency]} {convert(product.price)}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    

      {/* 🗣 Testimonials */}
      <section className="py-12 px-4 sm:px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-600">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {[{ name: "John Doe", review: "Best sneakers I've ever owned!" },
            { name: "Jane Smith", review: "Super comfortable and stylish!" },
            { name: "Mike Johnson", review: "Great quality at a great price!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white text-center p-6 rounded-xl shadow-md w-full md:w-1/3"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-lg italic text-gray-700 mb-2">"{t.review}"</p>
              <h4 className="text-xl font-bold text-yellow-700">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💱 Floating Currency Switcher */}
      {showCurrency && (
        <div className="fixed bottom-5 right-5 z-50">
          <motion.div
            className="bg-gray-800 p-3 rounded-full cursor-pointer shadow-xl text-white flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(!open)}
          >
            💱 <span className="text-sm">{currency}</span>
          </motion.div>
          {open && (
            <div className="mt-2 bg-white text-black rounded-md shadow-xl p-3 absolute bottom-16 right-0 w-36">
              {["USD", "INR", "AED"].map((cur) => (
                <div
                  key={cur}
                  onClick={() => {
                    setCurrency(cur);
                    setOpen(false);
                  }}
                  className={`p-2 cursor-pointer hover:bg-gray-100 rounded ${
                    cur === currency ? "font-bold text-yellow-600" : ""
                  }`}
                >
                  {cur}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 📌 Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        <p>© 2025 ShoeVerse. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
