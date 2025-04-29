import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contactpage/Contacts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Aboutus from "./aboutus/Aboutus";
import Sucess from "./components/Sucess";
import Cancel from "./components/Cancel";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/success" element={<Sucess />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
