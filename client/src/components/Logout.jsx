import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = async () => {
    try {
      setAuthUser({
        ...authUser,
        User: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully!");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
