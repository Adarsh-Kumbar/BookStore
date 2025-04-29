import React, { useState } from "react";
import BannerImage from "../assets/BannerImage.png";
import toast from "react-hot-toast";

function Banner() {
  const [myemail, setMyemail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (myemail) {
      toast.success("Subscribed to newsletter successfully!");
      setMyemail("");
    } else {
      toast.error("Please enter valid email address.");
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-6 py-7 md:px-20 md:py-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-32 mt-12">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Welcome to the <span className="text-red-500">Book Store</span>,
              where stories come to life!
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Step into a world of endless possibilities, where every page holds
              a new adventure, mystery, and discovery. Whether you're a book
              lover or a casual reader, our collection of books has something
              for everyone. Find your next favorite read today!
            </p>

            <div className="space-y-4">
              <form onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11ZM2 4.5A.5.5 0 0 1 2.5 4h11a.5.5 0 0 1 .5.5v.305l-6 2.9-6-2.9V4.5Zm0 1.52 5.76 2.784a.5.5 0 0 0 .48 0L14 6.02V11.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6.02Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Your Email"
                    value={myemail}
                    required="true"
                    onChange={(e) => setMyemail(e.target.value)}
                  />
                </label>
                <br />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center">
          <img
            src={BannerImage}
            alt="Banner"
            className="w-72 md:w-96 h-auto object-contain mt-10 md:mt-0"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
