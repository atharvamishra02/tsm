import React from "react";

const Support = () => {
  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-900">
      <h1 className="text-4xl text-white font-bold mb-6 text-center text-black">Customer Support</h1>

      <div className="max-w-3xl mx-auto shadow-2xl rounded-xl p-8 space-y-6">
        <p className="text-white text-lg">
          Need help? Our team is here for you 24/7.
        </p>

        <div className="space-y-4">
          <p><strong className="text-white">Email:</strong> <a className="text-blue-600 font-extrabold underline" href="mailto:support@shoeverse.com">support@shoeverse.com</a></p>
          <p><strong className="text-white">Phone:</strong> <a className="text-blue-600 font-extrabold underline" href="tel:+919999999999">+91 99999 99999</a></p>
          <p className="text-white"><strong className="text-white">Live Chat:</strong> Available on the bottom right of the website during working hours.</p>
        </div>

        <div>
          <h2 className="text-2xl text-white font-semibold mb-2">FAQs</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>How do I track my order?</li>
            <li>What is your return policy?</li>
            <li>Can I cancel or modify my order?</li>
            <li>How do I reset my password?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
