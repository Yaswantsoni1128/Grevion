import React from 'react';

const Home2 = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-10 bg-white">
      <div className="flex flex-col items-center w-full p-6 bg-white rounded-lg md:flex-row md:p-10">
        {/* Left Side - Images */}
        <div className="relative flex-shrink-0 w-full md:w-1/2">
          <div className="overflow-hidden rounded-full">
            <img src="./harvestor.jpeg" alt="Tractor in field" className="rounded-full h-96 w-96 " />
          </div>
          <div className="absolute bottom-[-30px] left-[-30px] w-48 h-48 overflow-hidden border-4 border-white rounded-full">
            <img src="./seeds.jpg" alt="Hand holding seeds" className="w-full h-full rounded-full " />
          </div>
        </div>
        
        {/* Right Side - Text */}
        <div className="flex flex-col w-full p-6 md:w-1/2">
          <h4 className="font-semibold text-yellow-500">Our Introductions</h4>
          <h2 className="text-3xl font-bold text-gray-800">Agriculture & Organic Product Farm</h2>
          <p className="mt-2 font-semibold text-green-600">Agrios is the largest global organic farm.</p>
          <p className="mt-4 text-gray-600">
            There are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form by injected humor or
            random words which don’t look even.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">🌱</span>
              <p className="font-medium text-gray-700">Growing fruits & vegetables</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">🍊</span>
              <p className="font-medium text-gray-700">Tips for ripening your fruits</p>
            </div>
          </div>
          
          {/* Bullet Points */}
          <ul className="mt-4 text-gray-600">
            <li>✅ Lorem ipsum is not simply random text.</li>
            <li>✅ Making this the first true generator on the internet.</li>
          </ul>
          
          {/* Button */}
          <button className="px-6 py-3 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home2;