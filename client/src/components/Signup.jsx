import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    // send the data to the server for signup
    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful!");
          navigate(from, { replace: true });
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          console.error(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="modal modal-open ">
        <div className="modal-box w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className=" w-80 px-3 py-1 border outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <br />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className=" w-80 px-3 py-1 border outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex mt-4 justify-between">
              <button className="bg-pink-500 text-white rounded-md mt-2 px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>

              <div className="flex">
                <p className="mt-2 text-md">Have account? </p>
                <button
                  className="underline text-blue-500 cursor-pointer ml-1"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </form>

          <Login />
        </div>
      </div>
    </>
  );
}

export default Signup;
