import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/landingPage");
  };

  const navItems = [
    { content: "Who we are?", path: "/landingPage/whoweare" },
    { content: "What we do?", path: "/landingPage/whatwedo" },
    { content: "Sustainability", path: "/landingPage/sustainability" },
  ];

  return (
    <>
      <nav className="bg-green-950 px-20 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold cursor-pointer text-lime-400">Grevion</h1>

        <div className="hidden space-x-6 text-white md:flex">
          {navItems.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className={`relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                location.pathname === item.path ? "after:scale-x-100 font-semibold text-gray-300" : "hover:text-gray-300"
              }`}
            >
              {item.content}
            </Link>
          ))}
        </div>
        <div className="flex items-center px-2 space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-medium text-gray-900 rounded-full shadow-lg bg-lime-300 hover:font-semibold hover:bg-lime-400"
            >
              Logout
            </button>
          ) : (
            <button className="px-4 py-2 font-medium text-gray-900 rounded-full shadow-lg bg-lime-300 hover:font-semibold hover:bg-lime-400">
              <Link to="/login">Get Started</Link>
            </button>
          )}
        </div>
      </nav>
      <hr className="border-green-900 opacity-99 shadow-sm" />
    </>
  );
};

export default Navbar;
