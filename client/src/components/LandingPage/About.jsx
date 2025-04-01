import React from "react";
import About_section_Card from "./About_section_Card";

export default function AboutUsSection() {
  const cards = [
    {btnText: "Farmer" , details: "We are focusing on the empowerment of Agri" , img_url: "./farmer.jpg" , title:"Grow"},
    {btnText: "SPOC" , details: "We are focusing on the empowerment of agri" , img_url: "./spoc.jpg" , title:"Spoc"},
    {btnText: "Industry" , details: "We are focusing on the empowerment of agri" , img_url: "./powerplant.jpg" , title:"PowerPlant"}
  ]
  return (
    <div className="bg-gray-100 py-12 px-20 text-black flex flex-col relative">
      
      <div className="max-w-4xl ">
        <button className="bg-green-400 px-3 py-1 rounded-full text-lg font-semibold -rotate-12">About Us</button>
        <h2 className="text-2xl font-bold mt-4">
        Sustainable Crop Residue Management
        </h2>
        <p className="text-gray-600 mt-2 w-1/2">
        Connects farmers with industries for residue utilization, turning waste into a valuable resource.</p>
        <p className="text-gray-600 mt-2 w-1/2">Provides eco-friendly alternatives to burning, such as composting and biofuel production.</p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6 max-w-5xl absolute right-32 top-1">
        <img
          src="/parali.jpeg"
          alt="Agriculture Drone"
          className="w-48 h-48 object-cover rounded-lg shadow-lg md:order-last -rotate-12"
        />
      </div>
      <div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 m-auto">
          {cards.map((item , id)=>(
            <About_section_Card key={id} btnText={item.btnText} details={item.details} img_url={item.img_url} title={item.title} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <h2 className="font-bold mt-12 m-auto w-1/3 text-black text-center text-3xl">
        One Platform to Make <button className="bg-green-950 text-xl text-white px-6 py-1 rounded-full -rotate-[5deg]">Agriculture</button> Resilient
      </h2>
    </div>
  );
}
