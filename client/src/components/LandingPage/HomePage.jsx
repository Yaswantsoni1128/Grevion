import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const HomePage = () => {
  const features = [
    {title : "Feature-1" , heading: "Providing spoc details" , pic: "./seeds.jpg"},
    {title : "Feature-2" , heading: "Providing power details" , pic: "./seeds.jpg"},
    {title : "Feature-3" , heading: "Providing farmer details" , pic: "./seeds.jpg"},
  ]
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-green-600">Grevion</div>
        <ul className="hidden space-x-6 md:flex">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">About</li>
          <li className="cursor-pointer hover:text-green-600">Services</li>
          <li className="cursor-pointer hover:text-green-600">Projects</li>
          <li className="cursor-pointer hover:text-green-600">Shop</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>
        </ul>
        <div className="hidden text-gray-600 md:block"><button className="px-4 py-2 text-lg font-medium text-white cursor-pointer bg-emerald-500 rounded-xl hover:bg-emerald-400"><Link to={"/login"}>Get Started</Link></button></div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-[80vh] bg-cover bg-center " 
        style={{ backgroundImage: "url('/hero_landing.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">Agriculture & Eco Farming</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="px-6 py-3 mt-6 text-white rounded-lg bg-emerald-500 hover:bg-green-600">Discover More</button>
        </div>
        <section className="absolute p-2 -bottom-32">
        <div className="flex gap-5 p-6 rounded-lg ">
          {features.map((item,idx)=>(
            <FeatureCard key={idx} title={item.title} heading={item.heading} pic={item.pic} />
          ))}
        </div>
        
      </section>
      </header>

      {/* Features Section */}
      
    </div>
  );
};

export default HomePage;