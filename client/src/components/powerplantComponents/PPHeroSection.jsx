import React from 'react';

function PPHeroSection() {
  return (
    <div className="relative bg-[url('https://img.freepik.com/free-photo/industrial-power-plant-night_1232-123.jpg?w=1380')] bg-cover bg-center h-[80vh] flex items-center text-white px-10 md:px-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-center text-7xl w-[80vw] md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Welcome to the <span className="text-yellow-400">Power Plant Dashboard</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-slide-up text-center w-[80vw]">
          The Power Plant Dashboard streamlines the process of ordering and managing resources from SPOCs, ensuring efficient procurement and distribution of materials. With a user-friendly interface and real-time tracking, it optimizes operations and enhances workflow efficiency.
        </p>
      </div>
    </div>
  );
}

export default PPHeroSection;
