import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import k from "../assets/k.png";
import main from "../assets/main.mp4"; 
import { useAuth } from "../Context/AuthContext";
import { useCurrency } from "../Context/CurrencyContext"; // currency context
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



const Home = () => {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [open, setOpen] = useState(false); // currency dropdown toggle
  const { currency, setCurrency, convert } = useCurrency(); // use context
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setShowChatbot(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    AED: "د.إ"
  };

  const featuredProducts = [
  {
    id: "101",
    name: "AirMax Thunder",
    price: 100,
    image: g1,
  },
  {
    id: "102",
    name: "Ultra Boost X",
    price: 120,
    image: g2,
  },
  {
    id: "103",
    name: "Street King",
    price: 90,
    image: g3,
  },
  {
    id: "104",
    name: "All Weather Pro",
    price: 150,
    image: g4,
  },
  {
    id: "105",
    name: "Sunrise Sandals",
    price: 100,
    image: g5,
  },
  {
    id: "106",
    name: "Lovely Heels",
    price: 120,
    image: g6,
  },
  {
    id: "201",
    name: "Barbie Queen",
    price: 90,
    image: s3,
  },
  {
    id: "401",
    name: "jewellery",
    price: 90,
    image: k1,
  },
  {
    id: "402",
    name: "Sunrise Sandals",
    price: 100,
    image: k2,
  },
  {
    id: "403",
    name: "Lovely Heels",
    price: 120,
    image: k3,
  },
  {
    id: "501",
    name: "Barbie Queen",
    price: 90,
    image: l1,
  },
  {
    id: "502",
    name: "jewellery",
    price: 90,
    image: l2,
  },
];

const famousJewellery = [
  {
    id: "61",
    name: "Divine Gold Pendant",
    price: 250,
    image: p1,
  },
  {
    id: "62",
    name: "Traditional Kundan Set",
    price: 300,
    image: p2,
  },
  {
    id: "71",
    name: "Royal Temple Necklace",
    price: 280,
    image: e1,
  },
  {
    id: "72",
    name: "Elegant Pearl Choker",
    price: 200,
    image: e2,
  },
  {
    id: "81",
    name: "Heritage Silver Anklet",
    price: 150,
    image: r1,
  },
  {
    id: "82",
    name: "Antique Maang Tikka",
    price: 100,
    image: r2,
  },
];



  return (
    <div className="bg-yellow-50 text-yellow-500 min-h-screen flex flex-col">
      

      {/* 🔔 Banner */}
     {/* <div className="fixed top-0 left-0 w-full z-50 bg-black h-12 flex items-center overflow-hidden">
  <motion.div
    className="whitespace-nowrap text-white text-lg font-semibold px-4"
    animate={{ x: ["100%", "-100%"] }}
    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
  >
    🔥 Summer Sale Live! Up to 50% OFF on Sneakers – Shop Now! 🔥
  </motion.div>
</div> */}


      {/* 🎥 Hero Background Video */}
    <div className="relative w-full h-screen z-0">
  <video
    src={main}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
</div>

{/* 📸 Horizontal Product Slider */}
{/* <div className="relative px-6 mt-12 mb-16">
  <h2 className="text-3xl font-bold text-center mb-6">✨ Explore Our Collection</h2>

  <div className="relative">
     Scrollable container 
    <div
      id="product-scroll-container"
      className="flex overflow-x-auto  space-x-6 scrollbar-hide scroll-smooth transition-all duration-500"
    >
      {featuredProducts.slice(0, 10).map((item) => (
        <div
          key={item.id}
          className="min-w-[200px] flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <h3 className="text-yellow-500 font-semibold text-md">
              {item.name}
            </h3>
            <p className="text-black font-bold text-sm">
              {currencySymbols[currency]} {convert(item.price)}
            </p>
          </div>
        </div>
      ))}
    </div>*/}

    {/* Left Button
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full shadow-md"
      onClick={() =>
        document
          .getElementById("product-scroll-container")
          .scrollBy({ left: -300, behavior: "smooth" })
      }
    >
      ◀
    </button>

    {/* Right Button 
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full shadow-md"
      onClick={() =>
        document
          .getElementById("product-scroll-container")
          .scrollBy({ left: 300, behavior: "smooth" })
      }
    >
      ▶
    </button>
  </div>
</div> */}

<div className="px-50">
      {/* 🏠 Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Step Into <span className="text-gray-600">Comfort & Style</span>
          </h1>
          <p className="text-lg text-yellow mb-6">
            Discover the latest sneaker trends with unmatched quality & design.
          </p>
          <motion.button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/AllProducts")}
          >
            Shop Now
          </motion.button>
        </motion.div>

       

        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={k}
            alt="Sneaker Shoe"
            className="w-96 drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* 💍 Famous Jewellery Section */}
<div className="px-6 py-12 bg-transparent">
  <h2 className="text-3xl font-bold text-center mb-8">💍 Famous Jewellery</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {famousJewellery.map((jewel) => (
      <motion.div
        key={jewel.id}
        className="bg-transparent rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${jewel.id}`)}
      >
        <img
          src={jewel.image}
          alt={jewel.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-2 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{jewel.name}</h3>
          <p className="text-black font-bold mt-2">
            {currencySymbols[currency]} {convert(jewel.price)}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent outer onClick
              navigate(`/product/${jewel.id}`);
            }}
          >
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>

{/* feature products */}
    <div className="px-6 py-12 bg-transparent">
  <h2 className="text-3xl font-bold text-center mb-8">🔥 Featured Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {featuredProducts.map((product) => (
      <motion.div   
        key={product.id}
        className="bg-transparent rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}  
          className="w-full h-60 object-cover"
        />
        <div className="p-2 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-black font-bold  mt-2">
            {currencySymbols[currency]} {convert(product.price)}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering the parent div's onClick
              navigate(`/product/${product.id}`);
            }}
          >

          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>



      {/* 🗣 Testimonials */}
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            { name: "John Doe", review: "Best sneakers I've ever owned!" },
            { name: "Jane Smith", review: "Super comfortable and stylish!" },
            { name: "Mike Johnson", review: "Great quality at a great price!" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg italic mb-2">"{testimonial.review}"</p>
              <h4 className="text-xl font-bold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 💱 Floating Currency Switcher */}
      {showChatbot && (
        <div className="fixed bottom-5 right-5 z-50">
          <motion.div
            className="bg-gray-700 p-4 rounded-full cursor-pointer shadow-lg flex items-center space-x-2 text-white"
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(!open)}
          >
            💱 <span className="text-sm">{currency}</span>
          </motion.div>

          {open && (
            <div className="mt-2 bg-white text-black rounded-lg shadow-xl p-3 absolute bottom-16 right-0 w-40">
              {["USD", "INR", "AED"].map((cur) => (
                <div
                  key={cur}
                  onClick={() => {
                    setCurrency(cur);
                    setOpen(false);
                  }}
                  className={`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                    cur === currency ? "font-bold text-blue-600" : ""
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
        <p>© 2025 Your Store. All Rights Reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default Home;
