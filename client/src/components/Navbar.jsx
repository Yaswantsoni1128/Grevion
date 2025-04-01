import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  const navItems = [
    {content: "Who we are?"},
    {content: "What we do?"},
    {content: "Sustainability"},
    {content: "Careers"},
  ]

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-green-950">
      <h1 className="text-2xl font-bold cursor-pointer text-lime-400">Grevion</h1>
      
      <div className="hidden space-x-6 text-white md:flex">
        {navItems.map((item,idx)=>(
          <Link 
          to={"#"} 
          key={idx} 
          className="hover:text-gray-300 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {item.content}
          </Link>
        ))}
      </div>
      <div className="flex items-center px-2 space-x-4">
        <button className="px-4 py-2 font-medium text-gray-900 rounded-full shadow-lg bg-lime-300 hover:font-semibold hover:bg-lime-400">
          <Link to={"/login"} >Get Started</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
