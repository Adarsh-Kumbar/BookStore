import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container mx-auto max-w-screen-2xl px-6 py-7 md:px-20 md:py-4 ">
        <section className="dark:bg-black dark:text-white py-28 px-6  ">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
              About Us
            </h1>
            <p className="mt-4 text-gray-300 dark:text-gray-400">
              Where every story begins.
            </p>
            <p className="text-gray-300 dark:text-gray-400">
              Discover your next great read with Only Book Store.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Bookshelf"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-300 dark:text-gray-300 mb-6">
                At <strong> Book Store</strong>, we believe that books are more
                than just paper and ink — they’re journeys, ideas, and lifelong
                companions. We offer a wide selection of genres, from fiction
                and fantasy to academic and self-help, all carefully chosen to
                meet your reading needs. Whether you're looking to learn,
                escape, or explore, you'll find a book that speaks to you here.
              </p>
              <Link to="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
