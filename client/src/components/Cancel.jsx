import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-50 dark:bg-black dark:text-white px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Payment Cancelled ❌
      </h1>
      <p className="text-lg text-center mb-8">
        Oops! It seems like the payment was cancelled. You can try again anytime.
      </p>
      <Link
        to="/course"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
      >
        Return to Courses
      </Link>
    </div>
  );
}

export default Cancel;
