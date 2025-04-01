import React from "react";
import { NavLink } from "react-router-dom";

const SpocNavbar = () => {
  const navItems = [
    { name: "Dashboard", path: "/spoc/dashboard" },
    { name: "Add Farmer", path: "/spoc/add-farmer" },
    { name: "Farmer Listing", path: "/spoc/farmer-listing" },
    { name: "Order Request", path: "/spoc/paralis-request" },
    { name: "Profile", path: "/spoc/profile" },
  ];

  return (
    <div>
      <nav className="w-full bg-green-950 text-white px-20 py-4 shadow-lg flex justify-between items-center">
        <div className="w-auto container mx-auto flex justify-between space-x-8 text-md font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive ? "border-b-2 border-white" : ""
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

export default SpocNavbar;
