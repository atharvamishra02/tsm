// src/App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CurrencyConverter from "./components/CurrencyConverter";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Support = lazy(() => import("./pages/Support"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Chains = lazy(() => import("./pages/Chains"));
const KantiMalas = lazy(() => import("./pages/KantiMalas"));
const Rings = lazy(() => import("./pages/Rings"));
const Earrings = lazy(() => import("./pages/Earrings"));
const Pendants = lazy(() => import("./pages/Pendants"));
const Krishna = lazy(() => import("./pages//Krishna"));
const Shiva = lazy(() => import("./pages/Shiva"));
const Hanuman = lazy(() => import("./pages/Hanuman"));
const Ganesha = lazy(() => import("./pages/Ganesha"));
const Lakshmi = lazy(() => import("./pages/Lakshmi"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const Returns = lazy(() => import("./pages/Returns"));
const Shipping = lazy(() => import("./pages/Shipping"));
const CustomMurthi = lazy(() => import("./pages/CustomMurthi"));
const CustomJewellery = lazy(() => import("./pages/CustomJewellery"));
const CreateAccountPage = lazy(() => import("./pages/CreateAccountPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const BuyItem = lazy(() => import("./pages/BuyItem"));


function App() {
  const [converterVisible, setConverterVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setConverterVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating on all pages */}
      {converterVisible && <CurrencyConverter />}

      {/* Always-on Navbar */}
      <Navbar />

      {/* Suspense for lazy pages */}
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/jewellery/pendants" element={<Pendants />} />
         <Route path="/jewellery/earrings" element={<Earrings />} />
          <Route path="/jewellery/rings" element={<Rings />} />
         <Route path="/jewellery/chains" element={<Chains />} />
          <Route path="/jewellery/kanti-malas" element={<KantiMalas />} />
          <Route path="/murti/krishna" element={<Krishna />} />
          <Route path="/murti/shiva" element={<Shiva />} />
          <Route path="/murti/hanuman" element={<Hanuman />} />
          <Route path="/murti/ganesha" element={<Ganesha />} />
          <Route path="/murti/lakshmi" element={<Lakshmi />} />
          <Route path="/support/help-center" element={<HelpCenter />} />
          <Route path="/support/returns" element={<Returns />} />
          <Route path="/support/shipping-info" element={<Shipping />} />
          <Route path="/custom/custom-murti" element={<CustomMurthi />} />
          <Route path="/custom/custom-Jewellery" element={<CustomJewellery />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/buyitem" element={<BuyItem />} />






          

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
