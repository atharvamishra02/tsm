import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/submit", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", age: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center py-50 justify-center bg-amber-50">
      <motion.div
        className="w-full max-w-lg bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Appointment
        </h2>
        <p className="py-5">Please provide your contact details below, including email and phone number. In the comment section, mention the piece you'd like made, its approximate size, and your budget.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <label className="text-yellow-500 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <label className="text-yellow-500 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="p-3 bg-transparent border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <label className="text-yellow-500 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <label className="text-yellow-500 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 bg-transparent border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold tracking-wide transition hover:bg-yellow-700 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
