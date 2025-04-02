import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/landingPage");
  };

  const navigateToDashboard = () => {
    const userRole = localStorage.getItem("role");

    if(userRole === "spoc"){
      navigate("/spoc/dashboard")
    }
    else{
      navigate("/powerplant/dashboard")
    }
  };

  const navItems = [
    { content: "Who we are?", path: "/landingPage/whoweare" },
    { content: "What we do?", path: "/landingPage/whatwedo" },
    { content: "Sustainability", path: "/landingPage/sustainability" },
    { content: "FAQs", path: "/landingPage/faqs" },
  ];

  return (
    <>
      <nav className="bg-green-950 px-20 py-4 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold cursor-pointer text-lime-400">Grevion</h1>
        </Link>

        <div className="hidden space-x-6 text-white md:flex">
          {navItems.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className={`relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                location.pathname === item.path ? item.path :""
              }`}
            >
              {item.content}
            </Link>
          ))}
        </div>
        <div className="flex items-center px-2 space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center justify-between gap-5">
              <MdDashboard onClick={navigateToDashboard} className="text-lime-300 w-8 h-8 cursor-pointer hover:text-lime-400 shadow-lg" />
              <MdLogout onClick={handleLogout} className="text-lime-300 w-6 h-6 hover:text-red-500 shadow-lg  cursor-pointer" />
              
            </div>
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
