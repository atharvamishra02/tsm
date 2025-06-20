import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";  
import App from "./App";
import "./index.css";  
import { CartProvider } from "./Context/CartContext"; 
import { CurrencyProvider } from "./Context/CurrencyContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider> 
      <React.StrictMode>
        <CartProvider>
          <CurrencyProvider>
          <App />
          </CurrencyProvider>
        </CartProvider>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
