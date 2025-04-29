import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios';

const course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try{
        const res = await axios.get("http://localhost:3000/book");
        const data = res.data.filter((book) => book.category === "Paid");
        console.log(data);
        setBook(data);
      }
      catch(err){
        console.log(err)
      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Explore our latest premium collection crafted for passionate{" "}
            <span className="text-red-500">book lovers :)</span>
          </h1>
          <p className="mt-6 text-gray-500">
            We believe in bringing the best of literature to life with our
            creative and thought-provoking courses. Get ready to dive into the
            world of classic literature while learning about the stories,
            characters, and themes that have shaped human history.
          </p>

          <Link to="/">
            <button className="mt-5 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-x-1 gap-y-3">
          {book.map((item) => (
            <Cards key={item.id} item={item}></Cards>
          ))}
        </div>
      </div>
    </>
  );
};

export default course;
