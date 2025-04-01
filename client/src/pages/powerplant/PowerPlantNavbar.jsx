import React from "react";
import { NavLink } from "react-router-dom";

const PowerPlantNavbar = () => {
  const navItems = [
    { name: "Dashboard", path: "/powerplant/dashboard" },
    { name: "My Orders", path: "/powerplant/my-orders" },
    { name: "SPOC Listing", path: "/powerplant/spocs-listing" },
    { name: "MakePayment", path: "/powerplant/make-payment" },
    { name: "Profile", path: "/powerplant/profile" },
  ];

  return (
    <div>
      <nav className="w-full bg-green-950 text-white px-20 py-6 shadow-lg flex justify-between items-center">
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
          <img src="./bg_home.jpg" alt="profile_image" className="w-8 h-8 rounded-full"/>
        </div>
      </nav>
    </div>
  );
};

export default PowerPlantNavbar;
