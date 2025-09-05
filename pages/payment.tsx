import { useEffect } from "react";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function Payment() {
  useEffect(() => {
    // load Paystack script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    document.body.appendChild(script);
  }, []);

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_xxxxxxxxxx", // replace with your Paystack PUBLIC key
      email: "customer@email.com",
      amount: 2500000, // amount in kobo (₦25,000 = 2500000)
      currency: "NGN",
      callback: function (response: any) {
        alert("Payment successful. Reference: " + response.reference);
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Payment</h1>
        <p className="mb-4">Pay ₦25,000 monthly for Bright Step Tutoring</p>
        <button
          onClick={payWithPaystack}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Pay with Paystack
        </button>
      </div>
    </div>
  );
}
