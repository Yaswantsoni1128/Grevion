import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function LandingImage() {

    const companies = [
        { name: "FocalPoint", highlighted: false },
        { name: "Polymath", highlighted: false },
        { name: "Lightbox", highlighted: true },
        { name: "Alt+Shift", highlighted: false },
        { name: "Nietzsche", highlighted: false },
        { name: "Acme Corp", highlighted: false },
        { name: "Spheru", highlighted: false },
        { name: "Quantum Dynamics", highlighted: false },
      ];

    return (
        <div className="bg-green-950 text-white pb-20 px-20 pt-10 relative flex flex-col items-start mx-auto shadow-lg">
        {/* image  */}
          <div className="relative mt-10">
            <div className="relative w-[90vw] mx-auto">
              <img
                src="https://img.freepik.com/free-photo/3d-view-sun-sky-with-nature-landscape_23-2150953621.jpg?t=st=1743486587~exp=1743490187~hmac=5ece2e955454beab6bf3776af0020f31dcd12fa072e621ad4ee5d234c9264da6&w=1380"
                alt="Energy Trading Visualization"
                className="w-full h-[550px] object-cover rounded-md"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 23%, 100% 91%, 94% 91%, 91% 100%, 0 100%, 0% 70%, 0 10%, 12% 10%)" }}
              />
              <button className="absolute top-0 left-0 bg-lime-300 text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:font-semibold hover:bg-lime-400 text-[1.2rem]">
                Get Started
              </button>
              <Link to={"/login"}>
                <button className="absolute top-0 left-[8.6rem] hover:bg-lime-300 hover:text-gray-900 text-gray-200 rounded-full font-medium hover:font-semibold bg-opacity-25 bg-green-600 p-[0.7rem] text-[1.2rem]   shadow-md">
                  <FaArrowRight/>
                </button>
              </Link>

              <div className="absolute bottom-0 right-0 flex space-x-2">
                <button className="bg-lime-300 text-gray-900 rounded-full font-medium hover:font-semibold hover:bg-lime-400 shadow-md p-[0.7rem] text-[1.2rem]"><FaArrowLeft /></button>
                <button className="hover:bg-lime-300 hover:text-gray-900 text-gray-200 rounded-full font-medium hover:font-semibold bg-opacity-25 bg-green-600 shadow-md p-[0.7rem] text-[1.2rem]"><FaArrowRight/></button>
              </div>
            </div>
          </div>

        {/* companies  */}
        <div className="text-center pt-10 w-full max-w-7xl">
                <h2 className="text-lg sm:text-xl font-light">
                    Connecting the world’s <span className="text-lime-400 font-semibold">Greatest Companies</span> to their Customers.
                </h2>
                <div className="flex justify-center items-center gap-6 flex-wrap mt-4 px-4">
                    {companies.map((company, index) => (
                        <span
                            key={index}
                            className={`text-white text-sm sm:text-lg font-semibold ${company.highlighted ? 'text-white' : 'opacity-50'}`}
                        >
                            {company.name}
                        </span>
                    ))}
                </div>
            </div>
    </div>
    );
};
    

export default LandingImage