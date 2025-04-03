import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PowerPlantNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/getUserInfo`,{
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log(response.data)
        console.log("Fetched User:", response.data.user); // Debugging

        setUser(response.data.user); // Ensure user object is correctly stored
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const navItems = [
    { name: "Dashboard", path: "/powerplant/dashboard" },
    { name: "SPOC Listing", path: "/powerplant/spocs-listing" },
    { name: "My Orders", path: "/powerplant/my-orders" },
    { name: "Profile", path: "/powerplant/profile" },
  ];

  return (
    <div>
      <nav className="w-full bg-green-950 text-white px-20 py-4 shadow-lg flex justify-between items-center">
        <div className="w-auto container mx-auto flex justify-between space-x-8 text-lg font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-gray-200 transition-all duration-100 pb-2 ${
                  isActive ? "border-b-2 border-white " : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="w-[10%] flex justify-end items-center">
          {user?.image?.trim() ? (
            <img
              src={user.image}
              alt="User Profile"
              className="w-8 h-8 rounded-full border-2 border-white"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40"; // Fallback image
              }}
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-sm">
              ?
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default PowerPlantNavbar;
