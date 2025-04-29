import React from "react";
import { loadStripe } from "@stripe/stripe-js";

function Cards({ item }) {
  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPEPK);
    // Send product as an array
    const body = {
      products: [
        {
          price: item.price,
          title: item.title,
          image: item.image,
          category: item.category,
        },
      ],
    };
    const header = {
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:3000/user/payment", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="px-2">
      <div className="card bg-base-100 shadow-xl md:w-full w-auto hover:scale-105 duration-700 dark:bg-black dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="line-clamp-2">{item.author}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            {item.category === "Free" || item.price === 0 ? (
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white  cursor-pointer">
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  Read Online
                </a>
              </div>
            ) : (
              <button
                onClick={makePayment}
                className="badge badge-outline hover:bg-pink-500 hover:text-white  cursor-pointer"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
