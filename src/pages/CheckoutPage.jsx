import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

 const item = state?.item;

  const cartItems = state?.cartItems;
  const currency = state?.currency || "₹";

  const totalPrice = state?.total
    ? parseFloat(state.total)
    : (item?.price || 0) * (item?.quantity || 1);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!item && (!cartItems || cartItems.length === 0)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">❌ No products to checkout.</p>
      </div>
    );
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handlePayment = () => {
    alert("✅ Order placed successfully!");
    navigate("/thank-you");
  };

  const paymentOptions = [
    { key: "card", label: "Credit / Debit Card" },
    { key: "gpay", label: "Google Pay" },
    { key: "phonepe", label: "PhonePe" },
    { key: "rupay", label: "RuPay" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-40 flex flex-col md:flex-row gap-6 p-6">
      {/* Left Form */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        {step === 1 && (
          <>
            <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>
            {["address1", "address2", "city", "state", "pincode"].map(
              (field, index) => (
                <input
                  key={index}
                  type="text"
                  name={field}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border rounded"
                />
              )
            )}
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="font-semibold text-lg mb-4">Payment Method</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {paymentOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setPaymentMethod(option.key)}
                  className={`border p-3 rounded-lg text-center font-medium ${
                    paymentMethod === option.key
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white"
                  } hover:shadow-md`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Credit/Debit Card Form */}
            {paymentMethod === "card" && (
              <>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border rounded"
                />
              </>
            )}

            {/* Simulate GPay, PhonePe, RuPay */}
            {paymentMethod !== "card" && (
              <div className="text-center p-4 bg-gray-50 border rounded mb-4">
                <p className="text-gray-700 font-semibold mb-2">
                  {paymentOptions.find((opt) => opt.key === paymentMethod)?.label} selected.
                </p>
                <p className="text-sm text-gray-500">
                  You will be redirected to complete the payment.
                </p>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Pay {currency}
                {totalPrice}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Product Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Your Order</h3>
        {cartItems ? (
          cartItems.map((prod, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4"
            >
              <div>
                <p className="font-semibold">{prod.name}</p>
                <p className="text-sm text-gray-600">
                  Qty: {prod.quantity || 1} × {currency}
                  {prod.price}
                </p>
              </div>
              <img
                src={prod.image}
                alt={prod.name}
                className="w-16 h-16 object-cover rounded"
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                Qty: {item.quantity || 1} × {currency}
                {item.price}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
          </div>
        )}
        <hr className="my-4" />
        <h4 className="text-lg font-bold">
          Total: {currency}
          {totalPrice}
        </h4>
      </div>
    </div>
  );
};

export default CheckoutPage;
