import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <About />
      </div>

      <Footer />
    </>
  );
}

export default Aboutus;
