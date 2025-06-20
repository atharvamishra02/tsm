import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s4 from "../assets/s4.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";
import k5 from "../assets/k5.jpg";

const About = () => {
  const [stats, setStats] = useState({ customers: 0, years: 0, stores: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        customers: prev.customers < 5000 ? prev.customers + 100 : 5000,
        years: prev.years < 10 ? prev.years + 1 : 10,
        stores: prev.stores < 50 ? prev.stores + 1 : 50,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-50 py-35 text-white min-h-screen">
      
      <motion.div
        className="max-w-5xl mx-auto p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-6 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-black leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Welcome to <b>The Spiritual Trend</b>, where passion meets craftsmanship! We are dedicated
          to bringing you **stylish, comfortable, and high-performance** Items
          for every occasion. Whether you’re an Bhakt, a trendsetter, or someone
          who values comfort, we have the perfect peice for you.
        </motion.p>

      
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img src={s4} alt="Shoe Collection" className="rounded-lg w-80 shadow-lg" />
        </motion.div>
      </motion.div>

    
      <motion.div
        className="max-w-4xl mx-auto bg-yellow-500 p-8 rounded-lg text-center shadow-lg mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-white mb-3">Our Mission</h3>
        <p className="text-gray-200">
          Our goal is simple: **To revolutionize the way you wear shoes**. We focus on
          **innovation, durability, and sustainability**, ensuring top-notch quality.
          Every pair is designed for unmatched comfort and elegance.
        </p>
      </motion.div>

      
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-500">Our Journey</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          {[
            { title: "Happy Customers", value: stats.customers },
            { title: "Years in Business", value: stats.years },
            { title: "Worldwide Stores", value: stats.stores },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg w-60"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl font-bold text-yellow-500">{stat.value}+</h3>
              <p className="text-gray-300">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-500">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: k3, name: "Sarah Johnson", role: "CEO & Founder" },
            { img: k4, name: "David Smith", role: "Head Designer" },
            { img: k5, name: "Emily Davis", role: "Marketing Lead" },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-yellow-500 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-yellow-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-500">What Our Customers Say</h2>
        <motion.div
          className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 italic">"Absolutely love the comfort and style of ShoeVerse! These sneakers are a game changer. 💙"</p>
          <p className="text-yellow-500 mt-4">- Alex Carter</p>
        </motion.div>
      </div>

    
      <motion.div
        className="text-center mt-8 pb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.button
          className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/shop")}
        >
          Explore Our Collection
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
