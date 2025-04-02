import React from 'react'

function SpocHeroSection() {
    return (
    <div className="relative bg-[url('https://img.freepik.com/free-photo/rolls-hay-field_1161-246.jpg?t=st=1743576883~exp=1743580483~hmac=0f1201846d490f40580baa01deb9dd107d2d214a503abe7ccd1e96c9bd83f4f4&w=1380')] bg-cover bg-center h-[80vh] flex items-center text-white px-10 md:px-20">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-center text-7xl w-[80vw] md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
        Welcome to the <span className="text-yellow-400">SPOC Dashboard</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 animate-slide-up text-center w-[80vw]">
          The SPOC Dashboard is designed to empower administrators with a comprehensive platform for managing farmer interactions, tracking requests, and overseeing agricultural operations seamlessly. With an intuitive interface and real-time insights, it simplifies decision-making and enhances productivity.
        </p>
  
    </div>
  </div>
);
}


export default SpocHeroSection