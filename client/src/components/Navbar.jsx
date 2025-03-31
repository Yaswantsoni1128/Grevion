import React from "react";

const Navbar = () => {

  return (
    <>
    <nav className="bg-green-950 px-20 py-4 flex items-center justify-between ">
      <h1 className="text-lime-400 text-2xl font-bold cursor-pointer">Grevion</h1>
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#" className="hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Who we are?</a>
        <a href="#" className="hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">What we do?</a>
        <a href="#" className="hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Sustainability</a>
        <a href="#" className="hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Careers</a>
      </div>
      <div className="flex items-center space-x-4 px-2">
        <button className="bg-lime-300 text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:font-semibold hover:bg-lime-400">
          Get Started
        </button>
      </div>
    </nav>
    <hr className="border-green-900 opacity-99 shadow-sm"/>
    </>
  );
};

export default Navbar;
