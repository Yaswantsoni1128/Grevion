import React from "react";
import { NavLink } from "react-router-dom";

const PowerPlantNavbar = () => {
  const navItems = [
    { name: "Dashboard", path: "/powerplant/dashboard" },
    { name: "SPOC Listing", path: "/powerplant/spocs-listing" },
    { name: "My Orders", path: "/powerplant/my-orders" },
    { name: "MakePayment", path: "/powerplant/make-payment" },
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
          <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile_image" className="w-8 h-8 rounded-full"/>
        </div>
      </nav>
    </div>
  );
};

export default PowerPlantNavbar;
