"use client";
import { useEffect } from "react";

export default function PaymentPage() {
  useEffect(() => {
    // Load Paystack script dynamically
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payWithPaystack = () => {
    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_b2730e07b2fb1c068acf25a45d8d70c04dc5a1e2", // ✅ Your public key
      email: "customer@email.com",
      amount: 2500000, // amount in kobo (₦25,000 = 2500000)
      currency: "NGN",
      callback: function (response: any) {
        alert("Payment successful! Transaction reference: " + response.reference);
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Make a Payment</h1>
        <p className="mb-6 text-gray-700">Click the button below to pay ₦25,000 securely using Paystack.</p>
        <button
          onClick={payWithPaystack}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
