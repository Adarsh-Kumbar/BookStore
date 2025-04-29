import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-50 dark:bg-black dark:text-white px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Payment Successful! 🎉
      </h1>
      <p className="text-lg text-center mb-8">
        Thank you for your purchase. We hope you enjoy your product!
      </p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default Success;
